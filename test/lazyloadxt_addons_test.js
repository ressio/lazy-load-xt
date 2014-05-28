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
        }
    });

    test('is chainable', function () {
        expect(1);
        strictEqual(this.elems.lazyLoadXT(), this.elems, 'should be chainable');
    });

}(window.jQuery || window.Zepto || window.$));
