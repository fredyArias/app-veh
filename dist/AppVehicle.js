"use strict";
exports.__esModule = true;
exports.AppVehicle = void 0;
var View_1 = require("./View/View");
var AppVehicle = /** @class */ (function () {
    function AppVehicle() {
        this.view = new View_1.View();
    }
    AppVehicle.prototype.main = function () {
        this.start();
    };
    AppVehicle.prototype.start = function () {
        this.view.init();
    };
    return AppVehicle;
}());
exports.AppVehicle = AppVehicle;
