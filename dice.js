const rollDiceButton = document.querySelector("#roll-dice-button");
const numeroAleatorio = document.querySelector(".roll-dices");
const carasInput = document.querySelector("#caras-input");
const dicesContainer = document.querySelector("#dices-container");
const dicesButtons = document.querySelectorAll(".dices");

// Crear dados
dicesButtons.forEach(function (button) {
  button.addEventListener("click", crearDados);
});
function crearDados() {
  switch (this.id) {
    case "one-dice":
      dicesContainer.innerHTML = `
      <div id="roll-dice-1" class="roll-dices">?</div>
      `;
      const rollDices1 = document.querySelectorAll(".roll-dices");
      const rollDice1 = document.querySelector("#roll-dice-1");
      const total1 = document.querySelector("#total");
      // Escucha el evento click del dado
      rollDices1.forEach(function (roll) {
        roll.addEventListener("click", () => {
          const numCaras = parseInt(carasInput.value, 10);
          if (isNaN(numCaras)) {
            rollDice1.textContent = "?";
          } else {
            const randomNumber1 = obtenerNumeroAleatorio(1, numCaras);
            rollDice1.textContent = randomNumber1;
            total1.value = randomNumber1;
          }
        });
      });
      // Escucha el evento click del botón
      rollDiceButton.addEventListener("click", () => {
        const numCaras = parseInt(carasInput.value, 10);
        if (isNaN(numCaras)) {
          rollDice1.textContent = "?";
        } else {
          const randomNumber1 = obtenerNumeroAleatorio(1, numCaras);
          rollDice1.textContent = randomNumber1;
          total1.value = randomNumber1;
        }
      });
      break;
    case "two-dices":
      dicesContainer.innerHTML = `
      <div id="roll-dice-2" class="roll-dices">?</div>
      <div id="roll-dice-3" class="roll-dices">?</div>
      `;
      const rollDices2 = document.querySelectorAll(".roll-dices");
      const rollDice2 = document.querySelector("#roll-dice-2");
      const rollDice3 = document.querySelector("#roll-dice-3");
      const total2 = document.querySelector("#total");
      // Escucha el evento click del dado
      rollDices2.forEach(function (roll) {
        roll.addEventListener("click", () => {
          const numCaras = parseInt(carasInput.value, 10);
          if (isNaN(numCaras)) {
            rollDice2.textContent = "?";
            rollDice3.textContent = "?";
          } else {
            const randomNumber1 = obtenerNumeroAleatorio(1, numCaras);
            rollDice2.textContent = randomNumber1;
            const randomNumber2 = obtenerNumeroAleatorio(1, numCaras);
            rollDice3.textContent = randomNumber2;
            total2.value = randomNumber1 + randomNumber2;
          }
        });
      });
      // Escucha el evento click del botón
      rollDiceButton.addEventListener("click", () => {
        const numCaras = parseInt(carasInput.value, 10);
        if (isNaN(numCaras)) {
          rollDice2.textContent = "?";
          rollDice3.textContent = "?";
        } else {
          const randomNumber1 = obtenerNumeroAleatorio(1, numCaras);
          rollDice2.textContent = randomNumber1;
          const randomNumber2 = obtenerNumeroAleatorio(1, numCaras);
          rollDice3.textContent = randomNumber2;
          total2.value = randomNumber1 + randomNumber2;
        }
      });
      break;
    case "three-dices":
      dicesContainer.innerHTML = `
      <div id="roll-dice-4" class="roll-dices">?</div>
      <div id="roll-dice-5" class="roll-dices">?</div>
      <div id="roll-dice-6" class="roll-dices">?</div>
      `;
      const rollDices3 = document.querySelectorAll(".roll-dices");
      const rollDice4 = document.querySelector("#roll-dice-4");
      const rollDice5 = document.querySelector("#roll-dice-5");
      const rollDice6 = document.querySelector("#roll-dice-6");
      const total3 = document.querySelector("#total");
      // Escucha el evento click del dado
      rollDices3.forEach(function (roll) {
        roll.addEventListener("click", () => {
          const numCaras = parseInt(carasInput.value, 10);
          if (isNaN(numCaras)) {
            rollDice4.textContent = "?";
            rollDice5.textContent = "?";
            rollDice6.textContent = "?";
          } else {
            const randomNumber1 = obtenerNumeroAleatorio(1, numCaras);
            rollDice4.textContent = randomNumber1;
            const randomNumber2 = obtenerNumeroAleatorio(1, numCaras);
            rollDice5.textContent = randomNumber2;
            const randomNumber3 = obtenerNumeroAleatorio(1, numCaras);
            rollDice6.textContent = randomNumber3;
            total3.value = randomNumber1 + randomNumber2 + randomNumber3;
          }
        });
      });
      // Escucha el evento click del botón
      rollDiceButton.addEventListener("click", () => {
        const numCaras = parseInt(carasInput.value, 10);
        if (isNaN(numCaras)) {
          rollDice4.textContent = "?";
          rollDice5.textContent = "?";
          rollDice6.textContent = "?";
        } else {
          const randomNumber1 = obtenerNumeroAleatorio(1, numCaras);
          rollDice4.textContent = randomNumber1;
          const randomNumber2 = obtenerNumeroAleatorio(1, numCaras);
          rollDice5.textContent = randomNumber2;
          const randomNumber3 = obtenerNumeroAleatorio(1, numCaras);
          rollDice6.textContent = randomNumber3;
          total3.value = randomNumber1 + randomNumber2 + randomNumber3;
        }
      });
      break;
    case "four-dices":
      dicesContainer.innerHTML = `
      <div id="roll-dice-7" class="roll-dices">?</div>
      <div id="roll-dice-8" class="roll-dices">?</div>
      <div id="roll-dice-9" class="roll-dices">?</div>
      <div id="roll-dice-0" class="roll-dices">?</div>
      `;
      const rollDices4 = document.querySelectorAll(".roll-dices");
      const rollDice7 = document.querySelector("#roll-dice-7");
      const rollDice8 = document.querySelector("#roll-dice-8");
      const rollDice9 = document.querySelector("#roll-dice-9");
      const rollDice0 = document.querySelector("#roll-dice-0");
      const total4 = document.querySelector("#total");
      // Escucha el evento click del dado
      rollDices4.forEach(function (roll) {
        roll.addEventListener("click", () => {
          const numCaras = parseInt(carasInput.value, 10);
          if (isNaN(numCaras)) {
            rollDice7.textContent = "?";
            rollDice8.textContent = "?";
            rollDice9.textContent = "?";
            rollDice0.textContent = "?";
          } else {
            const randomNumber1 = obtenerNumeroAleatorio(1, numCaras);
            rollDice7.textContent = randomNumber1;
            const randomNumber2 = obtenerNumeroAleatorio(1, numCaras);
            rollDice8.textContent = randomNumber2;
            const randomNumber3 = obtenerNumeroAleatorio(1, numCaras);
            rollDice9.textContent = randomNumber3;
            const randomNumber4 = obtenerNumeroAleatorio(1, numCaras);
            rollDice0.textContent = randomNumber4;
            total4.value =
              randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4;
          }
        });
      });
      // Escucha el evento click del botón
      rollDiceButton.addEventListener("click", () => {
        const numCaras = parseInt(carasInput.value, 10);
        if (isNaN(numCaras)) {
          rollDice7.textContent = "?";
          rollDice8.textContent = "?";
          rollDice9.textContent = "?";
          rollDice0.textContent = "?";
        } else {
          const randomNumber = obtenerNumeroAleatorio(1, numCaras);
          const randomNumber1 = obtenerNumeroAleatorio(1, numCaras);
          rollDice7.textContent = randomNumber1;
          const randomNumber2 = obtenerNumeroAleatorio(1, numCaras);
          rollDice8.textContent = randomNumber2;
          const randomNumber3 = obtenerNumeroAleatorio(1, numCaras);
          rollDice9.textContent = randomNumber3;
          const randomNumber4 = obtenerNumeroAleatorio(1, numCaras);
          rollDice0.textContent = randomNumber4;
          total4.value =
            randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4;
        }
      });
      break;
  }
}
// Funcion para obtener número aleatorio entero
function obtenerNumeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const rollDices1 = document.querySelectorAll(".roll-dices");
const rollDice1 = document.querySelector("#roll-dice-1");
const total1 = document.querySelector("#total");
// Escucha el evento click del dado
rollDices1.forEach(function (roll) {
  roll.addEventListener("click", () => {
    const numCaras = parseInt(carasInput.value, 10);
    if (isNaN(numCaras)) {
      rollDice1.textContent = "?";
    } else {
      const randomNumber1 = obtenerNumeroAleatorio(1, numCaras);
      rollDice1.textContent = randomNumber1;
      total1.value = randomNumber1;
    }
  });
});
// Escucha el evento click del botón
rollDiceButton.addEventListener("click", () => {
  const numCaras = parseInt(carasInput.value, 10);
  if (isNaN(numCaras)) {
    rollDice1.textContent = "?";
  } else {
    const randomNumber1 = obtenerNumeroAleatorio(1, numCaras);
    rollDice1.textContent = randomNumber1;
    total1.value = randomNumber1;
  }
});
