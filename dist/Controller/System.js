"use strict";
exports.__esModule = true;
exports.System = void 0;
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var System = /** @class */ (function () {
    function System() {
    }
    System.getInstance = function () {
        if (this.instance === null) {
            this.instance = new System();
        }
        return this.instance;
    };
    System.prototype.readNumber = function (outputText) {
        var _this = this;
        rl.question("".concat(outputText, "\n"), function (inputValue) {
            _this.inputNumberValue = inputValue;
            process.exit();
        });
        return this.inputNumberValue;
    };
    System.prototype.readString = function (outputText) {
        var _this = this;
        rl.question("".concat(outputText, "\n"), function (inputValue) {
            _this.inputStringValue = inputValue;
            process.exit();
        });
        return this.inputStringValue;
    };
    System.prototype.printText = function (outputText) {
        console.log(outputText);
    };
    System.instance = null;
    return System;
}());
exports.System = System;
