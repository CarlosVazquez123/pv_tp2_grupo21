const cambiarTexto = () => {
    const parrafo = document.getElementById("miParrafo");
    parrafo.textContent = "La higiene tiene por objeto conservar la salud y prevenir las enfermedades, es por ello que se deben cumplir ciertas normas o hábitos de higiene tanto en la vida personal de cada quién como en la vida familiar, en el trabajo, la escuela, la comunidad.!";
};
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("botonCambiar");
    boton.addEventListener("click", cambiarTexto);
});