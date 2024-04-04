//* richiesta input utente
const userWord = prompt("Ciao, dimmi una parola e ti dirò se è palindroma");

//*ciclo for
let result1 = "";
for (let i = 0; i < userWord.length; i++) {
    const curLetter = userWord[i];
    result1 +=userWord[i]
}
console.log(result1);

//*ciclo for al contrario
let result2 = "";
for(let j = userWord.length -1; j >= 0; j--) {
    const curLetter2 = userWord[j];
    result2 +=userWord[j]
}
console.log(result2);

//*variabile booleana
let palindromo = false

//*condizione
if (result1 === result2) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}