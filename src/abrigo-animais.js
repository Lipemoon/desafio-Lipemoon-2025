import { animaisDisponiveis } from "./models/animal.js";
import { AnimalInvalido } from "./exceptions/AnimalInvalido.js";
import { verificarAnimaisValidos, verificarBrinquedosValidos } from "./utils/verificacoes.js";
import { BrinquedoInvalido } from "./exceptions/BrinquedoInvalido.js";

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    try {
      const lista = [];     
      
      if (verificarAnimaisValidos(ordemAnimais)) {
        console.log('Animais válidos');
      } else {
        throw new AnimalInvalido('Animal inválido');
      }
     
      if (verificarBrinquedosValidos(brinquedosPessoa1) && verificarBrinquedosValidos(brinquedosPessoa2)) {
        console.log('Brinquedos válidos');
      } else {
        throw new BrinquedoInvalido('Brinquedo inválido');
      }

      let brinquedosPessoa1Splitados = brinquedosPessoa1.replaceAll("'", "");
      brinquedosPessoa1Splitados = brinquedosPessoa1Splitados.split(",");
      console.log(brinquedosPessoa1Splitados);

      let brinquedosPessoa2Splitados = brinquedosPessoa2.replaceAll("'", "");
      brinquedosPessoa2Splitados = brinquedosPessoa2Splitados.split(",");
      console.log(brinquedosPessoa2Splitados);

      let ordemAnimaisSplitados = ordemAnimais.replaceAll("'", "");
      ordemAnimaisSplitados = ordemAnimaisSplitados.split(",");
      console.log(ordemAnimaisSplitados);

      for (let i = 0; i < ordemAnimaisSplitados.length; i += 1) {
        if (ordemAnimaisSplitados[i] == animaisDisponiveis[0].nome) {
          if (brinquedosPessoa1.match(/RATO.*BOLA/) && brinquedosPessoa2.match(/RATO.*BOLA/)) {
            lista.push(`${animaisDisponiveis[0].nome} - abrigo`);
          } else if (brinquedosPessoa1.match(/RATO.*BOLA/)) {
            lista.push(`${animaisDisponiveis[0].nome} - pessoa 1`);
            console.log('entrou Rex 1');  
          } else if (brinquedosPessoa2.match(/RATO.*BOLA/)) {
            lista.push(`${animaisDisponiveis[0].nome} - pessoa 2`);
            console.log('entrou Rex 2');  
          } else {
            lista.push(`${animaisDisponiveis[0].nome} - abrigo`);
          }
        }

        if (ordemAnimaisSplitados[i] == animaisDisponiveis[1].nome) {
          if (brinquedosPessoa1.match(/BOLA.*LASER/) && brinquedosPessoa2.match(/BOLA.*LASER/)) {
            lista.push(`${animaisDisponiveis[1].nome} - abrigo`);
          } else if (brinquedosPessoa1.match(/BOLA.*LASER/)) {
            brinquedosPessoa1Splitados.pop('BOLA');
            brinquedosPessoa1Splitados.pop('LASER');
            brinquedosPessoa1 = brinquedosPessoa1Splitados.toString();
            lista.push(`${animaisDisponiveis[1].nome} - pessoa 1`);
          } else if (brinquedosPessoa2.match(/BOLA.*LASER/)) {
            brinquedosPessoa2Splitados.pop('BOLA');
            brinquedosPessoa2Splitados.pop('LASER');
            brinquedosPessoa2 = brinquedosPessoa2Splitados.toString();
            lista.push(`${animaisDisponiveis[1].nome} - pessoa 2`);
          } else {
            lista.push(`${animaisDisponiveis[1].nome} - abrigo`);
          }
        }

        if (ordemAnimaisSplitados[i] == animaisDisponiveis[2].nome) {
          if (brinquedosPessoa1.match(/BOLA.*RATO.*LASER/) && brinquedosPessoa2.match(/BOLA.*RATO.*LASER/)) {
            lista.push(`${animaisDisponiveis[2].nome} - abrigo`);
          }
          if (brinquedosPessoa1.match(/BOLA.*RATO.*LASER/)) {
            brinquedosPessoa1Splitados.pop('BOLA');
            brinquedosPessoa1Splitados.pop('RATO');
            brinquedosPessoa1Splitados.pop('LASER');
            brinquedosPessoa1 = brinquedosPessoa1Splitados.toString();
            lista.push(`${animaisDisponiveis[2].nome} - pessoa 1`);
          } else if (brinquedosPessoa2.match(/BOLA.*RATO.*LASER/)) {
            brinquedosPessoa2Splitados.pop('BOLA');
            brinquedosPessoa2Splitados.pop('RATO');
            brinquedosPessoa2Splitados.pop('LASER');
            brinquedosPessoa2 = brinquedosPessoa2Splitados.toString();
            lista.push(`${animaisDisponiveis[2].nome} - pessoa 2`);
          } else {
            lista.push(`${animaisDisponiveis[2].nome} - abrigo`);
          }
        }
        
        if (ordemAnimaisSplitados[i] == animaisDisponiveis[3].nome) {
          if (brinquedosPessoa1.match(/RATO.*BOLA/) && brinquedosPessoa2.match(/RATO.*BOLA/)) {
            lista.push(`${animaisDisponiveis[3].nome} - abrigo`);
          } else if (brinquedosPessoa1.match(/RATO.*BOLA/)) {
            brinquedosPessoa1Splitados.pop('RATO');
            brinquedosPessoa1Splitados.pop('BOLA');
            brinquedosPessoa1 = brinquedosPessoa1Splitados.toString();
            lista.push(`${animaisDisponiveis[3].nome} - pessoa 1`);
          } else if (brinquedosPessoa2.match(/RATO.*BOLA/)) {
            brinquedosPessoa2Splitados.pop('RATO');
            brinquedosPessoa2Splitados.pop('BOLA');
            brinquedosPessoa2 = brinquedosPessoa2Splitados.toString();
            lista.push(`${animaisDisponiveis[3].nome} - pessoa 2`);
          } else {
            lista.push(`${animaisDisponiveis[3].nome} - abrigo`);
          }
        }

        if (ordemAnimaisSplitados[i] == animaisDisponiveis[4].nome) {
          if (brinquedosPessoa1.match(/CAIXA.*NOVELO/) && brinquedosPessoa2.match(/CAIXA.*NOVELO/)) {
            lista.push(`${animaisDisponiveis[4].nome} - abrigo`);
          } else if (brinquedosPessoa1.match(/CAIXA.*NOVELO/)) {
            lista.push(`${animaisDisponiveis[4].nome} - pessoa 1`);
          } else if (brinquedosPessoa2.match(/CAIXA.*NOVELO/)) {
            lista.push(`${animaisDisponiveis[4].nome} - pessoa 2`);
          } else {
            lista.push(`${animaisDisponiveis[4].nome} - abrigo`);
          }
        }

        if (ordemAnimaisSplitados[i] == animaisDisponiveis[5].nome) {
          if (brinquedosPessoa1.match(/LASER.*RATO.*BOLA/) && brinquedosPessoa2.match(/LASER.*RATO.*BOLA/)) {
            lista.push(`${animaisDisponiveis[5].nome} - abrigo`);
          }
          if (brinquedosPessoa1.match(/LASER.*RATO.*BOLA/)) {
            lista.push(`${animaisDisponiveis[5].nome} - pessoa 1`);
          } else if (brinquedosPessoa2.match(/LASER.*RATO.*BOLA/)) { 
            lista.push(`${animaisDisponiveis[5].nome} - pessoa 2`);
          } else {
            lista.push(`${animaisDisponiveis[5].nome} - abrigo`);
          }
        }

        if (ordemAnimaisSplitados[i] == animaisDisponiveis[6].nome) {
          if (lista.includes('pessoa 1') || lista.includes('pessoa 2')) {
             if (brinquedosPessoa1.includes(animaisDisponiveis[6].brinquedos) && brinquedosPessoa2.includes(animaisDisponiveis[6].brinquedos)) {
                lista.push(`${animaisDisponiveis[6].nome} - abrigo`);
            }
            if (brinquedosPessoa1.includes(animaisDisponiveis[6].brinquedos)) {
              lista.push(`${animaisDisponiveis[6].nome} - pessoa 1`);
            } else if (brinquedosPessoa2.includes(animaisDisponiveis[6].brinquedos)) {
              lista.push(`${animaisDisponiveis[6].nome} - pessoa 2`);
            } else {
              lista.push(`${animaisDisponiveis[6].nome} - abrigo`);
            }
          }
          if (brinquedosPessoa1.match(/SKATE.*RATO/) && brinquedosPessoa2.match(/SKATE.*RATO/)) {
            lista.push(`${animaisDisponiveis[6].nome} - abrigo`);
          }
          if (brinquedosPessoa1.match(/SKATE.*RATO/)) {
            lista.push(`${animaisDisponiveis[6].nome} - pessoa 1`);
          } else if (brinquedosPessoa2.match(/SKATE.*RATO/)) {
            lista.push(`${animaisDisponiveis[6].nome} - pessoa 2`);
          } else {
            lista.push(`${animaisDisponiveis[6].nome} - abrigo`);
          }
        }
        
        lista.forEach(item => {
          let contagemAnimaisPessoa1 = 0;
          let contagemAnimaisPessoa2 = 0;
          if (item.includes('pessoa 1')) {
            contagemAnimaisPessoa1 += 1;
          }
          if (item.includes('pessoa 2')) {
            contagemAnimaisPessoa2 += 1;
          }

          if (contagemAnimaisPessoa1 > 3 || contagemAnimaisPessoa2 > 3) {
            lista.pop(item);
          }
        });




      }

    lista.sort();
    console.log('Pessoa 1:', brinquedosPessoa1);
    console.log('Pessoa 2:', brinquedosPessoa2);
    console.log('Ordem dos animais:', ordemAnimais);
    console.log(lista);
    return { lista };
    } catch (error) { 
      if (error instanceof AnimalInvalido) {
        return { erro: error.message};
      } else if (error instanceof BrinquedoInvalido) {
        return { erro: error.message};
      }
    }
  }
}


export { AbrigoAnimais as AbrigoAnimais };
