
// Tipuri de date:
// Date primitive
// 1. Nedefinit (undefined): undefined
// 2. Nula (object): null
// 3. Boolean (boolean): true / false
// 4. Numere (number): 123
//      negative
//      reale 123.5
//      stiintifice: 1.3e+4 => 13000
//      stiintifice: 1.2e-3 => 0.0012
//      BigInt (bigint) -> se creeaza sub forma BigInt()
//      Infinity, -Infinity
//      NaN (not a number)
// 5. String (string): "", "1", "ab", "ana are mere", "string cu \nrand nou"
// 6. Obiect (object): {}, {"cheie": "valoare"}
// 7. Liste (object) [], [123, "ana", true]
// Date obiectuale *
// 8. obiecte instantiabile (obiect): Date, orice tip costumizabil, BigInt
// 9. functie

// Tipul unei valori se afla cu comanda de typeof

// Variabile:
//  1. const => nu se modifica
//  2. let => pot sa se modifice
//  3. var => deprecated => depreciat, nu se mai foloseste. 

// Operatori aritmetici => rezultatul este un numar
//  * (inmultire)
//  / (impartire)
//  + (adunare)
//  - (scadere)
//  % (modulo, restul la impartire)
//  Operatorii binare
//      &, |, ^, <<, >>



// Operatii logice (boolene) => da rezultat un tip boolean (true / false)
//  >, <, >=, <=,
//  == (se verifica doar valoarea, se ignora tipul)
//  === (se verifica si valoarea, dar si tipul)

//  && (and) si
//  || (or) sau
//  ! (not) negare
// != (xor) diferit

// && (true doar cand ambele sunt adevarate)
// true && true => true
// true && false => false
// false && true => false
// false && false => false

// || (true cand cel putin una este adevarata)
// true || true => true
// true || false => true
// false || true => true
// false || false => false

// !
// ! true => false
// ! false => true

// != (diferit)
// true != true => false
// true != false => true
// false != true => true
// false != false => false


// const alfa = true;
// const beta = true;
// console.log(true !== true);



// Sintaxa If:
// if (conditie booleana) {
//     // instructiune 1
//     // instructiune 2
// } else {
//     // instructiune 3 (cand conditie este false)
//     // instructiune 4 (cand conditia este falsa)
// }

const numar = 15;

// console.log(numar);
// asa se concatineaza un string cu un alt string, sau cu valorea unei variabile
console.log("Numarul " + numar);
// Se mai poate concatina si cu sir templetizat
console.log(`Numarul ${numar}`);

// Operatie modulo (%) rezulta restul impartirii
// Adica 15 % 2 = restul impartirii 15 la 2, unde "catul" este 7, iar restul este 1
// if (alfa % 2 === 0) {
//     console.log("numarul " + alfa + " este par");
//     console.log("aici pot fi alte instructiuni cand alfa este par");
// } else {
//     console.log("numarul " + alfa + " este impar");
// }

// Operatie de concatinare in string se face cu semnul +


// Functie:

// function (parametri, de la zero, pana la oricat despartiti prin virgula) {
//     // instructiune 1
//     // instructiune 2...
//      (optional) return valoare;
// }


// function welcome(nume) {
//     console.log("Bine ai venit, " + nume);
// }
// welcome("Marcel");


// function suma(numar1, numar2) {
//     return numar1 + numar2;
// }

// const numar3 = suma(7, 3); // este echivalenta cu numar3 = 7 + 3;
// console.log(numar3);


// O variabila poate avea drept valoare o functie intreaga: (functie lambda)
const abs = (num) => {
    if (num > 0) {
        return num;
    }
    if (num < 0) {
        return -num;
    }
    return 0;
};

// functie tipica
function abs_alt_exemplu(num) {
    if (num > 0) {
        return num;
    }
    if (num < 0) {
        return -num;
    }
    return 0;
};

console.log(abs(-6));
// console.log(Math.abs(-6));


// operator ternar
// const alfa = condition ? expresie1 : expresie2;
const alfa = -6;

const beta = (alfa > 0) ? alfa : -alfa;

console.log(beta);