class AnimalInvalido extends Error {
  constructor(message) {
    super(message);
    this.name = 'Animal inválido';
    }
}

export { AnimalInvalido as AnimalInvalido };