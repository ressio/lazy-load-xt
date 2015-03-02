/*jslint browser:true */
/*jshint browser:true, jquery:true */

(function ($) {
    'use strict';

    var options = $.lazyLoadXT,
        widgetAttr = options.widgetAttr || 'data-lazy-widget',
        reComment = /<!--([\s\S]*)-->/;

    options.selector += ',[' + widgetAttr + ']';

    $(document).on('lazyshow', '[' + widgetAttr + ']', function () {
        var $this = $(this),
            $target = $this,
            id = $this.attr(widgetAttr),
            match;

        if (id) {
            $target = $('#' + id);
        }

        if ($target.length) {
            match = reComment.exec($target.html());
            if (match) {
                $target.replaceWith($.trim(match[1]));
            }
        }

        $this.triggerHandler('load');
    });

})(window.jQuery || window.Zepto || window.$);
