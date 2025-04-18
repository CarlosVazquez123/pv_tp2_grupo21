export function actualizarTexto(inputElement, displayElement) {
    inputElement.addEventListener('input', () => {
      displayElement.textContent = inputElement.value || 'Aquí se mostrará tu texto...';
    });
  }
  