let menu = document.querySelector('.nav');
let services = document.querySelector('#services');
let calc = document.querySelector('#calc');
let works = document.querySelector('#works');
let about = document.querySelector('#about');

const servicesHeight = services.offsetTop;
const calcHeight = calc.offsetTop;
const worksHeight = works.offsetTop;
const aboutHeight = about.offsetTop;


let targetsHeight = [servicesHeight, calcHeight, worksHeight, aboutHeight];
let targets = [services, calc, works, about];


menu.addEventListener('click', function(e){
  let link = e.target;

  if(link.classList.contains('nav-link')){
    e.preventDefault();
    scrollToTarget(link.hash);
  }
})

function scrollToTarget(id){
  let target = document.querySelector(id);
  let posReal = target.offsetTop
  let pos = target.offsetTop - 100;

	// if(globalPos + (window.innerHeight / 2.3) > posReal){
	// 	console.log(posReal);
	// }

  window.scrollTo({
    top: pos,
    behavior: "smooth"
  })
}