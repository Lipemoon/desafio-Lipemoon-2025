class BrinquedoInvalido extends Error {
  constructor(message) {
    super(message);
    this.name = 'Brinquedo inválido';
    }
}

export { BrinquedoInvalido as BrinquedoInvalido };