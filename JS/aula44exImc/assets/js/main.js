const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const peso = e.target.querySelector("#peso");
  const altura = e.target.querySelector("#altura");
  const pesoValue = Number(peso.value);
  const alturaValue = Number(altura.value);

  if (!pesoValue) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!alturaValue) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getImc(pesoValue, alturaValue);
  const nivel = getNivel(imc);

  setResultado(`O seu IMC é ${imc} (${nivel})`, true);
});

function getImc(peso, altura) {
  return parseFloat(peso / Math.pow(altura, 2)).toFixed(2);
}

function getNivel(imc) {
  const niveis = [
    "Abaixo do peso",
    "Peso normal",
    "Acima do peso",
    "Sobrepeso",
    "Obesidade grau I",
    "Obesidade grau II",
    "Obesidade grau III",
  ];

  if (imc >= 39.9) return niveis[5];
  if (imc >= 34.9) return niveis[4];
  if (imc >= 29.9) return niveis[3];
  if (imc >= 24.9) return niveis[2];
  if (imc >= 18.5) return niveis[1];
  if (imc < 18.5) return niveis[0];
}

function setResultado(msg, isValid) {
  const divResultado = document.querySelector("#result");
  divResultado.innerHTML = "";

  const p = criaParagrafo();
  if (isValid) {
    p.classList.add("result");
  } else {
    p.classList.add("bad");
  }
  p.innerHTML = msg;
  divResultado.appendChild(p);
}

function criaParagrafo() {
  const p = document.createElement("p");
  return p;
}
