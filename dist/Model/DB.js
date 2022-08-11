"use strict";
exports.__esModule = true;
exports.DB = void 0;
var System_1 = require("../Controller/System");
var Message_1 = require("../View/Message");
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.add = function (vehicle) {
        console.log('vehículo guardado correctamente');
        // this.allVehicles.push(vehicle)
    };
    DB.search = function (plate) {
        this.allVehicles.find(function (vehicle) {
            if (vehicle.plate === plate) {
                return vehicle;
            }
            else {
                return System_1.System.getInstance().printText(Message_1.Message.VEHICLE_NOT_FOUND);
            }
        });
    };
    return DB;
}());
exports.DB = DB;
