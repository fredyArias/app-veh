import { Vehicle } from "./Model/Vehicle"

export class DB {
    static allVehicles: Vehicle[]

    static add(vehicle: Vehicle) {
        this.allVehicles.push(vehicle)
    }

}

