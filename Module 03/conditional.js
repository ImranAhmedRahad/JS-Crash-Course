//1st
let age = 18;
if(age < 18){
    console.log("Under Age");
}else{
    console.log("Adult"); 
}

//2nd
let temperature = 35;
if (temperature > 30){
    console.log("Kub gorom ac on koro");    
}else{
    console.log("dorkar nai");   
}

//3rd
const score = 65;

if (score >= 80){
    console.log("A+");  
}else if(score >= 70){
    console.log("A");   
}else if(score >= 60){
    console.log("A-");   
}else if(score >= 50){
    console.log("B");   
}else if(score >= 40){
    console.log("C");   
}else if(score >= 33){
    console.log("D");   
}else{
    console.log("Tumi Fail");   
}

//4th nested if else
let isLogedIn = true;
let balance =600;
let withdraw= 700;

if(isLogedIn == true){
    if(withdraw <= balance){
        console.log("You can cash out your money");
    }else{
        console.log("Not enough money");   
    }      
}else{
    console.log("You are not login");
    
}