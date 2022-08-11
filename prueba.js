var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Cual es tu nombre?\n', function (respuesta) {
    console.log("Hola, ".concat(respuesta, "!"));
    process.exit();
});
