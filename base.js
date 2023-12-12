
const readline = require("readline");

const kibum = require("./check.js");
const woojin = require("./getComputerNumber.js");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const computer = woojin.getComputerNumber();
let count = 1;
console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');

process.stdout.write('1번째 시도 : ');
rl.on('line', (line) => {
    user_input = line;
    console.log(user_input);

    result = kibum.check(computer, user_input);

    console.log(result);
    if(result === "3S"){
        console.log(`${count}번만에 맞히셨습니다.`);
        console.log("게임을 종료합니다.");
        rl.close();
    }

    process.stdout.write(`${++count}번째 시도 : `);

});


rl.on('close', () => {
    process.exit();
})
