"use strict";
exports.__esModule = true;
exports.MainView = void 0;
var System_1 = require("../Controller/System");
var Message_1 = require("./Message");
var MainView = /** @class */ (function () {
    function MainView() {
    }
    MainView.prototype.interact = function (controller) {
        var exitValue = 4;
        var inputValue = System_1.System.getInstance().readNumber(Message_1.Message.MAIN);
        inputValue !== exitValue
            ? controller.start(inputValue)
            : System_1.System.getInstance().printText('Exit');
    };
    return MainView;
}());
exports.MainView = MainView;
