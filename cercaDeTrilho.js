function trilhoEncrypt(str, rails) {
  // Checa se os parametros estão satisfeitos, caso contrario disparará um erro
  if (!str || str.length < 2) throw new Error("str is a required parameter");
  if (rails < 2 || !rails)
    throw new Error(
      "rails is a required parameter and it must be bigger than 2"
    );

  // cria uma matriz com a quantidade de trilhos (arrays), cada trilho é um array vazio
  let fence = new Array(rails).fill("").map(() => []);

  // define a posião incial como primeiro trilho [0][0] e o incremento incial de 1
  let position = 0;
  let increment = 1;

  str.split("").forEach((char) => {
    // adiciona o caractere ao trilho atual
    fence[position].push(char);

    // verifica se chegou ao último trilho, caso positivo inverte o incremento para voltar
    if (position === 0) increment = 1;
    else if (position === rails - 1) increment = -1;

    // Move a posição para o próximo trilho utilizando o incremento
    position += increment;
  });

  // concatena todos os trilhos em uma única string
  const encrypted = fence.flat().join("");
  return encrypted;
}

function trilhoDecrypt(str, rails) {
  // Checa se os parametros estão satisfeitos, caso contrario disparará um erro
  if (!str || str.length < 2) throw new Error("str is a required parameter");
  if (rails < 2 || !rails)throw new Error("rails is a required parameter and it must be bigger than 2");

  let fence = new Array(rails).fill(null).map(() => []);
  let position = 0;
  let increment = 1;

  for (let i = 0; i < str.length; i++) {
    fence[position][i] = true;
    position += increment;
    if (position === 0 || position === rails - 1) increment = -increment;
  }

  // Preenche a cerca com os caracteres criptografados
  let index = 0;
  for (let i = 0; i < rails; i++) {
    for (let j = 0; j < str.length; j++) {
      if (fence[i][j]) {
        fence[i][j] = str[index];
        index++;
      }
    }
  }

  // Itera a cerca novamente para extrair os caracteres
  let decrypted = "";
  position = 0;
  increment = 1;

  for (let i = 0; i < str.length; i++) {
    if (fence[position][i] !== null) {
      decrypted += fence[position][i];
    }
    position += increment;
    if (position === 0 || position === rails - 1) increment = -increment;
  }

  return decrypted;
}