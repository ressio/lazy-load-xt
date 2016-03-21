/*! Lazy Load XT v1.1.0 2016-03-21
 * http://ressio.github.io/lazy-load-xt
 * (C) 2016 RESS.io
 * Licensed under MIT */
/*global define*/

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root.jQuery || root.$);
    }
}(window, function($) {
    $.lazyLoadXT.updateEvent += ' shown.bs.modal shown.bs.dropdown shown.bs.tab shown.bs.tooltip shown.bs.popover shown.bs.collapse slid.bs.carousel';
}));
