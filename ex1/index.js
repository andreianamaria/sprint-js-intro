const checkNum = (n) => { return n%10 === 0; }
const display = (n) => {
  checkNum(n) ? console.log(`Felicitari, numarul ${x} este divizbil cu 10`) : console.log(`Numarul ${x} nu este divizibil cu 10`);
}
let x = 22;
display(x);