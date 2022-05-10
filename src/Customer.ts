import { Vehicle } from "./Model/Vehicle"

export class Customer {
    name: string
    identificationNumber: string
    vehicle: Vehicle

    constructor(identificationNumber: string, name: string, vehicle: Vehicle) {
        this.identificationNumber = identificationNumber,
        this.name = name,
        this.vehicle = vehicle
    }
}

// const vehicle = new Vehicle('ABC-123', 'Mazda', 2020)
// const client = new Client('654321', 'Fredy', vehicle)