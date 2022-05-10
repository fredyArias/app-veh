
export type UserType = Selller | Buyer

export class User {
    id?: number
    name: string
    type: UserType
    constructor(name: string, userType: UserType) {
        this.name = name
        this.type = userType
    }

    saludar() {
        console.log(this.name)
    }
}



