const user ={
    username: "Akshay",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome `);
        

    }
} 

// user.welcomeMessage()

//++++++++++++++++++ Arrow Function +++++++++++++++++++
//  () => {} this is the basic syntex of defining the arrow function

const chai = () => {
    username = "Axay",
    console.log(this);
    
}

// chai()

const addTwo = (n1 , n2) => {
    return n1 + n2
}

 console.log(addTwo(3,4));
 