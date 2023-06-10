// const swiper = new Swiper('.swiper', {
//     loop: true,

//     pagination: {
//       el: '.swiper-pagination',
//     },
  

//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  

//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },

    
//   });


  const isSwiper = document.querySelector('.swiper');
if(isSwiper) {
	const swiper = new Swiper('.swiper', {
	loop: true,
	spaceBetween: 0,
	grabCursor: true,
	effect: "creative",
	creativeEffect: {
	  prev: {
		shadow: true,
		translate: [0, 0, -1500],
	  },
	  next: {
		translate: ["100%", 0, 0],
	  },
	},
  
	// pagination: {
	//   el: '.swiper-pagination',
	//   clickable: true,
	// },

      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
}

const isTestimonial__swiper = document.querySelector('.testimonial__swiper');
if(isTestimonial__swiper) {
	const testimonial__swiper  = new Swiper('.testimonial__swiper', {
	loop: true,
	breakpoints: {
	  320: {
		slidesPerView: 1,
		spaceBetween: 20
	  },
	
	  1024: {
		slidesPerView: 2,
		spaceBetween: 40
	  }
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },
  })
}
 