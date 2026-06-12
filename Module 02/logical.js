//And (&&)
// Or (||)
// Not !

//1st example
let isStudent = true;
let membershipCard = true;

if(isStudent == true && membershipCard == true){
    console.log("You have got 50% discount");   
} else if(isStudent == true || membershipCard == true){
    console.log("You have got 25% discount");   
}else{
    console.log("Sorry! Apnar discount neai");
    
}

//2nd
let notTesting = true;
console.log(notTesting);
