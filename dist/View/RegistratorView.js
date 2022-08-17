"use strict";
exports.__esModule = true;
exports.RegistratorView = void 0;
var IO_1 = require("../Controller/IO");
var Message_1 = require("../View/Message");
var RegistratorView = /** @class */ (function () {
    function RegistratorView() {
    }
    RegistratorView.prototype.interact = function () {
        (0, IO_1.writeln)(Message_1.Message.REGISTER_VEHICLE);
        var brand = (0, IO_1.readString)(Message_1.Message.ENTER_BRAND);
        var model = (0, IO_1.readString)(Message_1.Message.ENTER_MODEL);
        var plate = (0, IO_1.readString)(Message_1.Message.ENTER_PLATE);
        return { brand: brand, model: model, plate: plate };
    };
    return RegistratorView;
}());
exports.RegistratorView = RegistratorView;
