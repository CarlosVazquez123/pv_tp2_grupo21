let nombres = ["Carlos", "Josué", "Fran", "Ricardo", "Gabriel", "Julián"];

let maxLength = nombres[0].length;
let nombreMaxLength;

nombres.forEach( (x) => {
    if (x.length > maxLength) {
        maxLength = x.length;
        nombreMaxLength = x;
    }
});

console.log("El nombre mas largo es " + nombreMaxLength);
console.log("Tiene " + maxLength + " caracteres");