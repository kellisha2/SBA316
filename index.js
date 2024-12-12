// import "./styles.css";

const title = document.getElementById("header");

title.innerHTML = "<h1>Symbol of Freedom: Haiti's Soup Joumou</h1>";


const body = document.body

const newDiv = document.createElement('div');

newDiv.id = "history";
// newDiv.classList.add("history");
console.log(newDiv)
newDiv.innerHTML = "<h2>The History of Soup Joumou</h2><p>Every New Year’s Day, Haitians around the world consume soup joumou as a way to commemorate Haitian Independence Day. On January 1, 1804, Haitians declared independence from French colonial rule following the Haitian Revolution that began in 1791.</p>"

body.appendChild(newDiv)


// const ingredientList = document.getElementById("ingredients");

// add style

// const divStyle = document.querySelectorAll('div')
// divStyle.style.color = "green";
// divStyle.style.border = '2px solid black';



// const navbar = document.getElementById('nav');

// // Add a click event listener to the navbar
// nav.addEventListener('click', function(event) {
//   // Check if the click happened on an anchor tag (link)
//   if (event.target.tagName === 'A') {
//     console.log('Navbar link clicked:', event.target.href);
//     // You can add additional logic here (e.g., handle navigation, toggle menu, etc.)
//   }
// });



// button event listener 

const btn = document.querySelector("#more-recipes")
console.log(btn)