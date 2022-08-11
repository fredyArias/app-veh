"use strict";
exports.__esModule = true;
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(plate, brand, model, status) {
        if (status === void 0) { status = 'onSale'; }
        ;
        (this.plate = plate), (this.brand = brand), (this.model = model);
        this.status = status;
    }
    Vehicle.fromVehicleData = function (vehicleData) {
        return new Vehicle(vehicleData.plate, vehicleData.brand, vehicleData.model);
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
