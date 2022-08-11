import { System } from '../Controller/System'
import { Controller } from '../Controller/Controller'
import { Message } from './Message'
export class MainView {
  interact(controller: Controller) {
    const exitValue = 4
    const inputValue = System.getInstance().readNumber(Message.MAIN)
    inputValue !== exitValue
      ? controller.start(inputValue)
      : System.getInstance().printText('Exit')
  }
}
