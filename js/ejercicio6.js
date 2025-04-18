let edades = [21, 22, 23, 24, 25, 26, 27, 28];
let promedio = 0;
for (let i = 0; i < edades.length; i++) {
    promedio += edades[i];
}
promedio /= edades.length;
console.log("El promedio de las edades es de " + promedio);