// hier komt je code
//console.log("Hallo wereld!");


//hamburgermenu
let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
function toonMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
}
menuKnop.addEventListener("click",toonMenu);

let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	}
}
mainGedeelte.addEventListener("click",verbergMenu);

//darkmode
let darkLink = document.querySelectorAll("div a")[1];
let lightLink = document.querySelectorAll("div a")[2];
let mijnCSS = document.querySelector("#switchcss");

function switchToLight() {
	mijnCSS.setAttribute("href","stijl-light.css");
}
function switchToDark() {
	mijnCSS.setAttribute("href","stijl-dark.css");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);

//intro
let mijnKnoppen = document.querySelectorAll(".knopPaneel1");
let i = 0;
let scrollAantal = 0;
while (i < mijnKnoppen.length) {
      mijnKnoppen[i].addEventListener("click", function(event) {
         window.scroll({
            top: (window.innerHeight*this.getAttribute("data-factor")),
            left: 0,
            behavior: 'smooth'
         });
         event.preventDefault();
}, false);
      i++;
}
