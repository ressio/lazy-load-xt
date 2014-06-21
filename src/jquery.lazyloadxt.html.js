/*jslint browser:true */
/*jshint browser:true, jquery:true */

(function ($) {
    'use strict';

    var options = $.lazyLoadXT,
        lazyAttr = options.lazyAttr || 'data-lazy-src';

    options.selector += ',[' + lazyAttr + ']';

    $(document).on('lazyshow', '[' + lazyAttr + ']', function () {
        var $this = $(this);
        $this.load($this.attr(lazyAttr), function () {
            $this.triggerHandler('load');
        });
    });

})(window.jQuery || window.Zepto || window.$);
