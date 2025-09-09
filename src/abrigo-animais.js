import { acharAnimalPeloNome } from "./models/animal.js";
import { AnimalInvalido } from "./exceptions/AnimalInvalido.js";
import { BrinquedoInvalido } from "./exceptions/BrinquedoInvalido.js";
import { verificarAnimaisValidos, 
  verificarBrinquedosValidos, 
  verificarAdocaoAnimal, 
  verificarAdocaoDoAnimalLoco,
  verificarPropriaLista,
  verificarBrinquedosUsados
 } from "./utils/verificacoes.js";
import { converterStringParaLista } from "./utils/conversoes.js"

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    try {
      const lista = [];
      if (!verificarAnimaisValidos(ordemAnimais)) {
        throw new AnimalInvalido('Animal inválido');
      }
      if (!verificarBrinquedosValidos(brinquedosPessoa1) || !verificarBrinquedosValidos(brinquedosPessoa2)) {
        throw new BrinquedoInvalido('Brinquedo inválido');
      }
      let brinquedosPessoa1Splitados = converterStringParaLista(brinquedosPessoa1);
      let brinquedosPessoa2Splitados = converterStringParaLista(brinquedosPessoa2);
      let ordemAnimaisSplitados = converterStringParaLista(ordemAnimais);

      let contagemAnimaisPessoa1 = 0;
      let contagemAnimaisPessoa2 = 0;

      ordemAnimaisSplitados.forEach(animal => {
        const acharAnimal = acharAnimalPeloNome(animal);
        const brinquedosDoAnimal = acharAnimal.brinquedos;
        let destinoDoAnimal = '';
        
        if (acharAnimal.nome == 'Loco' && verificarPropriaLista(lista)) {
          const pessoa1PodeAdotarLoco = verificarAdocaoDoAnimalLoco(brinquedosPessoa1Splitados, brinquedosDoAnimal);
          const pessoa2PodeAdotarLoco = verificarAdocaoDoAnimalLoco(brinquedosPessoa2Splitados, brinquedosDoAnimal);

          if (pessoa1PodeAdotarLoco && pessoa2PodeAdotarLoco) {
            destinoDoAnimal = 'abrigo';
          } else if (pessoa1PodeAdotarLoco && contagemAnimaisPessoa1 < 3) {
            contagemAnimaisPessoa1 += 1;
            destinoDoAnimal = 'pessoa 1';
          } else if (pessoa2PodeAdotarLoco && contagemAnimaisPessoa2 < 3) {
            contagemAnimaisPessoa2 += 1;
            destinoDoAnimal = 'pessoa 2';
          } else {
            destinoDoAnimal = 'abrigo';
          }
        } else {
          const pessoa1PodeAdotarAnimal = verificarAdocaoAnimal(brinquedosPessoa1Splitados, brinquedosDoAnimal);
          const pessoa2PodeAdotarAnimal = verificarAdocaoAnimal(brinquedosPessoa2Splitados, brinquedosDoAnimal);

          if (pessoa1PodeAdotarAnimal && pessoa2PodeAdotarAnimal) {
            destinoDoAnimal = 'abrigo';
          } else if (acharAnimal.raca == 'gato') {
            if (pessoa1PodeAdotarAnimal && contagemAnimaisPessoa1 < 3) {
              destinoDoAnimal = 'pessoa 1';
              contagemAnimaisPessoa1 += 1;
              brinquedosPessoa1Splitados = verificarBrinquedosUsados(brinquedosPessoa1Splitados, brinquedosDoAnimal);
            } else if (pessoa2PodeAdotarAnimal && contagemAnimaisPessoa2 < 3) {
              destinoDoAnimal = 'pessoa 2';
              contagemAnimaisPessoa2 += 1;
              brinquedosPessoa2Splitados = verificarBrinquedosUsados(brinquedosPessoa2Splitados, brinquedosDoAnimal);
            } else {
              destinoDoAnimal = 'abrigo';
            }
          } else if (pessoa1PodeAdotarAnimal && contagemAnimaisPessoa1 < 3) {
            destinoDoAnimal = 'pessoa 1';
            contagemAnimaisPessoa1 += 1;
          } else if (pessoa2PodeAdotarAnimal && contagemAnimaisPessoa2 < 3) {
            destinoDoAnimal = 'pessoa 2';
            contagemAnimaisPessoa2 += 1;
          } else {
            destinoDoAnimal = 'abrigo';
          }
        }

        lista.push(`${acharAnimal.nome} - ${destinoDoAnimal}`);
      });

      lista.sort();
      return { lista: lista };
    } catch (error) {
      if (error instanceof AnimalInvalido) {
        return { erro: error.message };
      } else if (error instanceof BrinquedoInvalido) {
        return { erro: error.message };
      }
    }
  }
}

export { AbrigoAnimais as AbrigoAnimais };
