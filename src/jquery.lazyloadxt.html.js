/*global define*/
/*jslint browser:true */
/*jshint browser:true, jquery:true */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root.jQuery || root.$);
    }
}(window, function($) {
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

}));
