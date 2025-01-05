const ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function dynamicCipher(offset) {

  return function (string) {
    let newString = [];
    for (let i = 0; i < string.length; i++){
      if (ALPHABET.indexOf(string[i]) + offset > 25){
        newString.push(ALPHABET[ALPHABET.indexOf(string[i]) + offset - 26]);
      } else if (ALPHABET.indexOf(string[i]) + offset < 0){
        newString.push(ALPHABET[ALPHABET.indexOf(string[i])+ offset + 26]);
      }
      newString.push(ALPHABET[ALPHABET.indexOf(string[i]) + offset])
      //console.log(ALPHABET.indexOf(string[i]) + offset)
    }
    return newString.join("")
  }
}
let word2 = "egg";
rotateLeftTwo = dynamicCipher(-2);
rotateLeftTwo(word2);
console.log(rotateLeftTwo(word2)); // "cee"