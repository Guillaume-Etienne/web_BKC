// Buger menu    /  Automatised Language Selector

// burger :

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
// var openBtn = document.getElementsByClassName("burger-icon")
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

// language automatised selector

// Identifie and store selected language
const langSelector = document.getElementById('lang');
langSelector.addEventListener('click', function(event){
  // event.preventDefault()
  console.log('ça a cliqué ! la : '+ event.target)  
  var resultLang=event.target.toString() 

  if (resultLang.includes("es")){
    console.log('estas espanol hombre !')
    localStorage.setItem("lang","es")
  }
  else if (resultLang.includes("en")){
    console.log('You speak english !')
    localStorage.setItem("lang","en")
  }
  else{
    console.log('Fromage mon pote !')
    localStorage.setItem("lang","fr")
  }
});

// detect and apply.
switch(localStorage.getItem("lang")){
  case 'en':
    console.log("on a coché EN son !")
    break
  case 'es':
    console.log("on a coché ES hijo !")
    break
  case 'fr':
    console.log("on a coché FR fils !")
    break
}