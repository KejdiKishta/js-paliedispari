/**
 * Description
 * @param {string} userWord
 * @returns {boolean}
 */
function palCtrl (userWord) {
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