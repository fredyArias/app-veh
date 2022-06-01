import { DB } from "../Model/DB";
import { SearchView } from "../View/SearchView";

export class SearchController {
    searchView: SearchView // es valído instanciar objetos está forna (sin el new)?
    valueToSearch: string

    constructor() {
        this.searchView
    }

    getDataToSearch() {
        this.valueToSearch = this.searchView.show()
        this.search()
    }

    private search() {
        DB.search(this.valueToSearch)
    }
}