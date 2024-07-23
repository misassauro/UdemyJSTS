const pessoa1 = {
  nome: "Misael",
  sobrenome: "Gomes",
  idade: 25,
};

console.log(pessoa1);

const criarPessoa = (nome, sobrenome, idade) => {
  return {
    nome,
    sobrenome,
    idade,
    fala(frase) {
      console.log(`${this.nome} ${this.sobrenome} está falando "${frase}"`);
    },
    falaIdade() {
      console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade() {
      this.idade++;
    },
  };
};

const pessoa2 = criarPessoa("Misael", "Gomes", 21);

pessoa2.fala("Bom dia!");

pessoa2.incrementaIdade();
pessoa2.falaIdade();
pessoa2.incrementaIdade();
pessoa2.falaIdade();
pessoa2.incrementaIdade();
pessoa2.falaIdade();
pessoa2.incrementaIdade();
pessoa2.falaIdade();


