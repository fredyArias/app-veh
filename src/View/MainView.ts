import { ConLog } from '../Controller/ConLog'
import { Controller } from '../Controller/Controller'
import { Message } from './Message'

export class MainView {
  show(controller: Controller) {
    const inputValue = ConLog.readNumber(Message.MAIN)
    inputValue !== 3 ? controller.start(inputValue) : ConLog.write('Exit')
  }
}
