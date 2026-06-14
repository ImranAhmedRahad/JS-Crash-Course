//console.log("Hello from js");

//console.log(document.body.childern[0].textContent);



//const title = document.getElementById('title');
//console.log(title.innerText);

//title.innerText = "New Text"

//const title2 = document.querySelector('#title');
//console.log(title2.innerText);
//title2.innerText = "new text 2"


//const para = document.querySelectorAll(".para")
//para.forEach(p => {
    //console.log(p.innerText);

//})
//console.log(para);

//const para2 = document.getElementsByClassName('para')
//console.log(para2);

//para2.forEach(p => {
    //console.log(p.innerText);

//})

//for single element (getElementById, querySelector());
//for get multiple elements (getElementsByClassName, querySelectorAll())

let text = document.getElementById('title2');
console.log(text);
text.innerText = 'Ami eta change korlam'

let contentContainer = document.getElementById("content")
console.log(contentContainer);

contentContainer.innerHTML = "<Button>Click Me</Button>"

contentContainer.innerHTML = "<p>Hello</p>"


//
const box = document.getElementById("box")

box.style.color = 'red'
box.style.padding = '24px'
box.style.border = '2px solid black'
box.style.margin = '10px'

function changeStyle(){
    box.classList.add('highlight')
}


function removeStyle(){
    box.classList.remove("highlight")
}

function toggleStyle(){
    box.classList.toggle("hidden")

}


//Attribute
let myImage = document.getElementById('Img');
console.log(myImage.getAttribute('src'));

myImage.setAttribute('src', 'old.jpg')

let myGo = document.getElementById("go");
myGo.setAttribute('href','https://youtube.com')






