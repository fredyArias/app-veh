import { Console } from 'console-mpds'
const console = new Console()

const min = console.readNumber(`Introduce el mínimo del intervalo:`)
const max = console.readNumber(
  `Introduce el máximo del intervalo (superior o igual al mínimo):`
)
console.write(`La longitud del intervalo [${min}, ${max}] es ${max - min}`)
