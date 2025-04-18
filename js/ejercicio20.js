const paisesCapitales = {"Argentina": "Buenos Aires","Brasil": "Brasilia","México": "Ciudad de México",
    "Canadá": "Ottawa","Chile": "Santiago","Colombia": "Bogotá"}
const selectPais = document.getElementById("pais")
const selectCapital = document.getElementById("capital")

selectPais.addEventListener("change", function () {
    const paisSeleccionado = selectPais.value;
    const capitalCorrespondiente = paisesCapitales[paisSeleccionado];

    // Cambiar la capital seleccionada
    for (let i = 0; i < selectCapital.options.length; i++) {
      if (selectCapital.options[i].value === capitalCorrespondiente) {
        selectCapital.selectedIndex = i;
        break;
      }
    }
    alert("La capital de " + paisSeleccionado + " es " + capitalCorrespondiente);
  });