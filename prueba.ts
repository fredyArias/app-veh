var readline = require('readline')

var rl = readline.createInterface(process.stdin, process.stdout)

rl.question('Cual es tu nombre?\n', (respuesta) => {
  console.log(`Hola, ${respuesta}!`)
  process.exit()
})
