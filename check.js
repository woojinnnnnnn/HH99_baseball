
let computer = [2,4,5];
let user = "345";

function check (computer, user){
    arr = user.split("").map(n => +n) 

    let s = 0;
    let b = 0;
    
    arr.forEach((element, i) => {
        if(arr[i] === computer[i]) {
            s++ 
        }else if(arr.includes(computer[i])){
            b++
        }
    });
    
    if(b===3){return "3B"}
    if(s===3){return "3S"}
    

    return `${b}B${s}S`;
}

console.log(check([3,4,5],"345"));



module.exports.check = check
