//string
let friends = ["Rahim","karim", "Shoel","Akash"];
console.log(friends);

//number
let number = [1,2,3,4,5];
console.log(number);

//mixed
let mixed = ["Rahim",1,false,1.5];
console.log(mixed);

//array constructor use

let myArray =  new Array("Fahim",1, true);
console.log(myArray);

//ex-1
let frends1 = "Rahim";
let frends2 = "karim";
console.log(frends2);

//ex-2
let shohopati = ["Rahim","karim", "Shoel","Akash"];
console.log(shohopati[2]);

//ex-3 push kora mane add kora
let list = ["Rahim","karim", "Shoel","Akash"];
list.push("Fahim","Jodu")//unshift push er biporit protom e add kore
console.log(list);

//ex-4 pop dara mane remove kora
let list1 = ["Rahim","karim", "Shoel","Akash"];
list1.push("Fahim","Jodu")
list1.pop()// porp er biporit shift protom teke remove kore dibe
console.log(list1);

//ex-5 index number koto
let list2 = ["Rahim","karim", "Shoel","Akash"];
let sholeIndex=list2.indexOf("Shoel")
console.log(sholeIndex);

//ex-6 includes
let list3 = ["Rahim","karim", "Shoel","Akash"];
console.log(list3.includes("karim"));

//ex-7 sliced
let sliced=list3.slice(2,4)
console.log(sliced);

//spliced
let list4 = ["Rahim","karim", "Shoel","Akash","Modu"];
let spliced = list4.splice(2)
console.log(spliced);

//For Loop er maddome array use
let list5 = ["Rahim","karim", "Shoel","Akash","Modu"];
for (let i=0; i<5; i++){
    console.log(list5[i]);   
}

//ex-1
let list6 = ["Rahim","karim", "Shoel","Akash","Modu"];
for(let j of list6){
    console.log(j);
}

//addition nirnoy off string di e
let numArray = [20,40,25,100,22,55]
let sum = 0;
for(let number1 of numArray){
    sum = sum + number1
    console.log(sum);   
}
console.log("Sum = ", sum);

//
let numArray1 = [20,40,25,100,22,55]
numArray1[0]=30
console.log(numArray1[0]);
