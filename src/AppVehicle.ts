import { View } from "./View/View"

export class AppVehicle {
    private view: View

    constructor() {
        this.view = new View()
    }

    main() {
        this.play()
    }

    private play() {
        this.view.init()
    }
}