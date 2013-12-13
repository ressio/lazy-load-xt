/*jslint browser:true */
/*jshint browser:true, jquery:true */

(function ($, window, document) {
    'use strict';

    $.lazyLoadXT.srcsetAttr = 'data-srcset';
    $.lazyLoadXT.srcsetBaseAttr = 'data-srcset-base';

    var reUrl = /^\s*([^\s]*)/,
        reWidth = /\s(\d+)w/,
        reHeight = /\s(\d+)h/,
        reDpr = /\s([\d\.]+)x/,
        infty = [0, Infinity],
        one = [0, 1];

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

    // based on http://www.whatwg.org/specs/web-apps/current-work/multipage/embedded-content-1.html#processing-the-image-candidates
    $(document).on('lazyshow', function () {
        var $this = $(this),
            srcset = $this.attr($.lazyLoadXT.srcsetAttr),
            srcsetBase = $this.attr($.lazyLoadXT.srcsetBaseAttr) || '',
            viewport = {
                width: window.innerWidth || document.documentElement.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight,
                dpr: window.devicePixelRatio || 1
            },
            list,
            limit;

        if (!srcset) {
            return;
        }

        list = srcset.split(',').map(function (item) {
            return {
                url: reUrl.exec(item)[1],
                width: (reWidth.exec(item) || infty)[1],
                height: (reHeight.exec(item) || infty)[1],
                dpr: (reDpr.exec(item) || one)[1]
            };
        });

        if (!list.length) {
            return;
        }

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

        $this.attr('src', srcsetBase + list[0].url);
    });

})(window.jQuery || window.Zepto, window, document);
