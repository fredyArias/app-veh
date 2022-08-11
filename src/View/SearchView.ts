import { System } from '../Controller/System'
import { Message } from './Message'

export class SearchView {
  interact() {
    System.getInstance().printText(Message.SEARCH)
    return this.getPlate()
  }

  private getPlate() {
    return System.getInstance().readString(Message.ENTER_PLATE)
  }

  private getId() {
    return System.getInstance().readString(Message.ENTER_ID)
  }
}
