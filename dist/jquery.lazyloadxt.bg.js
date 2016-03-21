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
        bgAttr = options.bgAttr || 'data-bg';

    options.selector += ',[' + bgAttr + ']';

    $(document).on('lazyshow', function (e) {
        var $this = $(e.target),
            url = $this.attr(bgAttr);
        if (!!url) {
            $this
                .css('background-image', "url('" + url + "')")
                .removeAttr(bgAttr)
                .triggerHandler('load');
        }
    });

}));
