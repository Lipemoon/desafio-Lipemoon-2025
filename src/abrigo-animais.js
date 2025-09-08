import fs from "fs";
import { Animal } from "./animal.js";
import { AnimalInvalido } from "./exceptions/AnimalInvalido.js";
import { BrinquedoInvalido } from "./exceptions/BrinquedoInvalido.js";
class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    try {
      const animais = new Animal();
      const lista = [];     
      const animaisLista = [];
      const ordemAnimaisTamanho = ordemAnimais.split(',');
      for (let i = 0; i < ordemAnimaisTamanho.length; i += 1) { 
        if (animaisLista.length == ordemAnimaisTamanho.length) {
          break;
        }
        if (ordemAnimais.includes(animais.Rex.nome)) {
          animaisLista.push(animais.Rex.nome);
        }
        if (ordemAnimais.includes(animais.Mimi.nome)) {
          animaisLista.push(animais.Mimi.nome);
        }
        if (ordemAnimais.includes(animais.Fofo.nome)) {
          animaisLista.push(animais.Fofo.nome);
        }
        if (ordemAnimais.includes(animais.Zero.nome)) {
          animaisLista.push(animais.Zero.nome);
        }
        if (ordemAnimais.includes(animais.Bola.nome)) {
          animaisLista.push(animais.Bola.nome);
        }
        if (ordemAnimais.includes(animais.Bebe.nome)) {
          animaisLista.push(animais.Bebe.nome);
        }
        if (ordemAnimais.includes(animais.Loco.nome)) {
          animaisLista.push(animais.Loco.nome);
        }
      }
      if (animaisLista.length < ordemAnimaisTamanho.length) { 
        throw new AnimalInvalido('Animal inválido');
      }

      for (let i = 0;i < animaisLista.length; i += 1) {
        for (let j = i + 1; j < animaisLista.length; j += 1) {
          if (animaisLista[i] === animaisLista[j]) {
            throw new AnimalInvalido('Animal inválido');
          }
        }
      }
      const brinquedosValidos = ['RATO', 'BOLA', 'LASER', 'NOVELO', 'CAIXA', 'SKATE'];
      const brinquedosLista = [];
      const brinquedosTotalPessoa1 = brinquedosPessoa1.split(',');
      for (let i = 0; i < brinquedosTotalPessoa1.length; i += 1) { 
        if (brinquedosLista.length == brinquedosTotalPessoa1.length) {
          break;
        }
        for (let j = 0; j < brinquedosValidos.length; j += 1) { 
          if (brinquedosPessoa1.includes(brinquedosValidos[j])) {
            brinquedosLista.push(brinquedosValidos[j]);
          }
        }
      }
      if (brinquedosLista.length < brinquedosTotalPessoa1.length) { 
        throw new BrinquedoInvalido('Brinquedo inválido');
      }
      for (let i = 0;i < brinquedosLista.length; i += 1) {
        for (let j = i + 1; j < brinquedosLista.length; j += 1) {
          if (brinquedosLista[i] === brinquedosLista[j]) {
            throw new BrinquedoInvalido('Brinquedo inválido');
          }
        }
      }





      if (ordemAnimais.includes(animais.Rex.nome)) {
      if (brinquedosPessoa1.includes(animais.Rex.brinquedos)) {
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
    } catch (error) { 
      if (error instanceof AnimalInvalido) {
        return console.log({ erro: error.message});
      } else if (error instanceof BrinquedoInvalido) {
        return console.log({ erro: error.message});
      }
    }
  }
}

const input = fs.readFileSync('input.txt', 'utf-8').split('\n')

const abrigo = new AbrigoAnimais();
abrigo.encontraPessoas(input[0], input[1], input[2]);

export { AbrigoAnimais as AbrigoAnimais };
