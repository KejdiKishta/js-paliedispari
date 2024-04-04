//* funzione numero casuale
/**
 * Description
 * @returns {number}
 */
function rndNum () {
    //* generazione numero
    const cpuNum = Math.floor(Math.random() * 5) + 1;
    return cpuNum;
}

//* funzione se pari o dispari
/**
 * Description
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean}
*/
function oddEvenSum (num1, num2) {
    //*somma
    let sum = num1 + num2
    console.log("La somma è " + sum);
    
    //*flag
    let flag = false

    if (sum % 2 === 0) {
        flag = true
    }

    console.log(flag);
    return flag;
}