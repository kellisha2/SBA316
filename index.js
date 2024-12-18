
const title = document.getElementById("header");

title.innerHTML = "<h1>Symbol of Freedom: Haiti's Soup Joumou</h1>";


const body = document.body

const newDiv = document.createElement('div');
const img = document.getElementById('img')
const newElement = document.getElementById('newElement');
const button = document.getElementById("darkmode");

button.addEventListener("click", () => {
    if(body.classList.contains("light-mode")) {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
    } else {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
    }
})

newDiv.id = "history";
console.log(newDiv)
newDiv.innerHTML = "<h2>The History of Soup Joumou</h2><p>Every New Year’s Day, Haitians around the world consume soup joumou as a way to commemorate Haitian Independence Day. On January 1, 1804, Haitians declared independence from French colonial rule following the Haitian Revolution that began in 1791.</p>"

newElement.appendChild(newDiv)



// add style

const divStyle = document.getElementById('header')
divStyle.style.fontStyle = "italic";

// add events 
// button event listener 

const btn = document.querySelector("#more-recipes")
console.log(btn)

btn.addEventListener("click", function() {
    alert("You are about to leave this page. Press Back to stay on this page.")
})

// img onmouseover onmouseout event
// const mouseover = document.getAttribute("onmouseover")
function newImage(){
    document.getElementById("img").src = "/images/haitian-independence.webp"
}

function oldImage() {
    document.getElementById("img").src = "/images/Haitian-Soup-Joumou.jpg"
}


// iteration

const divs = document.querySelectorAll('div')
console.log(divs)

divs.forEach(function(div){
    div.style.color = '#272e29';
    // div.style.backgroundColor = 'red'
    // div.style.display = 'flex' ;
    // div.style.alignItems = 'center'
    // div.style.alignContent = 'space-around'
    
})


// parent, child, sibling 

let parentElement = document.getElementById('steps')
console.log(parentElement)

let firstChild = parentElement.firstChild;
console.log('First child:', firstChild);

let lastChild = parentElement.lastChild;
console.log('Last child:', lastChild);

let sibling = firstChild.nextSibling
console.log('Child Sibling:', sibling)

let parentNode = firstChild.nextSibling.parentNode
console.log('Parent Node:', parentNode)



// form validation

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    console.log("e=", e)
    e.preventDefault()
    const email = document.getElementById('email').value
    // const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const patt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

   if(patt.test(email)){
    confirm('Do you want to confirm data submission?');
   } else {
     alert('Invalid email address')
   }
})