//* richiesta input utente
const userWord = prompt("Ciao, dimmi una parola e ti dirò se è palindroma");

const control = palCtrl (userWord);

if (control === true) {
    console.log("la parola è palindroma");
} else {
    console.log("la parola NON è palindroma");
}