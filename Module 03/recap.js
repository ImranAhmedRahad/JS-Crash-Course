//1st
let dbPassword = "cyber71";
let userPassword ="cyber72";

if(dbPassword === userPassword){
    console.log("Login Successful");   
}else{
    console.log("Incorrect Password");   
}

//2nd
let allowedWeight = 500;
let currentWeight = 400;

if(currentWeight <= allowedWeight){
    console.log("Lift is going up");
}else{
    console.log("Warning!!!! Overloaded");
    
}

//3rd
let num = 24;
if(num % 2 == 0){
    console.log("Number is even");
}else{
    console.log("Number is odd");  
}

//4th Increment-Decrement

let x = 0;
x++;
x= x+2;//3
x--;//2

console.log(x);
