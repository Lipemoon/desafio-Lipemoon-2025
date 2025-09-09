import { animaisDisponiveis, acharAnimalPeloNome } from "./models/animal.js";
import { AnimalInvalido } from "./exceptions/AnimalInvalido.js";
import { verificarAnimaisValidos, verificarBrinquedosValidos, verificarAdocaoAnimal, verificarAdocaoDoAnimalLoco } from "./utils/verificacoes.js";
import { BrinquedoInvalido } from "./exceptions/BrinquedoInvalido.js";

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

      let brinquedosPessoa1Splitados = splitString(brinquedosPessoa1);
      let brinquedosPessoa2Splitados = splitString(brinquedosPessoa2);
      let ordemAnimaisSplitados = splitString(ordemAnimais);
      
      console.log(brinquedosPessoa1Splitados);
      console.log(brinquedosPessoa2Splitados);
      console.log(ordemAnimaisSplitados);

      let contagemAnimaisPessoa1 = 0;
      let contagemAnimaisPessoa2 = 0;

      ordemAnimaisSplitados.forEach(animal => {
        const acharAnimal = acharAnimalPeloNome(animal);
        const brinquedosDoAnimal = acharAnimal.brinquedos;
        let destinoDoAnimal = '';
        if (acharAnimal.nome === 'Loco' && verificarPropriaLista(lista)) {
          console.log('entrou no loco');
          const pessoa1PodeAdotarLoco = verificarAdocaoDoAnimalLoco(brinquedosPessoa1Splitados, brinquedosDoAnimal);
          const pessoa2PodeAdotarLoco = verificarAdocaoDoAnimalLoco(brinquedosPessoa2Splitados, brinquedosDoAnimal);

          if (pessoa1PodeAdotarLoco && pessoa2PodeAdotarLoco) {
            destinoDoAnimal = 'abrigo';
          } else if (pessoa1PodeAdotarLoco && contagemAnimaisPessoa1 < 3) {
            destinoDoAnimal = 'pessoa 1';
          } else if (pessoa2PodeAdotarLoco && contagemAnimaisPessoa2 < 3) {
            destinoDoAnimal = 'pessoa 2';
          } else {
            destinoDoAnimal = 'abrigo';
          }
        } else {
          const pessoa1PodeAdotarAnimal = verificarAdocaoAnimal(brinquedosPessoa1Splitados, brinquedosDoAnimal);
        const pessoa2PodeAdotarAnimal = verificarAdocaoAnimal(brinquedosPessoa2Splitados, brinquedosDoAnimal);

        if (acharAnimal.raca === 'gato') {
          if (pessoa1PodeAdotarAnimal && pessoa2PodeAdotarAnimal) {
            destinoDoAnimal = 'abrigo';
          } else if (pessoa1PodeAdotarAnimal && contagemAnimaisPessoa1 < 3) {
            destinoDoAnimal = 'pessoa 1';
            contagemAnimaisPessoa1 += 1;
            brinquedosPessoa1Splitados = removerBrinquedosUsados(brinquedosPessoa1Splitados, brinquedosDoAnimal);
          } else if (pessoa2PodeAdotarAnimal && contagemAnimaisPessoa2 < 3) {
            destinoDoAnimal = 'pessoa 2';
            contagemAnimaisPessoa2 += 1;
            brinquedosPessoa2Splitados = removerBrinquedosUsados(brinquedosPessoa2Splitados, brinquedosDoAnimal);
        } else {
            destinoDoAnimal = 'abrigo';
        }
      } else if (pessoa1PodeAdotarAnimal && pessoa2PodeAdotarAnimal) {
          destinoDoAnimal = 'abrigo';
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
    console.log(lista);
    return { lista: lista };
    } catch (error) { 
      if (error instanceof AnimalInvalido) {
        return { erro: error.message};
      } else if (error instanceof BrinquedoInvalido) {
        return { erro: error.message};
      }
    }
  }

  
}


function splitString(string) {
    let result = string.replaceAll("'", "");
    result = result.replaceAll("\r", "");
    return result.split(",");
}

function removerBrinquedosUsados(brinquedosPessoa, brinquedosDoAnimal) { 
  for (let i = 0; i < brinquedosPessoa.length; i += 1) {
    for (let j = 0; j < brinquedosDoAnimal.length; j += 1) {
      if (brinquedosPessoa[i] === brinquedosDoAnimal[j]) {
        brinquedosPessoa.splice(i, 1);
      }
    }
  }
  const brinquedosNovosDaPessoa = brinquedosPessoa;
  return brinquedosNovosDaPessoa;
}
function verificarPropriaLista(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].includes('pessoa')) {
      console.log('retornando true porque achou a palavra pessoa em ' + lista[i])
      return true;
    }
  }
}
export { AbrigoAnimais as AbrigoAnimais };
