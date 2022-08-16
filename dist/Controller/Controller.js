"use strict";
exports.__esModule = true;
exports.Controller = void 0;
var RegistratorController_1 = require("./RegistratorController");
var Controller = /** @class */ (function () {
    function Controller() {
        this.registator = new RegistratorController_1.RegistratorController();
        // this.search = new SearchController()
    }
    Controller.prototype.start = function (value) {
        switch (value) {
            case 1:
                console.log('Option 1 <<');
                // this.registator.addVehicle()
                break;
            case 2:
                console.log('Option2 <<');
            // this.search.getVehicle()
            default:
                break;
        }
    };
    return Controller;
}());
exports.Controller = Controller;
