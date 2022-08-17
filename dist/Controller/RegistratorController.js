"use strict";
exports.__esModule = true;
exports.RegistratorController = void 0;
var Vehicle_1 = require("../Model/Vehicle");
var DB_1 = require("../Model/DB");
var RegistratorView_1 = require("../View/RegistratorView");
var RegistratorController = /** @class */ (function () {
    function RegistratorController() {
        this.registratorView = new RegistratorView_1.RegistratorView();
    }
    RegistratorController.prototype.addVehicle = function () {
        var _a = this.registratorView.interact(), plate = _a.plate, brand = _a.brand, model = _a.model;
        DB_1.DB.getInstance().add(new Vehicle_1.Vehicle(plate, brand, model));
    };
    return RegistratorController;
}());
exports.RegistratorController = RegistratorController;
