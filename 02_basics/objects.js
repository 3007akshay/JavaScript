
const mySym = Symbol("Key1")


const JsUser = {
    "name": "Akshay",
    age: 22,
    [mySym]: "myKey1",
    location: "Mathura",
    email: "ak@123.com",
    isLoggedIn: false,
    lastLoginedIn: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["name"]);// we dont write normal like dot 
// console.log(JsUser[mySym]);



// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser) ;



const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const course = {
    course: "javascript",
    price: 99,
    courseInstructor : "Akshay"
}

 const {courseInstructor : Instructor} = course // in this we are doing de-structuring 

 console.log(Instructor);

 