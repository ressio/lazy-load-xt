/*global define*/
/*jslint browser:true, plusplus:true, vars:true */
/*jshint browser:true, jquery:true */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root.jQuery || root.$);
    }
}(window, function($) {
    'use strict';

    $.lazyLoadXT.updateEvent += ' collapsibleexpand filterablefilter pagechange panelopen popupafteropen tabsactivate';
}));
