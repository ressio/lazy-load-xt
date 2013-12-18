/*jslint browser:true, plusplus:true, vars:true */
/*jshint browser:true, jquery:true */
/*jshint -W040:false */ /* to don't alert on "this" in triggerLoad and triggerError */

(function ($, window, document) {
    'use strict';

    // options
    var options = {
            autoInit: true,
            selector: 'img',
            srcAttr: 'data-src',
            classNojs: 'lazy',
            blankImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            edgeX: 0,
            edgeY: 0,
            throttle: 99,
            visibleOnly: true,
            loadEvent: 'pageshow', // check AJAX-loaded content in jQueryMobile
            updateEvent: 'load orientationchange resize scroll', // page-modified events
            forceEvent: '', // force loading of all elements
            oninit: null, // init handler
            onshow: null, // start loading handler
            onload: null, // load success handler
            onerror: null // error handler
        },
        $window = $(window),
        elements = [],
        viewportTop,
        viewportBottom,
        viewportLeft,
        viewportRight,
        topLazy = 0,
    /*
     waitingMode=0 : no setTimeout
     waitingMode=1 : setTimeout, no deferred events
     waitingMode=2 : setTimeout, deferred events
     */
        waitingMode = 0;

    $.lazyLoadXT = $.extend(options, $.lazyLoadXT);

    /**
     * Add new elements to lazy-load list:
     * $(elements).lazyLoadXT() or $(window).lazyLoadXT()
     */
    $.fn.lazyLoadXT = function (overrides) {
        overrides = overrides || {};

        var blankImage = overrides.blankImage || options.blankImage,
            classNojs = overrides.classNojs || options.classNojs;

        return this.each(function () {
            if (this === window) {
                $(options.selector).lazyLoadXT();
                return;
            }

            var $el = $(this);

            // prevent duplicates
            if ($el.data('lazied')) {
                return;
            }

            $el
                .data('lazied', 1)
                .removeClass(classNojs);

            if (blankImage && $el[0].tagName === 'IMG' && !$el.attr('src')) {
                $el.attr('src', blankImage);
            }

            triggerEvent('init', $el);

            var objdata = {o: $el};
            $.each(['srcAttr', 'edgeX', 'edgeY', 'visibleOnly'], function (i, name) {
                objdata[name] = overrides[name] || options[name];
            });
            elements.unshift(objdata); // push it in the first position as we iterate elements in reverse order
        });
    };


    /**
     * Save visible viewport boundary to viewportXXX variables
     */
    function calcViewport() {
        viewportTop = $window.scrollTop();
        viewportBottom = viewportTop + (window.innerHeight || $window.height());

        viewportLeft = window.pageXOffset || 0;
        viewportRight = viewportLeft + (window.innerWidth || $window.width());
    }


    /**
     * Process function/object event handler
     * @param {string} event suffix
     * @param {jQuery} $el
     */
    function triggerEvent(event, $el) {
        $el.trigger('lazy' + event);

        var handler = options['on' + event];
        if (handler) {
            if ($.isFunction(handler)) {
                handler.call($el[0]);
            } else {
                $el
                    .addClass(handler.addClass)
                    .removeClass(handler.removeClass);
            }
        }

        // queue next check as images may be resized after loading of actual file
        queueCheckLazyElements();
    }


    /**
     * Trigger onload handler
     */
    function triggerLoad() {
        triggerEvent('load', $(this));
    }


    /**
     * Trigger onerror handler
     */
    function triggerError() {
        triggerEvent('error', $(this));
    }


    /**
     * Load visible elements
     * @param {bool} [force] loading of all elements
     */
    function checkLazyElements(force) {
        if (!elements.length) {
            return;
        }

        topLazy = Infinity;
        calcViewport();

        for (var i = elements.length - 1; i >= 0; i--) {
            var objData = elements[i],
                $el = objData.o,
                el = $el[0];

            // remove items that are not in DOM
            if (!$.contains(document.body, el)) {
                elements.splice(i, 1);
            } else if (force || !objData.visibleOnly || el.offsetWidth > 0 || el.offsetHeight > 0) {
                var offset = $el.offset(),
                    elTop = offset.top,
                    elLeft = offset.left,
                    topEdge = elTop - objData.edgeY;

                if (force ||
                    ((topEdge < viewportBottom) && (elTop + $el.height() > viewportTop - objData.edgeY) &&
                        (elLeft < viewportRight + objData.edgeX) && (elLeft + $el.width() > viewportLeft - objData.edgeX))) {

                    triggerEvent('show', $el);

                    var srcAttr = objData.srcAttr,
                        src = $.isFunction(srcAttr) ? srcAttr($el) : $el.attr(srcAttr);
                    if (src) {
                        $el
                            .on('load', triggerLoad)
                            .on('error', triggerError)
                            .attr('src', src);
                    }

                    elements.splice(i, 1);
                } else {
                    if (topEdge < topLazy) {
                        topLazy = topEdge;
                    }
                }
            }
        }

        if (!elements.length) {
            $(document).trigger('lazyloadall');
        }
    }


    /**
     * Run check of lazy elements after timeout
     */
    function timeoutLazyElements() {
        if (waitingMode > 1) {
            waitingMode = 1;
            checkLazyElements();
            setTimeout(timeoutLazyElements, options.throttle);
        } else {
            waitingMode = 0;
        }
    }


    /**
     * Queue check of lazy elements because of event e
     * @param {Event} [e]
     */
    function queueCheckLazyElements(e) {
        if (!elements.length) {
            return;
        }

        // fast check for scroll event without new visible elements
        if (e && e.type === 'scroll') {
            calcViewport();
            if (topLazy >= viewportBottom) {
                return;
            }
        }

        if (!waitingMode) {
            setTimeout(timeoutLazyElements, 0);
        }

        waitingMode = 2;
    }

    /**
     * Initialize list of hidden elements
     */
    function initLazyElements() {
        $(window).lazyLoadXT();
    }


    /**
     * Loading of all elements
     */
    function forceLoadAll() {
        checkLazyElements(true);
    }


    /**
     * Initialization
     */
    $(document).ready(function () {
        $window
            .on(options.loadEvent, initLazyElements)
            .on(options.updateEvent, queueCheckLazyElements)
            .on(options.forceEvent, forceLoadAll);

        if (options.autoInit) {
            initLazyElements(); // standard initialization
        }
    });

})(window.jQuery || window.Zepto, window, document);
