import { Vehicle } from "../Model/Vehicle"
import { MenuView } from "./MenuView"
import { RegisterVehicleView } from "./RegistervehicleView"

export class View {
    private menu: MenuView
    private registerVehicle: RegisterVehicleView

    constructor() {
        this.menu = new MenuView()
        this.registerVehicle = new RegisterVehicleView()
    }

    showMenu(vehicleList: Vehicle[]) {
        this.menu.init(vehicleList)
    }

    showRegisterVehicle() {
        const vehicle = this.registerVehicle.getDates()
        return vehicle
    }
}