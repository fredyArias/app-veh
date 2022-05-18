import { Customer } from "../Customer"

export type VehicleType = string |'car' | 'motorcycle' 
export type StatusVehicle = 'onSale' | 'soldOut'


export class Vehicle {  
    private type: VehicleType
    private plate: string
    private brand: string
    private model: number
    private status: StatusVehicle
    private customer?: Customer

    constructor(type: VehicleType, plate: string, brand: string, model: number, status: StatusVehicle = 'onSale') {
        this.type = type
        this.plate = plate,
        this.brand = brand,
        this.model = model
        this.status = status
    }  
}