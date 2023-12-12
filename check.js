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

module.exports.check = check
