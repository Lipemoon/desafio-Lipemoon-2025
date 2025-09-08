class Animal {

  constructor(nome, raca, brinquedos) {
    this.nome = nome;
    this.raca = raca;
    this.brinquedos = brinquedos;
  }
}

const animaisDisponiveis = [
  new Animal('Rex', 'cao', ['RATO', 'BOLA']),
  new Animal('Mimi', 'gato', ['BOLA', 'LASER']),
  new Animal('Fofo', 'gato', ['BOLA', 'RATO', 'LASER']),
  new Animal('Zero', 'gato', ['RATO', 'BOLA']),
  new Animal('Bola', 'cao', ['CAIXA', 'NOVELO']),
  new Animal('Bebe', 'cao', ['LASER', 'RATO', 'BOLA']),
  new Animal('Loco', 'jabuti', ['SKATE', 'RATO'])
];
  

export { Animal as Animal, animaisDisponiveis };