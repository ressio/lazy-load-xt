/*jslint browser:true, plusplus:true, vars:true, regexp:false */
/*jshint browser:true, jquery:true */

(function ($, window, document) {
    'use strict';

    var options = $.lazyLoadXT,
        srcsetSupport = (function () {
            return 'srcset' in (new Image());
        })(),
        reUrl = /^\s*(\S*)/,
        reWidth = /\S\s+(\d+)w/,
        reHeight = /\S\s+(\d+)h/,
        reDpr = /\S\s+([\d\.]+)x/,
        infty = [0, Infinity],
        one = [0, 1];

    options.selector += ',picture';
    options.srcsetAttr = 'data-srcset';
    options.srcsetExtended = true;
    options.srcsetBaseAttr = 'data-srcset-base';
    options.srcsetExtAttr = 'data-srcset-ext';

    function max(array, property) {
        return Math.max.apply(null, $.map(array, function (item) {
            return item[property];
        }));
    }

    function min(array, property) {
        return Math.min.apply(null, $.map(array, function (item) {
            return item[property];
        }));
    }

    /**
     * Parse and process srcset attribute
     * based on http://www.whatwg.org/specs/web-apps/current-work/multipage/embedded-content-1.html#processing-the-image-candidates
     * @param {jQuery} $el
     */
    function srcsetPolyfill($el) {
        var srcset = $el.attr(options.srcsetAttr);

        if (srcset) {
            if (!options.srcsetExtended && srcsetSupport) {
                $el.attr('srcset', srcset);
            } else {
                var list = srcset.split(',').map(function (item) {
                    return {
                        url: reUrl.exec(item)[1],
                        width: (reWidth.exec(item) || infty)[1],
                        height: (reHeight.exec(item) || infty)[1],
                        dpr: (reDpr.exec(item) || one)[1]
                    };
                });

                if (list.length) {
                    var viewport = {
                            width: window.innerWidth || document.documentElement.clientWidth,
                            height: window.innerHeight || document.documentElement.clientHeight,
                            dpr: window.devicePixelRatio || 1
                        },
                        limit,
                        src;

                    limit = max(list, 'width');
                    list = $.grep(list, function (item) {
                        return item.width >= viewport.width || item.width === limit;
                    });
                    limit = max(list, 'height');
                    list = $.grep(list, function (item) {
                        return item.height >= viewport.height || item.height === limit;
                    });
                    limit = max(list, 'dpr');
                    list = $.grep(list, function (item) {
                        return item.dpr >= viewport.dpr || item.dpr === limit;
                    });

                    limit = min(list, 'width');
                    list = $.grep(list, function (item) {
                        return item.width === limit;
                    });
                    limit = min(list, 'height');
                    list = $.grep(list, function (item) {
                        return item.height === limit;
                    });
                    limit = min(list, 'dpr');
                    list = $.grep(list, function (item) {
                        return item.dpr === limit;
                    });

                    src = list[0].url;

                    if (options.srcsetExtended) {
                        src = ($el.attr(options.srcsetBaseAttr) || '') + src + ($el.attr(options.srcsetExtAttr) || '');
                    }

                    $el.attr('src', src);
                }
            }
        }
    }

    $(document).on('lazyshow', 'img', function (e, $el) {
        srcsetPolyfill($el);
    });

    $(document).on('lazyshow', 'picture', function (e, $el) {
        var srcAttr = $el.lazyLoadXT.srcAttr,
            isFuncSrcAttr = $.isFunction(srcAttr);

        $el
            .children()
            .each(function () {
                if (/img|source/i.test(this.tagName)) {
                    var $child = $(this),
                        src = isFuncSrcAttr ? srcAttr($child) : $child.attr(srcAttr);
                    if (src) {
                        $child.attr('src', src);
                    } else {
                        srcsetPolyfill($child);
                    }
                }
            });
    });

})(window.jQuery || window.Zepto, window, document);
