/*jslint browser:true */
/*jshint browser:true, jquery:true */

function Z() {
    document.write('<br data-lazy ');
}

(function ($) {

    $(document).ready(function () {
        var srcAttr = $.lazyLoadXT.srcAttr;

        $('br[data-lazy]').each(function () {
            var attrs = this.attributes,
                length = attrs.length,
                img = document.createElement('img');

            for (var i = 0; i < length; i++) {
                var attr = attrs[i];
                if (attr.specified) {
                    var attrName = attr.nodeName,
                        attrValue = attr.nodeValue;
                    // todo: check for '<img' attribute name
                    if (!!attrValue) {
                        if (attrName === 'src') {
                            img.setAttribute(srcAttr, attrValue);
                        } else {
                            img.setAttribute(attrName, attrValue);
                        }
                    }
                }
            }

            this.parentNode.replaceChild(img, this);
        });

        $('img[' + srcAttr + ']').lazyLoadXT();
    });

}(window.jQuery || window.Zepto));