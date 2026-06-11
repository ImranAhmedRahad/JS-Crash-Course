console.log(document.title);

document.getElementById("mainText").innerText="Hellooo World"

document.getElementsByClassName("text")[0].innerText='This is from JS'


//const x = document.querySelector('#mainText')
const x = document.querySelectorAll('.text')
console.log(x);

const btn =document.getElementById('btn')
btn.addEventListener('click',()=>{
    //alert("Welcomet to our class")
    prompt("Welcome to our class")
})

const changecolor =()=>{
    document.body.style.backgroundColor='yellow'
    alert('Your color has been change')
}
