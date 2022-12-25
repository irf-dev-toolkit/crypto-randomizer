# crypto-randomizer

A npm package that generates random strings using the `crypto` function.

## Installation

To install `crypto-randomizer`, run the following command:

```
npm install crypto-randomizer
```

## Usage

To generate a random string, import the `generateRandom` function from `crypto-randomizer` and call it with the desired length and type as arguments.

```
import { generateRandom } from 'crypto-randomizer';

const randomString = generateRandom(8, 'alphabet');
console.log(randomString); // Output: "fghijklm"
```

### Arguments

- `length` (optional, default=16): The length of the generated string.
- `type` (optional, default='number'): The type of characters to include in the generated string. Possible values are 'number', 'alphabet', 'alphaNumeric', and 'anything'.

### Returns

A string of the requested length and type.

## Security

`crypto-randomizer` uses the `crypto` function to generate random strings, which is a secure method for generating random values. The package has been tested using [SonarQube](https://www.sonarqube.org/) and does not have any known vulnerabilities.

## License

`crypto-randomizer` is released under the [MIT License](LICENSE).

