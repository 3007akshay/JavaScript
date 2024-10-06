function addTwoNumber(num1,num2){
    // console.log(num1 + num2)
    let result = num1 + num2
    return result
}

const result = addTwoNumber(3 , 4)
//console.log("result :", result);

function loginUsermessage(username = "Axay"){
    if(!username){
        console.log("please enter username");
        return
        
    }
    return `${username} logged in`
}

// console.log(loginUsermessage("Akshay"));
//console.log(loginUsermessage());

function calCartPrice( ...num){
    return num

}
console.log(calCartPrice(11,200,500,2000));

