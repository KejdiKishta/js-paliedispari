/**
 * Description
 * @param {string} userWord
 * @returns {boolean}
 */
function palCtrl (userWord) {
    //*porto l'input nella funzione
    let result1 = userWord;

    //*ciclo for al contrario
    let result2 = "";
    for(let j = userWord.length -1; j >= 0; j--) {
        const curLetter2 = userWord[j];
        result2 +=userWord[j]
    }
    console.log(result2);

    //*variabile booleana
    let palindromo;

    //*condizione
    if (result1 === result2) {
        palindromo = true
    } else {
        palindromo = false
    }
    console.log(palindromo);
    return palindromo;
}