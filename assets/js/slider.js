$('.services-slider').owlCarousel({
	loop:true,
	// margin:10,
	responsiveClass:true,
	nav: true,
	responsiveBaseElement: 'body',
	responsive:{
			0:{
					items:1,
					nav:true
			},
			600:{
					items:3,
					nav:true
			},
			1000:{
					items:4,
					nav:true
			}
	}
})

$('.works-slider').owlCarousel({
	loop:true,
	responsiveClass:true,
	nav: true,
	responsiveBaseElement: 'body',
	responsive:{
			0:{
					items:1,
					nav:true
			},
			600:{
					items:3,
					nav:true
			},
			1000:{
					items:5,
					nav:true
			}
	}
})