import fs from "fs";

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const animais = {
      Rex:  { nome: 'Rex', raca: 'cao', brinquedos: ['RATO','BOLA'] },
      Mimi: { nome: 'Mimi', raca: 'gato', brinquedos: ['BOLA','LASER'] },
      Fofo: { nome: 'Fofo', raca: 'gato', brinquedos: ['BOLA','RATO','LASER'] },
      Zero: { nome: 'Zero', raca: 'gato', brinquedos: ['RATO','BOLA'] },
      Bola: { nome: 'Bola', raca: 'cao', brinquedos: ['CAIXA', 'NOVELO'] },
      Bebe: { nome: 'Bebe', raca: 'cao', brinquedos: ['LASER', 'RATO', 'BOLA'] },
      Loco: { nome: 'Loco', raca: 'jabuti', brinquedos: ['SKATE', 'RATO'] },
    };

    const lista = [];
    if (ordemAnimais.includes(animais.Rex.nome)) {
      if (brinquedosPessoa1.includes(animais.Rex.brinquedos[0]) && brinquedosPessoa1.includes(animais.Rex.brinquedos[1])) {
        console.log('animal dos inferno');
        lista.push(`${animais.Rex.nome} - pessoa 1`);
      }
    } 

    if (ordemAnimais.includes(animais.Fofo.nome)) {
      if (brinquedosPessoa2.includes(animais.Fofo.brinquedos[0]) && brinquedosPessoa2.includes(animais.Fofo.brinquedos[1])) {
        lista.push(`${animais.Rex.nome} - pessoa 1`);
      } else {
        lista.push(`${animais.Fofo.nome} - abrigo`);
      }
    }

    lista.sort();
    console.log('Pessoa 1:', brinquedosPessoa1);
    console.log('Pessoa 2:', brinquedosPessoa2);
    console.log('Ordem dos animais:', ordemAnimais);
    console.log(lista);
  }
}

const input = fs.readFileSync('input.txt', 'utf-8').split('\n')

const abrigo = new AbrigoAnimais();
abrigo.encontraPessoas(input[0], input[1], input[2]);

export { AbrigoAnimais as AbrigoAnimais };
