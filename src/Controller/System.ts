var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)
import { Console } from 'console-mpds'
const console = new Console()

export function readNumber(output) {
  return console.readNumber(output)
}

export class System {
  static instance: System | null = null
  inputNumberValue: number

  static getInstance() {
    if (this.instance === null) {
      this.instance = new System()
    }
    return this.instance
  }

  private constructor() {}

  readNumber(output: string): number {
    rl.question(`${output}\n`, (inputValue: number) => {
      this.inputNumberValue = inputValue
    })
    return this.inputNumberValue
  }

  // read(output: any, input: any) {
  //   rl.question()
  // }

  // readNumber(outputText: string) {
  //   rl.question(`${outputText}\n`, (inputValue: number) => {
  //     this.inputNumberValue = inputValue
  //   })
  //   return this.inputNumberValue
  // }

  readString(outputText: string): string {
    // rl.question(`${outputText}\n`, (inputValue: string) => {
    //   this.inputStringValue = inputValue
    // })
    return ''
  }

  printText(outputText: string) {
    // this.inputStringValue = outputText
    // this.getInputValue()
  }

  // getInputValue() {
  //   return this.inputStringValue
  // }
}
