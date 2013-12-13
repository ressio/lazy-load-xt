/*jslint browser:true */
/*jshint browser:true, jquery:true */

(function ($) {
    'use strict';

    $.lazyLoadXT.selector += ',[data-bg]';

    $(document).on('lazyshow', function () {
        var $this = $(this);
        $this
            .css('background-image', "url('" + $this.attr('data-bg') + "')")
            .removeAttr('data-bg');
    });

})(window.jQuery || window.Zepto);
