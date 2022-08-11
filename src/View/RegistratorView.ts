import { System } from '../Controller/System'
import { Message } from '../View/Message'

export class RegistratorView {
  interact() {
    System.getInstance().printText(Message.REGISTER_VEHICLE)
    const plate = System.getInstance().readString(Message.ENTER_PLATE)
    const brand = System.getInstance().readString(Message.ENTER_BRAND)
    const model = System.getInstance().readString(Message.ENTER_MODEL)

    return { plate, brand, model }
  }
}
