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
        var inputValue = (0, IO_1.readNumber)(Message_1.Message.MAIN);
        inputValue !== exitValue ? controller.start(inputValue) : console.log('Exit...');
    };
    return MainView;
}());
exports.MainView = MainView;
