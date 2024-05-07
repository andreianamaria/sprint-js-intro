const dayOfTheWeek = function (key) {
  tempKey = parseInt(key);
  if (isNaN(tempKey)) {
    console.log(`Scuze, cheia ${key} trebuie sa fie un numar.`);
  }
  else {
    switch (key) {
      case 1:
        console.log('Luni');
        break;
      case 2:
        console.log('Marti');
        break;
      case 3:
        console.log('Miercuri');
        break;
      case 4:
        console.log('Joi');
        break;
      case 5:
        console.log('Vineri');
        break;
      case 6:
        console.log('Sambata');
        break;
      case 7:
        console.log('Duminica');
        break;
  
      default:
        console.log(`Scuze, cheia ${key} nu este recunoscuta.`);
    }
  }
}

dayOfTheWeek(2);
dayOfTheWeek(1);
dayOfTheWeek(7);
dayOfTheWeek(20);
dayOfTheWeek('test');