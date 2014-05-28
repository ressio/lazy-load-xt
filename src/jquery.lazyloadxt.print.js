/*jslint browser:true */
/*jshint browser:true, jquery:true */

(function ($, window) {
    'use strict';

    $.lazyLoadXT.forceEvent += ' beforeprint';

    if (window.matchMedia) {
        window
            .matchMedia('print')
            .addListener(function (mql) {
                if (mql.matches) {
                    $(window).trigger('beforeprint');
                }
            });
    }

})(window.jQuery || window.Zepto || window.$, window);
