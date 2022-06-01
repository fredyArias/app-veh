import { ConLog } from "../Controller/ConLog";
import { Message } from "./Message";

export class SearchView {
    show() {
        ConLog.write(Message.SEARCH)
        return this.getBrand()
    }

    private getBrand() {
        return ConLog.readString(Message.ENTER_BRAND)
    }
}