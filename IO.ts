var readline = require('readline-sync')
var rl = readline.createInterface(process.stdin, process.stdout)

export function readName() {
  return rl.question('Ingrese un nombre', (inputValue) => {
    return inputValue
  })
}
