const generateRandom = (length = 16, type = 'number') => {
  try {
    let secret = '';
    let regex;
    if (type === 'alphabet') {    // Regex for alphabets
      regex = /^[A-Za-z]+$/;
    } else if (type === 'alphaNumeric') {   // Regex for alphabets and numbers
      regex = /^[a-zA-Z0-9]+$/i;
    } else if (type === 'anything') {   // Regex for alphabets, numbers, special characters
      regex = /^[ A-Za-z0-9_@./#&+-]*$/;
    } else {    // Regex for numbers
      regex = /^\d+$/;
    }
    while (secret.length < length) {
      let randomSeed = window.crypto.getRandomValues(new Uint8Array(256));
      for (let ii = 0; ii < randomSeed.length; ii++) {
        const char = String.fromCharCode(randomSeed[ii]);
        // Append the character to secret if it is valid
        if (char.match(regex)) {
          secret += char;
          if (secret.length === length) {
            break;
          }
        }
      }
    }
    return (type === 'number') ? parseInt(secret) : secret;
  } catch (genRandomErr) {
    console.log(genRandomErr);
    return new Date().getTime();
  }
};

module.exports = generateRandom;