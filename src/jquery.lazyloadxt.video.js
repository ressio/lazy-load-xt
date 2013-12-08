/*jslint browser:true */
/*jshint browser:true, jquery:true */

(function ($) {
    'use strict';

    $.lazyLoadXT.selector = 'img,video,iframe[data-src]';

    $(document).on('lazyshow', 'video', function () {
        var $this = $(this);
        $this
            .attr('poster', $this.attr('data-poster'))
            .removeAttr('data-poster')
            .children()
            .each(function () {
                if (/source|track/i.test(this.tagName)) {
                    var $child = $(this);
                    $child
                        .attr('src', $child.attr('data-src'))
                        .removeAttr('data-src');
                }
            });
        // reload video
        this.load();
    });

}(window.jQuery || window.Zepto));
