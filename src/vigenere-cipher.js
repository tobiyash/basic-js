const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.type = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(...args) {
    if (args.length !== 2 || typeof args[0] !== "string" || typeof args[1] !== "string") throw new Error ("Incorrect arguments!");
    let string = args[0].toUpperCase();
    let key = args[1].toUpperCase();
    let res = "";
    while (string.length > key.length) {
      key += key;
    }
    let j = 0;
    for (let i = 0; i < string.length; i++) {
      if (this.alphabet.includes(string[i])) {
        let localAlp = this.alphabet.slice(this.alphabet.indexOf(key[j])) + this.alphabet;
        res += localAlp[this.alphabet.indexOf(string[i])];
      } else {
        res += string[i];
        j--;
      }
      j++;
    }
    return this.type ? res : res.split('').reverse().join("");  
  }
  decrypt(...args) {
    if (args.length !== 2 || typeof args[0] !== "string" || typeof args[1] !== "string") throw new Error ("Incorrect arguments!");
    let string = args[0].toUpperCase();
    let key = args[1].toUpperCase();
    let res = "";
    while (string.length > key.length) {
      key += key;
    }
    let j = 0;
    for (let i = 0; i < string.length; i++) {
      if (this.alphabet.includes(string[i])) {
        let localAlp = this.alphabet.slice(this.alphabet.indexOf(key[j])) + this.alphabet;
        res += this.alphabet[localAlp.indexOf(string[i])];
      } else {
        res += string[i];
        j--;
      }
      j++;
    }
    return this.type ? res : res.split('').reverse().join("");  
  }
}

module.exports = {
  VigenereCipheringMachine
};
