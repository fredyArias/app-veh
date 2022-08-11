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
        var vehicleData = this.registratorView.interact();
        DB_1.DB.add(Vehicle_1.Vehicle.fromVehicleData(vehicleData));
    };
    return RegistratorController;
}());
exports.RegistratorController = RegistratorController;
