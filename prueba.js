"use strict";
exports.__esModule = true;
var console_mpds_1 = require("console-mpds");
var console = new console_mpds_1.Console();
var min = console.readNumber("Introduce el m\u00EDnimo del intervalo:");
var max = console.readNumber("Introduce el m\u00E1ximo del intervalo (superior o igual al m\u00EDnimo):");
console.write("La longitud del intervalo [".concat(min, ", ").concat(max, "] es ").concat(max - min));
