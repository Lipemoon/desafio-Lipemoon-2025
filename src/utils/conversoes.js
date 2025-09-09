function converterStringParaLista(string) {
  let result = string.replaceAll("'", "");
  result = result.replaceAll("\r", "");
  return result.split(",");
}

export {converterStringParaLista};