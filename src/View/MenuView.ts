import { Console } from "../Console"
import { Message } from "./Message"
import { Command } from "../Command"
import { Vehicle } from "../Model/Vehicle"

export class MenuView {
    private inputValue: number

    init(vehicleList: Vehicle[]) {
        do {
            const command = new Command(vehicleList)    
            console.log(Message.TITLE)
            this.inputValue = Console.readNumber(Message.MENU)
            command.manage(this.inputValue)
        } 
        while(this.inputValue !== 3)
    }
}