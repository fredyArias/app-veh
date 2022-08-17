"use strict";
exports.__esModule = true;
exports.SearchView = void 0;
var SearchView = /** @class */ (function () {
    function SearchView() {
    }
    SearchView.prototype.interact = function () {
        // System.getInstance().printText(Message.SEARCH)
        return this.getPlate();
    };
    SearchView.prototype.getPlate = function () {
        // return System.getInstance().readString(Message.ENTER_PLATE)
    };
    SearchView.prototype.getId = function () {
        // return System.getInstance().readString(Message.ENTER_ID)
    };
    return SearchView;
}());
exports.SearchView = SearchView;
