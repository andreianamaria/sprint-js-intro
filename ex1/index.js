const checkNum = function (n) {
  if (n % 10 === 0) {
    return true;
  }
  else {
    return false;
  }
}
let x = 22;
if (checkNum(x)) {
  console.log(`Felicitari, numarul ${x} este divizbil cu 10`);
}
else {
  console.log(`Numarul ${x} nu este divizibil cu 10`);
}