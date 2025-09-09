import { AbrigoAnimais } from "./abrigo-animais";

describe('Abrigo de Animais', () => {

  test('Deve rejeitar animal inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Lulu');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar animal duplicado', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Rex,Rex');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar brinquedo inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO,SOFA', 'RATO,BOLA', 'Rex,Fofo');
    expect(resultado.erro).toBe('Brinquedo inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar brinquedo duplicado', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO,CAIXA', 'RATO,BOLA', 'Rex,Fofo');
    expect(resultado.erro).toBe('Brinquedo inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve deixar animal no abrigo porque ambas as pessoas tem condição de adotar o animal', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,BOLA', 'Rex,Fofo');
      expect(resultado.lista[0]).toBe('Fofo - abrigo');
      expect(resultado.lista[1]).toBe('Rex - abrigo');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
      expect(resultado.lista[0]).toBe('Fofo - abrigo');
      expect(resultado.lista[1]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para dois animais', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'LASER,RATO,BOLA', 'RATO,NOVELO', 'Rex,Bebe,Fofo');
      expect(resultado.lista[0]).toBe('Bebe - pessoa 1');
      expect(resultado.lista[1]).toBe('Fofo - abrigo');
      expect(resultado.lista[2]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(3);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para três animais', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'LASER,RATO,BOLA,SKATE', 'RATO,NOVELO', 'Rex,Bebe,Loco,Fofo');
      expect(resultado.lista[0]).toBe('Bebe - pessoa 1');
      expect(resultado.lista[1]).toBe('Fofo - abrigo');
      expect(resultado.lista[2]).toBe('Loco - pessoa 1');
      expect(resultado.lista[3]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar a mesma pessoa para adotar um gato e um cao', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'BOLA,LASER,CAIXA,NOVELO', 'RATO', 'Bola,Mimi');
      expect(resultado.lista[0]).toBe('Bola - pessoa 1');
      expect(resultado.lista[1]).toBe('Mimi - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve adotar somente o Zero porque o gato não divide seus brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO', 'Zero,Rex');
      expect(resultado.lista[0]).toBe('Rex - abrigo');
      expect(resultado.lista[1]).toBe('Zero - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve adotar somente a Mimi porque o gato não divide seus brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA,LASER', 'RATO', 'Mimi,Rex');
      expect(resultado.lista[0]).toBe('Mimi - pessoa 1');
      expect(resultado.lista[1]).toBe('Rex - abrigo');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve adotar somente o Fofo porque o gato não divide seus brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'BOLA,RATO,LASER,SKATE', 'RATO', 'Fofo,Loco');
      expect(resultado.lista[0]).toBe('Fofo - pessoa 1');
      expect(resultado.lista[1]).toBe('Loco - abrigo');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve adotar somente três animais', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'LASER,RATO,BOLA,SKATE,CAIXA,NOVELO', 'RATO,NOVELO', 'Rex,Bebe,Loco,Bola');
      expect(resultado.lista[0]).toBe('Bebe - pessoa 1');
      expect(resultado.lista[1]).toBe('Bola - abrigo');
      expect(resultado.lista[2]).toBe('Loco - pessoa 1');
      expect(resultado.lista[3]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve ficar no abrigo os animais porque ambos tem as mesmas condições de adotar', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'LASER,RATO,BOLA,SKATE,CAIXA,NOVELO', 'LASER,RATO,BOLA,SKATE,CAIXA,NOVELO', 'Rex,Bebe,Loco,Bola');
      expect(resultado.lista[0]).toBe('Bebe - abrigo');
      expect(resultado.lista[1]).toBe('Bola - abrigo');
      expect(resultado.lista[2]).toBe('Loco - abrigo');
      expect(resultado.lista[3]).toBe('Rex - abrigo');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve ficar no abrigo somente o Loco porque falta o brinquedo SKATE', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'LASER,RATO,BOLA', 'CAIXA,NOVELO', 'Rex,Bebe,Loco,Bola');
      expect(resultado.lista[0]).toBe('Bebe - pessoa 1');
      expect(resultado.lista[1]).toBe('Bola - pessoa 2');
      expect(resultado.lista[2]).toBe('Loco - abrigo');
      expect(resultado.lista[3]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal intercalando brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('BOLA,LASER',
      'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola');
      expect(resultado.lista[0]).toBe('Bola - abrigo');
      expect(resultado.lista[1]).toBe('Fofo - pessoa 2');
      expect(resultado.lista[2]).toBe('Mimi - abrigo');
      expect(resultado.lista[3]).toBe('Rex - abrigo');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para dois animal intercalando brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('BOLA,LASER',
      'BOLA,CAIXA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola');
      expect(resultado.lista[0]).toBe('Bola - pessoa 2');
      expect(resultado.lista[1]).toBe('Fofo - pessoa 2');
      expect(resultado.lista[2]).toBe('Mimi - abrigo');
      expect(resultado.lista[3]).toBe('Rex - abrigo');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve adotar o animal Loco com companhia de outro animal', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,BOLA,SKATE',
      'BOLA,NOVELO,LASER', 'Rex,Loco,Bola');
      expect(resultado.lista[0]).toBe('Bola - abrigo');
      expect(resultado.lista[1]).toBe('Loco - pessoa 1');
      expect(resultado.lista[2]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(3);
      expect(resultado.erro).toBeFalsy();
  });

});
