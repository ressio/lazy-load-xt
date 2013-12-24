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
        one = [0, 1],
        srcsetOptions = {
            srcsetAttr: 'data-srcset',
            srcsetExtended: true,
            srcsetBaseAttr: 'data-srcset-base',
            srcsetExtAttr: 'data-srcset-ext'
        },
        prop;

    for (prop in srcsetOptions) {
        options[prop] = options[prop] || srcsetOptions[prop];
    }

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

    $(document).on('lazyshow', 'img', function (e, $el) {
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
    });

})(window.jQuery || window.Zepto, window, document);
