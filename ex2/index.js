const tellFortune = function(children, partnerName, location, job) {
  children = prompt("Introdu un number intre 0 si 20: ");
  children = parseInt(children);
  while (isNaN(children)) {
    children = prompt("Te rog sa introduci un numar intre 0 si 20: ");
  }
  partnerName = prompt("Introdu un nume de fata/baiat: ");
  while (partnerName === '' || partnerName === undefined) {
    partnerName = prompt("Te rog sa introduci un nume de fata/baiat: ");
  }
  location = prompt("Introdu un oras/locatie: ");
  while (location === '' || location === undefined) {
    location = prompt("Te rog sa introduci un oras/locatie: ");
  }
  job = prompt("Introdu un loc de munca: ");
  while (job === '' || job === undefined) {
    job = prompt("Te rog sa introduci un loc de munca: ");
  }
  console.log(`Vei fi un ${job} in ${location}, casatorit cu ${partnerName} si vei avea ${children} copii.`);
}

let children, partnerName, location, job;
const prompt = require("prompt-sync")({ sigint: true });
console.log("Welcome to the ultimate fortune teller 5000!");
tellFortune(children, partnerName, location, job);