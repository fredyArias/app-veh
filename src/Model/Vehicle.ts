export type StatusVehicle = 'onSale' | 'soldOut'

export class Vehicle {  
    private plate: string
    private brand: string
    private model: number
    private status: StatusVehicle

    constructor(plate: string, brand: string, model: number, status: StatusVehicle = 'onSale') {
        this.plate = plate,
        this.brand = brand,
        this.model = model
        this.status = status
    }  
}