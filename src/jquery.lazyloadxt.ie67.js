/*jslint browser:true */
/*jshint browser:true, jquery:true */

(function ($) {
    'use strict';

    if (parseInt(navigator.userAgent.toLowerCase().split('msie')[1] || 8) < 8) {
        $.lazyLoadXT.blankImage = '//upload.wikimedia.org/wikipedia/en/d/d0/Clear.gif';
    }

}(window.jQuery || window.Zepto));
