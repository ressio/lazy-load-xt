/*jslint browser:true */
/*jshint browser:true, jquery:true */

(function ($) {
    'use strict';

    $.lazyLoadXT.selector += ',video,iframe[data-src]';
    $.lazyLoadXT.videoPoster = 'data-poster';

    $(document).on('lazyshow', 'video', function () {
        var $this = $(this),
            srcPoster = $.lazyLoadXT.videoPoster,
            srcAttr = $.lazyLoadXT.srcAttr,
            isFuncSrcAttr = $.isFunction(srcAttr);

        $this
            .attr('poster', $this.attr(srcPoster))
            .children()
            .each(function () {
                if (/source|track/i.test(this.tagName)) {
                    var $child = $(this);
                    $child.attr('src', isFuncSrcAttr ? srcAttr($child) : $child.attr(srcAttr));
                }
            });

        // reload video
        this.load();
    });

})(window.jQuery || window.Zepto);
