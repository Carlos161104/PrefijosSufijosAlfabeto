"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sufijos = exports.Prefijos = void 0;
const cadena = "nyab";
const arreglo = cadena.split('');
const longitud = arreglo.length;
function Prefijos(arreglo, longitud) {
    let prefijos = ["λ"];
    for (let i = 1; i <= longitud; i++) {
        let temp = "";
        for (let j = 0; j < i; j++) {
            temp += arreglo[j];
        }
        prefijos = [...prefijos, temp];
    }
    console.log("----------------------------------\nPrefijos:");
    prefijos.forEach(item => console.log(item));
}
exports.Prefijos = Prefijos;
function Sufijos(arreglo, longitud) {
    let sufijos = ["λ"];
    for (let i = 1; i <= longitud; i++) {
        let temp = "";
        for (let j = longitud - 1; j >= longitud - i; j--) {
            temp = arreglo[j] + temp;
        }
        sufijos = [...sufijos, temp];
    }
    console.log("----------------------------------\nSufijos:");
    sufijos.forEach(item => console.log(item));
}
exports.Sufijos = Sufijos;
Prefijos(arreglo, longitud);
Sufijos(arreglo, longitud);
