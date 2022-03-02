let header = document.querySelector('.header');
let headerWrap = document.querySelector('.header-wrap');

window.addEventListener("scroll", function(e){
	// console.log("scroll");

	let currentPos = window.pageYOffset;

	if(currentPos > 200){
		header.classList.add('header-fixed');
		headerWrap.classList.add('header-wrap-fixed');
		document.body.style.marginTop = "60px";
	}

	else{
		header.classList.remove('header-fixed');
		headerWrap.classList.remove('header-wrap-fixed');
		document.body.style.marginTop = "0";
	}


	// console.log(currentPos);
})