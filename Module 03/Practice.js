//Practice 1
let number = 11;
if(number % 2 == 0){
    console.log("Even"); 
}else{
    console.log("Odd");   
}

//Practice-2
let firstNum =100
let secondNum =18
let thirdNum =15

if (firstNum > secondNum && firstNum > thirdNum){
    console.log("First number is largest");   
}else if(secondNum > firstNum && secondNum >thirdNum){
    console.log("Second number is largest");  
}else{
    console.log("Third Number is largest");
    
}

//Practice-3
let lightColor = 'yellow'

if(lightColor == "red"){
    console.log("stop"); 
}else if(lightColor == 'yellow'){
    console.log("Be ready");   
}else if(lightColor == 'green'){
    console.log("Please Go");   
}else{
    console.log("Not working");
    
}

//practice-4
let password ='asd1357'

if(password.length < 6){
    console.log("Your password is less then 6!");  
}else{
    console.log("Registration Successful");
    
}
