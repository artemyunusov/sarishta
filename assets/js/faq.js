let tar = document.querySelectorAll('.faq-block-top');
let ansAll = document.querySelectorAll('.faq-block-content');

tar.forEach(elem => {
	elem.addEventListener('click', function(e){


		elem.classList.add('active');

		let tarParent = elem.parentNode;
		let answer = tarParent.querySelector('.faq-block-content');

		ansAll.forEach(el => {
			el.classList.remove('faq-show');
		})

		answer.classList.add('faq-show');

	})
})