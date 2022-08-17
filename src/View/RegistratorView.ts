import { readString, writeln } from '../Controller/IO'
import { Message } from '../View/Message'

export class RegistratorView {
  interact() {
    writeln(Message.REGISTER_VEHICLE)
    const brand = readString(Message.ENTER_BRAND)
    const model = readString(Message.ENTER_MODEL)
    const plate = readString(Message.ENTER_PLATE)

    return { brand, model, plate }
  }
}
