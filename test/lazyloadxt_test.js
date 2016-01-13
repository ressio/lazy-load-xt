/*jslint browser:true */
/*jshint browser:true, jquery:true */

(function ($) {
    /*
     ======== A Handy Little QUnit Reference ========
     http://api.qunitjs.com/

     Test methods:
     module(name, {[setup][ ,teardown]})
     test(name, callback)
     expect(numberOfAssertions)
     stop(increment)
     start(decrement)
     Test assertions:
     ok(value, [message])
     equal(actual, expected, [message])
     notEqual(actual, expected, [message])
     deepEqual(actual, expected, [message])
     notDeepEqual(actual, expected, [message])
     strictEqual(actual, expected, [message])
     notStrictEqual(actual, expected, [message])
     throws(block, [expected], [message])
     */

    module('jQuery#lazyloadxt', {
        // This will run before each test in this module.
        setup: function () {
            this.elems = $('#qunit-fixture');
            $(window).lazyLoadXT();
        }
    });

    test('is chainable', function () {
        expect(1);
        strictEqual(this.elems.lazyLoadXT(), this.elems, 'should be chainable');
    });

    asyncTest('is lazy loading', function () {
        expect(5);
        var $img = $('img'),
            cntinit = $img.filter(function (index, el) {
                el = el || this;
                return $(el).data('lazied');
            }).length;
        ok($img.length > 0, 'images should be presented');
        ok(cntinit > 0, 'images should be initialized');
        ok(cntinit === $img.length, 'all images should be initialized');
        setTimeout(function () {
            var $img = $('img'),
                cntnow = $img.filter(function (index, el) {
                    el = el || this;
                    return ($(el).attr('src') === $(el).attr('data-src'));
                }).length;
            ok(cntnow > 0, 'some images should be displayed');
            ok(cntnow < $img.length, 'not all images should be displayed');
            start();
        }, 200);
    });
}(window.jQLight || window.jQuery || window.Zepto || window.$));
