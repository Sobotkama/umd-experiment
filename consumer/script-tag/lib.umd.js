(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Lib = factory());
})(this, (function () { 'use strict';

    class Lib {
        constructor(options) {
            console.log("It works!");
            console.log(options.message);
        }
    }

    return Lib;

}));
