import { ConLog } from "../Controller/ConLog"
import { Controller } from "../Controller/Controller"
import { Message } from "./Message"

export class MainView {
    private inputValue: number

    init(controller: Controller) {
        this.inputValue = ConLog.readNumber(Message.MAIN)
        this.inputValue !== 3 ? controller.start(this.inputValue) : ConLog.write('Exit')
    }
}