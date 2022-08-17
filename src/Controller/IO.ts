const readlineSync = require('readline-sync')

const input = (prompt) => {
  const userInput = readlineSync.question(prompt)
  return userInput
}

export function write(value) {
  if (value !== undefined) {
    process.stdout.write(`${value}`)
  }
}

export function writeln(value) {
  write(value)
  write(`\n`)
}

export function readString(title) {
  write(title)
  return input(' ')
}

export function readNumber(title) {
  let input
  do {
    input = parseInt(readString(title))
    if (isNaN(input)) {
      console.log('FORMAT ERROR!!! Enter a number formatted value.')
    }
  } while (isNaN(input))
  return input
}
