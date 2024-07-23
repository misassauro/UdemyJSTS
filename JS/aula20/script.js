const arrayDados = [];

function enviarDados() {
  const form = document.querySelector("form");

  function recebeEvento(e) {
    e.preventDefault();

    const nome = document.querySelector(".nome");
    const sobrenome = document.querySelector(".sobrenome");
    const idade = document.querySelector(".idade");
    const peso = document.querySelector(".peso");

    const dados = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      idade: idade.value,
      peso: peso.value,
    };

    arrayDados.push(dados);

    const resultado = document.querySelector(".resultado");
    resultado.innerHTML += `<p>Nome: ${dados.nome} ${
      dados.sobrenome
    } <br> Idade: ${dados.idade} <br> Peso: ${parseFloat(dados.peso).toFixed(2)} kg</p>`;
  }

  form.addEventListener("submit", recebeEvento);
}

enviarDados();
