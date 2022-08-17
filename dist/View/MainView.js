"use strict";
exports.__esModule = true;
exports.MainView = void 0;
var IO_1 = require("../Controller/IO");
var Message_1 = require("./Message");
var MainView = /** @class */ (function () {
    function MainView() {
    }
    MainView.prototype.interact = function (controller) {
        var exitValue = 4;
        var inputValue = 0;
        do {
            (0, IO_1.writeln)(Message_1.Message.APP_TITLE);
            inputValue = (0, IO_1.readNumber)(Message_1.Message.MAIN);
            inputValue !== exitValue ? controller.start(inputValue) : (0, IO_1.writeln)(Message_1.Message.EXIT);
        } while (inputValue !== exitValue);
    };
    return MainView;
}());
exports.MainView = MainView;
