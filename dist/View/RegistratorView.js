"use strict";
exports.__esModule = true;
exports.RegistratorView = void 0;
var System_1 = require("../Controller/System");
var Message_1 = require("../View/Message");
var RegistratorView = /** @class */ (function () {
    function RegistratorView() {
    }
    RegistratorView.prototype.interact = function () {
        System_1.System.getInstance().printText(Message_1.Message.REGISTER_VEHICLE);
        var plate = System_1.System.getInstance().readString(Message_1.Message.ENTER_PLATE);
        var brand = System_1.System.getInstance().readString(Message_1.Message.ENTER_BRAND);
        var model = System_1.System.getInstance().readString(Message_1.Message.ENTER_MODEL);
        return { plate: plate, brand: brand, model: model };
    };
    return RegistratorView;
}());
exports.RegistratorView = RegistratorView;
