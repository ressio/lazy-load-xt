/*jslint browser:true */
/*jshint browser:true, jquery:true */
/*jshint -W060:false */ /* we use document.write */

(function ($, window, document) {

    var dataLazyTag = $.lazyLoadXT.dataLazyTag || 'data-lazy-tag';

    window.Z = function (tag, inner) {
        document.write((inner ? '<div ' : '<br ') + dataLazyTag + '="' + (tag || 'img') + '" ');
    };

    $(document).ready(function () {
        var srcAttr = $.lazyLoadXT.srcAttr;

        $('br[' + dataLazyTag + '],div[' + dataLazyTag + ']').each(function () {
            var attrs = this.attributes,
                el = document.createElement($(this).attr(dataLazyTag)),
                i;

            for (i = 0; i < attrs.length; i++) {
                var attr = attrs[i];
                if (attr.specified) {
                    var attrName = attr.nodeName,
                        attrValue = attr.nodeValue;
                    if (!!attrValue) {
                        if (attrName === 'src') {
                            el.setAttribute(srcAttr, attrValue);
                        } else {
                            el.setAttribute(attrName, attrValue);
                        }
                    }
                }
            }

            var childNodes = this.childNodes;
            if (childNodes) {
                for (i = 0; i < childNodes.length; i++) {
                    el.appendChild(childNodes[i]);
                }
            }

            this.parentNode.replaceChild(el, this);
        });

        $(window).lazyLoadXT();
    });

}(window.jQuery || window.Zepto, window, document));