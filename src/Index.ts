import { Sufijos, Prefijos } from "./PefSuf";

//Primer ejemcicio.
const cadena1: string = "aabddcdff";
const longitud1: number = cadena1.split('').length;
console.log(`Palabra: ${cadena1}`);
Sufijos(cadena1.split(''), longitud1);
Prefijos(cadena1.split(''), longitud1);
console.log("********************************************************\n\n");

//Segundo ejercicio.
const cadena2: string = "bcdcdafaff";
const longitud2: number = cadena2.split('').length;
console.log(`Palabra: ${cadena2}`);
Sufijos(cadena2.split(''), longitud2);
Prefijos(cadena2.split(''), longitud2);
console.log("********************************************************\n\n");

//Tercer ejercicio.
const cadena3: string = "bcdcdcacaff";
const longitud3: number = cadena3.split('').length;
console.log(`Palabra: ${cadena3}`);
Sufijos(cadena3.split(''), longitud3);
Prefijos(cadena3.split(''), longitud3);
console.log("********************************************************\n\n");

//Cuarto ejercicio.
const cadena4: string = "0110010101";
const longitud4: number = cadena4.split('').length;
console.log(`Palabra: ${cadena4}`);
Sufijos(cadena4.split(''), longitud4);
Prefijos(cadena4.split(''), longitud4);
console.log("********************************************************\n\n");

//Quinto ejercicio.
const cadena5: string = "010110101100";
const longitud5: number = cadena5.split('').length;
console.log(`Palabra: ${cadena5}`);
Sufijos(cadena5.split(''), longitud5);
Prefijos(cadena5.split(''), longitud5);
console.log("********************************************************\n\n");

//Sexto ejercicio.
const cadena6: string = "01110001010010";
const longitud6: number = cadena6.split('').length;
console.log(`Palabra: ${cadena6}`);
Sufijos(cadena6.split(''), longitud6);
Prefijos(cadena6.split(''), longitud6);
console.log("********************************************************\n\n");
