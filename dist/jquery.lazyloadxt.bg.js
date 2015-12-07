/*! Lazy Load XT v1.0.6 2014-11-19
 * http://ressio.github.io/lazy-load-xt
 * (C) 2014 RESS.io
 * Licensed under MIT */

(function ($) {
    var options = $.lazyLoadXT,
        bgAttr = options.bgAttr || 'data-bg';

    options.selector += ',[' + bgAttr + ']';

    $(document).on('lazyshow', function (e) {
        var $this = $(e.target);
        if( typeof( $this.attr(bgAttr) ) != 'undefined' ) {
            $this
                .css('background-image', "url('" + $this.attr(bgAttr) + "')")
                .removeAttr(bgAttr);
        }        
    });

})(window.jQuery || window.Zepto || window.$);
