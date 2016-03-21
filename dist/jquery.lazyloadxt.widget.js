/*! Lazy Load XT v1.1.0 2016-03-21
 * http://ressio.github.io/lazy-load-xt
 * (C) 2016 RESS.io
 * Licensed under MIT */
/*global define*/

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root.jQuery || root.$);
    }
}(window, function($) {
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

}));
