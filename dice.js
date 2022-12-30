const rollButtonContainer = document.querySelector(".roll-button-container");
const rollButton = document.querySelector("#roll-button");
const numeroAleatorio = document.querySelector("#numero-aleatorio");
const carasInput = document.querySelector("#caras-input");

// Funcion para obtener número aleatorio entero
function obtenerNumeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Escucha el evento click del cuadro
rollButtonContainer.addEventListener("click", () => {
    const numCaras = parseInt(carasInput.value, 10);
    if (isNaN(numCaras)){
      numeroAleatorio.textContent = "?";
    }
    else {
      const randomNumber = obtenerNumeroAleatorio(1, numCaras);
      numeroAleatorio.textContent = randomNumber;
    }
});

// Escucha el evento click del botón
rollButton.addEventListener("click", () => {
    const numCaras = parseInt(carasInput.value, 10);
    if (isNaN(numCaras)){
      numeroAleatorio.textContent = "?";
    }
    else {
      const randomNumber = obtenerNumeroAleatorio(1, numCaras);
      numeroAleatorio.textContent = randomNumber;
    }
});

