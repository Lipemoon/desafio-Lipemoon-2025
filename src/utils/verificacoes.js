import { animaisDisponiveis } from "../models/animal.js";


function verificarAnimaisValidos(ordemAnimais) {
  const animaisLista = [];
  const ordemAnimaisTamanho = ordemAnimais.split(',');
  for (let i = 0; i < ordemAnimaisTamanho.length; i += 1) { 
    if (animaisLista.length == ordemAnimaisTamanho.length) {
      break;
    }
    for (let j = 0; j < animaisDisponiveis.length; j += 1) {
      if (ordemAnimais.includes(animaisDisponiveis[j].nome)) {
          animaisLista.push(animaisDisponiveis[j].nome);
      }
    }
  
    if (animaisLista.length < ordemAnimaisTamanho.length) { 
      return false;
    }

    for (let i = 0;i < animaisLista.length; i += 1) {
      for (let j = i + 1; j < animaisLista.length; j += 1) {
        if (animaisLista[i] === animaisLista[j]) {
          return false;
        }
      }
    }
    return true;
  }
};

function verificarBrinquedosValidos(brinquedosPessoa) {
      const brinquedosValidos = ['RATO', 'BOLA', 'LASER', 'NOVELO', 'CAIXA', 'SKATE'];
      const brinquedosLista = [];
      const brinquedosTotal = brinquedosPessoa.split(',');
      for (let i = 0; i < brinquedosTotal.length; i += 1) { 
        if (brinquedosLista.length == brinquedosTotal.length) {
          break;
        }
        for (let j = 0; j < brinquedosValidos.length; j += 1) { 
          if (brinquedosPessoa.includes(brinquedosValidos[j])) {
            brinquedosLista.push(brinquedosValidos[j]);
          }
        }
      }

      if (brinquedosLista.length < brinquedosTotal.length) {
        return false;
      }

      for (let i = 0;i < brinquedosLista.length; i += 1) {
        for (let j = i + 1; j < brinquedosLista.length; j += 1) {
          if (brinquedosLista[i] === brinquedosLista[j]) {
            return false;
          }
        }
      }
      return true;
}


export {verificarAnimaisValidos, verificarBrinquedosValidos};