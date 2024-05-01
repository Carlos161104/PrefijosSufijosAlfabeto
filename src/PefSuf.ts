const cadena: string = "nyab";
const arreglo: string[] = cadena.split('');
const longitud: number = arreglo.length;

export function Prefijos(arreglo: string[], longitud: number): void {
    let prefijos: string[] = ["λ"];
    for (let i: number = 1; i <= longitud; i++) {
        let temp: string = "";
        for (let j: number = 0; j < i; j++) {
            temp += arreglo[j];
        }
        prefijos = [...prefijos, temp];
    }
    console.log("----------------------------------\nPrefijos:");
    prefijos.forEach(item => console.log(item));
}

export function Sufijos(arreglo: string[], longitud: number): void {
    let sufijos: string[] = ["λ"];
    for (let i: number = 1; i <= longitud; i++) {
        let temp: string = "";
        for (let j: number = longitud - 1; j >= longitud - i; j--) {
            temp = arreglo[j] + temp;
        }
        sufijos = [...sufijos, temp];
    }
    console.log("----------------------------------\nSufijos:");
    sufijos.forEach(item => console.log(item));
}

Prefijos(arreglo, longitud);
Sufijos(arreglo, longitud);