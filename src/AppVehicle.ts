import { Vehicle } from "./Model/Vehicle"
import { MenuView } from "./View/MenuView"

export class AppVehicle {
    private view: MenuView
    vehicleList: Vehicle[]

    constructor() {
        this.view = new MenuView()
    }

    start() {
        this.play()
    }

    private play() {
        this.view.init(this.vehicleList)
    }
}