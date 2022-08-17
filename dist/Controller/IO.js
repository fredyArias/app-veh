"use strict";
exports.__esModule = true;
exports.readNumber = exports.readString = exports.writeln = exports.write = void 0;
var readlineSync = require('readline-sync');
var input = function (prompt) {
    var userInput = readlineSync.question(prompt);
    return userInput;
};
function write(value) {
    if (value !== undefined) {
        process.stdout.write("".concat(value));
    }
}
exports.write = write;
function writeln(value) {
    write(value);
    write("\n");
}
exports.writeln = writeln;
function readString(title) {
    write(title);
    return input(' ');
}
exports.readString = readString;
function readNumber(title) {
    var input;
    do {
        input = parseInt(readString(title));
        if (isNaN(input)) {
            console.log('FORMAT ERROR!!! Enter a number formatted value.');
        }
    } while (isNaN(input));
    return input;
}
exports.readNumber = readNumber;
