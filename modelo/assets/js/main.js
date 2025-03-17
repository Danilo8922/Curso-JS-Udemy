const form = document.querySelector(".form");

form = addEventListener("submit", function (event) {
  event.preventDefault();

  const iNpeso = event.target.querySelector("#peso");
  const iNaltura = event.target.querySelector("#altura");

  const peso = Number(iNpeso.value);
  const altura = Number(iNaltura.value);

  if (!peso) {
    setResultado("peso invalido", false);
    return;
  }

  if (!altura) {
    setResultado("altura invalida", false);
    return;
  }

  const imc = getIMC(peso, altura);
  const nivelIMC = getnivelimc(imc);

  const msg = `seu nivel de imc ${imc} (${nivelIMC})`;
  setResultado(msg, true);
});

function getnivelimc(imc) {
  const nivel = [
    "Abaixo do peso",
    "peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc <= 18.5) return nivel[0];
  if (imc > 18.5 && imc <= 24.9) return nivel[1];
  if (imc > 24.9 && imc <= 29.9) return nivel[2];
  if (imc > 29.9 && imc <= 34.9) return nivel[3];
  if (imc > 34.9 && imc <= 39.9) return nivel[4];
  if (imc > 40) return nivel[5];
}

function getIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function CriaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, Isvalid) {
  const resultato = document.querySelector(".resultado");
  resultato.innerHTML = "";
  const p = CriaP();
  if (Isvalid) {
    p.classList.add("paragrafo_resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultato.appendChild(p);
}
