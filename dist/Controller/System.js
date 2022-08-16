"use strict";
exports.__esModule = true;
exports.System = exports.readNumber = void 0;
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var console_mpds_1 = require("console-mpds");
var console = new console_mpds_1.Console();
function readNumber(output) {
    return console.readNumber(output);
}
exports.readNumber = readNumber;
var System = /** @class */ (function () {
    function System() {
    }
    System.getInstance = function () {
        if (this.instance === null) {
            this.instance = new System();
        }
        return this.instance;
    };
    System.prototype.readNumber = function (output) {
        var _this = this;
        rl.question("".concat(output, "\n"), function (inputValue) {
            _this.inputNumberValue = inputValue;
        });
        return this.inputNumberValue;
    };
    // read(output: any, input: any) {
    //   rl.question()
    // }
    // readNumber(outputText: string) {
    //   rl.question(`${outputText}\n`, (inputValue: number) => {
    //     this.inputNumberValue = inputValue
    //   })
    //   return this.inputNumberValue
    // }
    System.prototype.readString = function (outputText) {
        // rl.question(`${outputText}\n`, (inputValue: string) => {
        //   this.inputStringValue = inputValue
        // })
        return '';
    };
    System.prototype.printText = function (outputText) {
        // this.inputStringValue = outputText
        // this.getInputValue()
    };
    System.instance = null;
    return System;
}());
exports.System = System;
