var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)

export class System {
  static instance: System | null = null
  inputNumberValue: number
  inputStringValue: string

  static getInstance() {
    if (this.instance === null) {
      this.instance = new System()
    }
    return this.instance
  }

  private constructor() {}

  readNumber(outputText: string): number {
    rl.question(`${outputText}\n`, (inputValue: number) => {
      this.inputNumberValue = inputValue
      process.exit()
    })
    return this.inputNumberValue
  }

  readString(outputText: string): string {
    rl.question(`${outputText}\n`, (inputValue: string) => {
      this.inputStringValue = inputValue
      process.exit()
    })
    return this.inputStringValue
  }

  printText(outputText: number | string) {
    console.log(outputText)
  }
}
