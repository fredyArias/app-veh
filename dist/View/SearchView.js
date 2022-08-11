"use strict";
exports.__esModule = true;
exports.SearchView = void 0;
var System_1 = require("../Controller/System");
var Message_1 = require("./Message");
var SearchView = /** @class */ (function () {
    function SearchView() {
    }
    SearchView.prototype.interact = function () {
        System_1.System.getInstance().printText(Message_1.Message.SEARCH);
        return this.getPlate();
    };
    SearchView.prototype.getPlate = function () {
        return System_1.System.getInstance().readString(Message_1.Message.ENTER_PLATE);
    };
    SearchView.prototype.getId = function () {
        return System_1.System.getInstance().readString(Message_1.Message.ENTER_ID);
    };
    return SearchView;
}());
exports.SearchView = SearchView;
