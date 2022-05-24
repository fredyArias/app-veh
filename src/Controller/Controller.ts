import { ConLog } from "./ConLog";
import { DB } from "../DB";
import { Vehicle } from "../Model/Vehicle";
import { Message } from "../View/Message";

export class Controller {
    vehicle: Vehicle

    start(value: number) {
        switch (value) {
            case 1:
                this.createVehicle()
                break;
        
            default:
                break;
        }
    }

    private createVehicle() {
        ConLog.write(Message.REGISTER_VEHICLE)
        const plate = ConLog.readString(Message.ENTER_PLATE)
        const brand = ConLog.readString(Message.ENTER_BRAND)
        const model = ConLog.readNumber(Message.ENTER_MODEL)

        this.registerVehicle(this.vehicle = new Vehicle(plate, brand, model))
    }

    private registerVehicle(vehicle: Vehicle) {
        DB.add(vehicle)
    }

}