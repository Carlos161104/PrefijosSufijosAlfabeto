"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PefSuf_1 = require("./PefSuf");
//Primer ejemcicio.
const cadena1 = "nyab";
const longitud1 = cadena1.split('').length;
console.log(`Palabra: ${cadena1}`);
(0, PefSuf_1.Sufijos)(cadena1.split(''), longitud1);
(0, PefSuf_1.Prefijos)(cadena1.split(''), longitud1);
console.log("-------------------------------------------------\n\n");
//Segundo ejercicio.
const cadena2 = "aabaaca";
const longitud2 = cadena2.split('').length;
console.log(`Palabra: ${cadena2}`);
(0, PefSuf_1.Sufijos)(cadena2.split(''), longitud2);
(0, PefSuf_1.Prefijos)(cadena2.split(''), longitud2);
console.log("-------------------------------------------------\n\n");
//Tercer ejercicio.
const cadena3 = "abracadabra";
const longitud3 = cadena3.split('').length;
console.log(`Palabra: ${cadena3}`);
(0, PefSuf_1.Sufijos)(cadena3.split(''), longitud3);
(0, PefSuf_1.Prefijos)(cadena3.split(''), longitud3);
console.log("-------------------------------------------------\n\n");
//Cuarto ejercicio.
const cadena4 = "anitalavalatina";
const longitud4 = cadena4.split('').length;
console.log(`Palabra: ${cadena4}`);
(0, PefSuf_1.Sufijos)(cadena4.split(''), longitud4);
(0, PefSuf_1.Prefijos)(cadena4.split(''), longitud4);
console.log("-------------------------------------------------\n\n");
//Quinto ejercicio.
const cadena5 = "hola";
const longitud5 = cadena5.split('').length;
console.log(`Palabra: ${cadena5}`);
(0, PefSuf_1.Sufijos)(cadena5.split(''), longitud5);
(0, PefSuf_1.Prefijos)(cadena5.split(''), longitud5);
console.log("-------------------------------------------------\n\n");
//Sexto ejercicio.
const cadena6 = "hola";
const longitud6 = cadena6.split('').length;
console.log(`Palabra: ${cadena6}`);
(0, PefSuf_1.Sufijos)(cadena6.split(''), longitud6);
(0, PefSuf_1.Prefijos)(cadena6.split(''), longitud6);
console.log("-------------------------------------------------\n\n");
