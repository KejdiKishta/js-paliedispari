//* richiesta pari o dispari all'utente
const oddEven = prompt("Ciao, pari o dispari?");

//* condizione
if (oddEven !== "dispari" && oddEven !== "pari") {
    console.warn("riprova");
} else {
    console.log("L'utente ha scelto " + oddEven);

    //* richiesta numero all'utente
    const userNum = parseInt(prompt("Ora dimmi un numero da 1 a 5"));

    //* condizione
    if (isNaN(userNum) || userNum < 1 || userNum > 5) {
        console.warn("riprova");
    } else {
        console.log("L'utente ha " + userNum);

        const computerNum = rndNum();
        console.log("Il computer ha " + computerNum);

        const result = oddEvenSum(userNum, computerNum);

        //* output
        if (result === true && oddEven === "pari") {
            console.log("user vince");
        } else if (result === false && oddEven === "dispari") {
            console.log("user vince");
        } else {
            console.log("computer vince");
        }
    }

}