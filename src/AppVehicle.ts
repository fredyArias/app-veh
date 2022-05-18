import { Vehicle } from "./Model/Vehicle"
import { View } from "./View/View"

export class AppVehicle {
    private view: View
    vehicleList: Vehicle[]

    constructor() {
        this.view = new View()
    }

    main() {
        this.play()
    }

    private play() {
        this.view.showMenu(this.vehicleList)
    }
}