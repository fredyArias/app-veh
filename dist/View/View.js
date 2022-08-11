"use strict";
exports.__esModule = true;
exports.View = void 0;
var Controller_1 = require("../Controller/Controller");
var MainView_1 = require("./MainView");
var View = /** @class */ (function () {
    function View() {
        this.controller = new Controller_1.Controller();
        this.main = new MainView_1.MainView();
    }
    View.prototype.init = function () {
        this.main.interact(this.controller);
    };
    return View;
}());
exports.View = View;
