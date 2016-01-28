/*! Lazy Load XT v1.1.0 2016-01-28
 * http://ressio.github.io/lazy-load-xt
 * (C) 2016 RESS.io
 * Licensed under MIT */

(function (window, document, Element, undefined) {
    var prev_$ = window.$,
        DATAKEYPROP = '__jqlight_data__',
        matches = Element.matches || Element.matchesSelector || Element.mozMatchesSelector || Element.msMatchesSelector || Element.oMatchesSelector || Element.webkitMatchesSelector;

    function Wrapper(collection) {
        if (collection) {
            for (var i = 0, length = collection.length; i < length; i++) {
                this[i] = collection[i];
            }
            this.length = length;
        }
    }

    function $(selector) {
        if (selector instanceof Wrapper) {
            return selector;
        }
        return new Wrapper((typeof selector === 'string') ? document.querySelectorAll(selector)
            : (selector && (selector === window || selector.nodeType) ? [selector] : selector));
    }

    Wrapper.prototype = $.fn = {
        constructor: Wrapper,
        length: 0
    };

    $.fn.extend = $.extend = function () {
        var options, name, copy, target = this, i = 0, length = arguments.length;
        if (length > 1) {
            target = arguments[i++];
        }
        for (; i < length; i++) {
            options = arguments[i];
            for (name in options) {
                copy = options[name];
                if (copy !== undefined && copy !== target) {
                    target[name] = copy;
                }
            }
        }
        return target;
    };

    $.extend({
        noConflict: function () {
            window.$ = prev_$;
            return $;
        },
        isFunction: function (obj) {
            return (typeof obj === 'function');
        },
        contains: function (a, b) {
            if (b) {
                while ((b = b.parentNode)) {
                    if (b === a) {
                        return true;
                    }
                }
            }
            return false;
        },
        each: function (array, callback) {
            for (var i = 0, length = array.length ; i < length; i++) {
                if (callback(i, array[i]) === false) {
                    return false;
                }
            }
            return true;
        },
        grep: function (array, callback, invert) {
            var callbackInverse,
                matches = [],
                i = 0,
                length = array.length,
                callbackExpect = !invert;
            for (; i < length; i++) {
                callbackInverse = !callback(i, array[i]);
                if (callbackInverse !== callbackExpect) {
                    matches.push(array[i]);
                }
            }
            return matches;
        },
        map: function (array, callback) {
            var value,
                i = 0,
                length = array.length,
                ret = [];
            for (; i < length; i++) {
                value = callback(array[i], i);
                if (value != null) {
                    ret.push(value);
                }
            }
            return ret;
        }
    });

    $.fn.extend({
        each: function (callback) {
            $.each(this, function (index, elem) {
                return callback.call(elem, index, elem);
            });
            return this;
        },
        map: function (callback) {
            return $($.map(this, function (elem, index) {
                return callback.call(elem, index, elem);
            }));
        },
        filter: function (callback) {
            return $($.grep(this, function (index, elem) {
                return callback.call(elem, index, elem);
            }));
        },
        ready: function (fn) {
            if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
                fn();
            } else {
                $(document).on('DOMContentLoaded', fn);
            }
            return this;
        },
        addClass: function (value) {
            return eachClass(this, value, function (cur, clazz, found) {
                return found ? cur : cur + clazz + ' ';
            });
        },
        removeClass: function (value) {
            return eachClass(this, value, function (cur, clazz, found) {
                return found ? cur.replace(' ' + clazz + ' ', ' ') : cur;
            });
        },
        on: function (types, selector, fn) {
            if (fn == null) {
                // ( types, fn )
                fn = selector;
                selector = undefined;
            }
            types = types.split(' ');
            return this.each(function (index, elem) {
                var listener = selector ? delegateHandler.bind(elem, selector, fn) : fn;
                $.each(types, function (j, eventName) {
                    if (eventName) {
                        elem.addEventListener(eventName, listener);
                    }
                });
            });
        },
        off: function (types, selector, fn) {
            // Note: off() for delegated events is not supported
            if (selector === false || $.isFunction(selector)) {
                // ( types [, fn] )
                fn = selector;
                // selector = undefined;
            }
            types = types.split(' ');
            return this.each(function (index, elem) {
                $.each(types, function (j, eventName) {
                    if (eventName) {
                        elem.removeEventListener(eventName, fn);
                    }
                });
            });
        },
        trigger: function (type, data) {
            return this.each(function () {
                var evt;
                if (window.CustomEvent) {
                    evt = new CustomEvent(type, {detail: data});
                } else {
                    evt = document.createEvent('CustomEvent');
                    evt.initCustomEvent(type, true, true, data);
                }
                this.dispatchEvent(evt);
            });
        },
        data: function (key, value) {
            if (typeof key === 'string' && value === undefined) {
                var elem = this[0];
                return elem && elem[DATAKEYPROP] ? elem[DATAKEYPROP][key] : undefined;
            }
            this.each(function (index, elem) {
                elem[DATAKEYPROP] = elem[DATAKEYPROP] || {};
                elem[DATAKEYPROP][key] = value;
            });
            return this;
        },
        attr: function (name, value) {
            if (value === undefined) {
                return this.length ? this[0].getAttribute(name) : undefined;
            }
            this.each(function () {
                this.setAttribute(name, value + '');
            });
            return this;
        }
    });

    window.$ = $;

    function eachClass(obj, value, callback) {
        var classes = ( value || '' ).match(/\S+/g) || [],
            elem, cur, clazz, j, origValue, finalValue,
            i = 0,
            len = obj.length;
        while (i < len) {
            elem = obj[i++];
            if (elem.nodeType === 1) {
                origValue = elem.className;
                cur = origValue ? ( ' ' + origValue + ' ' ).replace(/[\t\r\n\f]/g, ' ') : ' ';
                for (j = 0; (clazz = classes[j++]); ) {
                    cur = callback(cur, clazz, cur.indexOf(' ' + clazz + ' ') >= 0);
                }
                finalValue = cur.slice(1, -1);
                if (origValue !== finalValue) {
                    elem.className = finalValue;
                }
            }
        }
        return obj;
    }

    function delegateHandler(selector, handler, event) {
        var node = event.target;
        while (node && node !== this) {
            if (matches.call(node, selector)) {
                return handler.call(node, event);
            }
            node = node.parentElement;
        }
    }
})(window, document, Element.prototype);
