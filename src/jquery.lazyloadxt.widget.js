/*jslint browser:true */
/*jshint browser:true, jquery:true */

(function ($) {
    'use strict';

    var options = $.lazyLoadXT,
        widgetAttr = options.widgetAttr || 'data-lazy-widget',
        reComment = /<!--([\s\S]*)-->/;

    options.selector += ',[' + widgetAttr + ']';

    $(document).on('lazyshow', '[' + widgetAttr + ']', function () {
        var $div = $('#' + $(this).attr(widgetAttr)),
            match;
        if ($div.length) {
            match = reComment.exec($div.html());
            if (match) {
                $div.replaceWith($.trim(match[1]));
            }
        }
    });

})(window.jQuery || window.Zepto);
