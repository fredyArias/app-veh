import { Controller } from "../Controller/Controller"
import { MainView } from "./MainView"

export class View {
    private controller: Controller
    private main: MainView
    
    constructor() {
        this.controller = new Controller()
        this.main = new MainView()
    }

    init() {
        this.show(this.main)
    }

    private show(view: MainView) {
        view.show(this.controller)
    }
}