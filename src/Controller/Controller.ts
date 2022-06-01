import { RegistatorController } from "./RegistatorController"
import { SearchController } from "./SearchController"

export class Controller {
    registator: RegistatorController
    search: SearchController

    constructor() {
        this.registator = new RegistatorController()
        this.search = new SearchController()
    }

    start(value: number) {
        switch (value) {
            case 1:
                this.registator.addVehicle()
                break;
            case 2:
               
            default:
                break;
        }
    }
}