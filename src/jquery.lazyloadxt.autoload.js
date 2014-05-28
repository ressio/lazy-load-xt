/*jslint browser:true, plusplus:true, vars:true */
/*jshint browser:true, jquery:true */

(function ($) {
    'use strict';

    var options = $.lazyLoadXT;

    options.forceEvent += ' lazyautoload';
    options.autoLoadTime = options.autoLoadTime || 50;

    $(document).ready(function () {
        setTimeout(function () {
            $(window).trigger('lazyautoload');
        }, options.autoLoadTime);
    });

})(window.jQuery || window.Zepto || window.$);
