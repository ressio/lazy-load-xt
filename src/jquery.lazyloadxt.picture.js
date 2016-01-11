/*jslint browser:true, plusplus:true, vars:true, regexp:false */
/*jshint browser:true, jquery:true */

(function ($, window, document) {
    'use strict';

    var options = $.lazyLoadXT,
        matchMedia = window.matchMedia;

    options.selector += ',picture';

    function parsePicture($el) {
        var srcAttr = $el.lazyLoadXT.srcAttr,
            isFuncSrcAttr = $.isFunction(srcAttr),
            $img = $el.children('img'),
            src = isFuncSrcAttr ? srcAttr($img) : $img.attr(srcAttr);

        if (matchMedia) {
            $el
                .children('br')
                .each(function (index, el) {
                    var $child = $(el),
                        source = isFuncSrcAttr ? srcAttr($child) : $child.attr(srcAttr),
                        media = $child.attr('media');

                    if (source && (!media || matchMedia(media).matches)) {
                        src = source;
                    }
                });
        }

        $img.attr('src', src);
        return src;
    }

    $(document)
        // remove default behaviour for inner <img> tag
        .on('lazyinit', 'img', function (e, $el) {
            if ($el.parent('picture').length) {
                $el.lazyLoadXT.srcAttr = '';
            }
        })
        // prepare <picture> polyfill
        .on('lazyinit', 'picture', function (e, $el) {
            if (!$el[0].firstChild) {
                return;
            }

            var $img = $el.children('img');
            if (!$img.length) {
                $img = $('<img>').appendTo($el);
            }

            $img.attr('width', $el.attr('width'));
            $img.attr('height', $el.attr('height'));
        })
        // show picture
        .on('lazyshow', 'picture', function (e, $el) {
            if (!$el[0].firstChild) {
                return;
            }

            var elOptions = $el.lazyLoadXT;
            elOptions.srcAttrS = elOptions.srcAttr;
            elOptions.srcAttr = parsePicture;
        });

})(window.jQuery || window.Zepto || window.$, window, document);
