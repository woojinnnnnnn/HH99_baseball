
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min
}


function getComputerNumber(){
    let numbers = []
    for (i = 0; i < 3; i++) {
        randomnum = randomNumber(1, 9)
        if (numbers.indexOf(randomnum) === -1) {
            numbers.push(randomnum)
        } else {
            i --
        }
    } 
    return numbers
}

module.exports.getComputerNumber = getComputerNumber

