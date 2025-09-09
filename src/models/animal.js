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

function acharAnimalPeloNome(animalProcurado) {
  for (let i = 0; i < animaisDisponiveis.length; i++) {
    if (animaisDisponiveis[i].nome == animalProcurado) {
      return animaisDisponiveis[i];
    }
  }
}
  
export { Animal as Animal, animaisDisponiveis, acharAnimalPeloNome };