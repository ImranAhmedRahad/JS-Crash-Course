let name1 = "Rahim Miah"
let name2 ='Karim Miah'
let name3 =`Modu Khan`

console.log(name1, name2,name3);


//
let word = "Hello";
console.log(word[3]);

//
let word1 = " Hello World";
console.log(word1);
let trimmedWord1 = word1.trim();
console.log(trimmedWord1);

//Upercase & Lowercase

let gmail = "Imranahmedrahad10@gmail.com"
let lowerGmail = gmail.toLowerCase();

console.log(gmail);
console.log(lowerGmail);

//Includes
 let str = "I love JavaScript";
console.log(str.includes("love"));
console.log(str.indexOf("love"));//indexof

let sliced = str. slice(2)//sliced
console.log(sliced);

let friends ="Rahim Karim Shoel Akash"
console.log(friends);

let splitFriends = friends.split(' ')//split
console.log(splitFriends);

let joinFriends = splitFriends.join(',')
console.log(joinFriends);

//concatination

let num1 = "2";
let num2 = 2;
console.log( num1 + num2);

//
let firstName = "Karim"
let lastNmae = "Khan"

let fullName = `${firstName} ${lastNmae}`
console.log(fullName);

let reverseName = fullName.split('').reverse().join('')
console.log(reverseName);

//Practice-1
let userEmail = "imranahmedrahad10@gmail.com"

let userEmailLower = userEmail.toLowerCase();

if(userEmailLower.includes("@") && userEmailLower.includes('.')){
    console.log("Valid Email");
    
}else{
    console.log("invalid email");
    
}

//Practice -2
 let cart = [];
 console.log(cart);

 cart.push("Mouse")
 console.log(cart);

 cart.push("keyboard")
 console.log(cart);

 cart.pop();
 console.log(cart);
 

 //Practice-3

 let mySentence ="JavaScript is awesome. I love to code in JavaScript";

 let word3 = mySentence.split(' ')


 let chars = mySentence.split('')
 
 let count = 0;
 for(let w of word3){
    if(w == 'JavaScript'){
        count++
    }
}
console.log(`Total word = ${word3.length}, Total characters = ${chars.length},JavaScript appears = ${count}`);
    
 

 
 
 






