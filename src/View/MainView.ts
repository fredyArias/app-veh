import { Controller } from '../Controller/Controller'
import { readNumber } from '../Controller/IO'
import { Message } from './Message'

export class MainView {
  interact(controller: Controller) {
    const exitValue = 4
    let inputValue = readNumber(Message.MAIN)
    inputValue !== exitValue ? controller.start(inputValue) : console.log('Exit...')
  }
}
