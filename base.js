
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

// 

// - 컴퓨터는 0과 9 사이의 서로 다른 숫자 3개를 무작위로 뽑습니다. (ex) 123, 759 
// - 사용자는 컴퓨터가 뽑은 숫자를 맞추기 위해 시도합니다.
// - 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.
//     - 숫자의 값과 위치가 모두 일치하면 S
//     - 숫자의 값은 일치하지만 위치가 틀렸으면 B
// - 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.
// - 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다.


rl.on('close', () => {
    process.exit();
})
