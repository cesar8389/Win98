const alphabet = "abcdefghijklmnopqrstuvwxyz";

function cesarEncrypt(str, key) {
  // caso alguns dos parametros não seja satisfeito o sistema retornará um erro
  if (!str) throw new error("str is a required parameter");
  if (!key) throw new error("key is a required parameter");
  let encripted = ""; // string criptoografada

  str.split("").forEach((char) => {
    if (char != " ") {
      // Calcula o novo índice para a letra no alfabeto baseado na chave de criptografia
      let newIndex = (alphabet.indexOf(char.toLowerCase()) + key) % 26;
      // Adiciona a nova letra na string
      encripted += alphabet[newIndex];
    } else encripted += " "; // adiciona um espaço caso na string original também seja
  });
  // retorna a string criptografada
  return encripted;
}

function cesarDecrypt(str, key) {
  // caso alguns dos parametros não seja satisfeito o sistema retornará um erro
  if (!str) throw new error("str is a required parameter");
  if (!key) throw new error("key is a required parameter");
  let decrypted = ""; // string descriptografada

  str.split("").forEach((char) => {
    if (char != " ") {
      // Calcula o novo índice baseado na chave de criptografia, agora retornando
      let newIndex = (alphabet.indexOf(char.toLowerCase()) - key + 26) % 26;
      // Adiciona a nova letra na string
      decrypted += alphabet[newIndex];
    } else decrypted += " "; // adiciona um espaço caso na string também seja, visto que mantemos isso da string original no processo de encrypt
  });
  return decrypted;
}
