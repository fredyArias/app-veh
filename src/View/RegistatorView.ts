import { ConLog } from '../Controller/ConLog'
import { Message } from '../View/Message'

export class RegistatorView {
  getVehicleData() {
    ConLog.write(Message.REGISTER_VEHICLE)
    const plate = ConLog.readString(Message.ENTER_PLATE)
    const brand = ConLog.readString(Message.ENTER_BRAND)
    const model = ConLog.readNumber(Message.ENTER_MODEL)

    return { plate, brand, model }
  }
}
