/*jslint browser:true */
/*jshint browser:true, jquery:true */

(function ($) {
    'use strict';

    var options = $.lazyLoadXT;

    options.selector += ',video,iframe[data-src]';
    options.videoPoster = 'data-poster';

    $(document).on('lazyshow', 'video', function (e, $el) {
        var srcAttr = $el.lazyLoadXT.srcAttr,
            isFuncSrcAttr = $.isFunction(srcAttr),
            changed = false;

        $el.attr('poster', $el.attr(options.videoPoster));
        $el.children('source,track')
            .each(function (index, el) {
                var $child = $(el),
                    src = isFuncSrcAttr ? srcAttr($child) : $child.attr(srcAttr);
                if (src) {
                    $child.attr('src', src);
                    changed = true;
                }
            });

        // reload video
        if (changed) {
            this.load();
        }
    });

})(window.jQuery || window.Zepto || window.$);
