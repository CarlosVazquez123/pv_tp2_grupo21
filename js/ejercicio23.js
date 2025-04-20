const mostrarLenguaje = (event) => {
    const valor = event.target.value;
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Seleccionaste: ${valor}`;
    console.log(`Lenguaje seleccionado: ${valor}`);
};
document.addEventListener("DOMContentLoaded", () => {
    const radios = document.querySelectorAll('input[name="lenguaje"]');
    radios.forEach(radio => {
        radio.addEventListener("change", mostrarLenguaje);
    });
});
