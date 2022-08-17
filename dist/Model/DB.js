"use strict";
exports.__esModule = true;
exports.DB = void 0;
var IO_1 = require("../Controller/IO");
var Message_1 = require("../View/Message");
var DB = /** @class */ (function () {
    function DB() {
        this.allVehicles = [];
    }
    DB.getInstance = function () {
        if (!this.instance) {
            this.instance = new DB();
        }
        return this.instance;
    };
    DB.prototype.add = function (vehicle) {
        this.allVehicles.push(vehicle);
        (0, IO_1.writeln)("\n".concat(Message_1.Message.VEHICLE_SAVED));
    };
    DB.prototype.search = function (plate) {
        // this.allVehicles.find((vehicle) => {
        //   if (vehicle.plate === plate) {
        //     return vehicle
        //   } else {
        //     return System.getInstance().printText(Message.VEHICLE_NOT_FOUND)
        //   }
        // })
    };
    return DB;
}());
exports.DB = DB;
