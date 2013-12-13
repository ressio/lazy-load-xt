/*jslint browser:true */
/*jshint browser:true, jquery:true */

(function ($) {
    'use strict';

    $.lazyLoadXT.forceEvent += ' lazyloadall';
    $.lazyLoadXT.autoLoad = 50;

    $(document).ready(function () {
        setTimeout(function () {
            $(window).trigger('lazyloadall');
        }, $.lazyLoadXT.autoLoad);
    });

})(window.jQuery || window.Zepto);
