import { Controller } from '../Controller/Controller'
import { readNumber, writeln } from '../Controller/IO'
import { Message } from './Message'

export class MainView {
  interact(controller: Controller) {
    const exitValue = 4
    let inputValue = 0

    do {
      writeln(Message.APP_TITLE)
      inputValue = readNumber(Message.MAIN)
      inputValue !== exitValue ? controller.start(inputValue) : writeln(Message.EXIT)
    } while (inputValue !== exitValue)
  }
}
