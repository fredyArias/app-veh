import { Controller } from "../Controller/Controller"
import { MainView } from "./MainView"

export class View {
    private main: MainView
    private controller: Controller
    
    constructor() {
        this.main = new MainView()
        this.controller = new Controller()
    }

    init() {
        this.show(this.main)
    }

    private show(view: MainView) {
        view.init(this.controller)
    }
}