/*jslint browser:true, plusplus:true, vars:true */
/*jshint browser:true, jquery:true */

(function ($) {
    'use strict';

    var options = $.lazyLoadXT;

    options.forceEvent += ' lazyloadall';
    options.autoLoad = options.autoLoad || 50;

    $(document).ready(function () {
        setTimeout(function () {
            $(window).trigger('lazyloadall');
        }, options.autoLoad);
    });

})(window.jQuery || window.Zepto);
