export function encipher(inputText, cipherKey) {
  let key = cipherKey;
  let cipherText = "";
  let regex = /[a-z]/;
  for (let i = 0; i < inputText.length; i++) {
    if (regex.test(inputText.charAt(i))) {
      cipherText += String.fromCharCode((inputText.charCodeAt(i) - 97 + key) % 26 + 97);
    } else cipherText += inputText.charAt(i);
  }
  return cipherText;
}

export function decipher(encipheredText, cipherKey) {
  let decipheredText = "";
  let key = cipherKey;
  let regex = /[a-z]/;
  for ( let i = 0; i < encipheredText.length; i++) {
    if(regex.test(encipheredText.charAt(i))) {
      decipheredText += String.fromCharCode((encipheredText.charCodeAt(i) - 97 + 26 - key) %26 + 97)
    }
  }
  return decipheredText;
}