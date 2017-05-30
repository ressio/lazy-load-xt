(function($) {
    'use strict';

    var options = $.lazyLoadXT;

    options.selector += ',audio';

    $(document).on('lazyshow', 'audio', function(e, $el) {
        var srcAttr = $el.lazyLoadXT.srcAttr,
            isFuncSrcAttr = $.isFunction(srcAttr),
            changed = false;

        $el.children('source,track')
            .each(function(index, el) {
                var $child = $(el),
                    src = isFuncSrcAttr ? srcAttr($child) : $child.attr(srcAttr);
                if (src) {
                    $child.attr('src', src);
                    changed = true;
                }
            });

        // reload video
        if (changed) {
            this.load();
        }
    });

})(window.jQuery || window.Zepto || window.$);
