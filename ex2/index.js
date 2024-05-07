const tellFortune = function(children, partnerName, location, job) {
  console.log(`Vei fi un ${job} in ${location}, casatorit cu ${partnerName} si vei avea ${children} copii.`);
}

const readNumber = function () {
  let number = prompt("Introdu un number intre 0 si 20: ");
  number = parseInt(number);
  while (isNaN(number)) {
    number = prompt("Te rog sa introduci un numar intre 0 si 20: ");
  }
  return number;
}

const readString = function (promptText) {
  let string = prompt(promptText);
  while (string === '' || string === undefined) {
    string = prompt(`Te rog sa ${promptText}`);
  }
  return string;
}

const prompt = require("prompt-sync")({ sigint: true });

console.log("Welcome to the ultimate fortune teller 5000!");

const children = readNumber();
const partnerName = readString("introdu un nume de fata/baiat: ");
const location = readString("introdu un oras/locatie: ");
const job = readString("introdu un loc de munca: ");

tellFortune(children, partnerName, location, job);