"use strict";
exports.__esModule = true;
exports.SearchController = void 0;
var SearchController = /** @class */ (function () {
    function SearchController() {
        this.searchView;
    }
    SearchController.prototype.getVehicle = function () {
        this.getByPlate();
    };
    SearchController.prototype.getVehicles = function () {
        // return DB.allVehicles
    };
    SearchController.prototype.getByPlate = function () {
        // this.valueToSearch = this.searchView.interact()
        // this.search()
    };
    SearchController.prototype.getById = function () {
        // this.valueToSearch = this.valueToSearch = this.searchView.interact()
        // this.search()
    };
    SearchController.prototype.search = function () {
        // DB.search(this.valueToSearch)
    };
    return SearchController;
}());
exports.SearchController = SearchController;
