"use strict";
exports.__esModule = true;
exports.Console = void 0;
var input = require('./console-input.ts').input;
var Console = /** @class */ (function () {
    function Console() {
    }
    Console.prototype.write = function (value) {
        if (value !== undefined) {
            process.stdout.write("".concat(value));
        }
    };
    Console.prototype.writeln = function (value) {
        this.write(value);
        this.write("\n");
    };
    Console.prototype.readString = function (title) {
        this.write(title);
        return input(' ');
    };
    Console.prototype.readNumber = function (title) {
        var input;
        do {
            input = parseInt(this.readString(title));
            if (isNaN(input)) {
                console.log('FORMAT ERROR!!! Enter a number formatted value.');
            }
        } while (isNaN(input));
        return input;
    };
    return Console;
}());
exports.Console = Console;
