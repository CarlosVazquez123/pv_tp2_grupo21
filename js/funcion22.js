export function actualizarTexto(inputElement, displayElement) {
    inputElement.addEventListener('input', () => {
      displayElement.textContent = inputElement.value || 'Aquí se mostrará tu texto...';
  
    // Si supera los 20 caracteres, cambia el fondo
    if (inputTexto.value.length > 20) {
        displayElement.classList.add('largo');
      } else {
        displayElement.classList.remove('largo');
    }
  });
}
