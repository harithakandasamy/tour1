// const header = document.querySelector("header");

// window.addEventListener("scroll", function(){
// 	header.classList.toggle("navbar", window.scrollY > 60)
// });

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',() => {
	navbar.classList.toggle('open');
})