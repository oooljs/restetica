gsap.registerPlugin(ScrollTrigger);

if (ScrollTrigger.isTouch !== 1) {

  gsap.fromTo('.wrapper__slider', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.slider-big',
			start: 'center',
			end: '900',
			scrub: true
		}
	});

  ScrollTrigger.batch(".section_services .col, .section_brands .col", {
    onEnter: batch => gsap.fromTo(batch, { opacity: 0, y: 110 },  {
        opacity: 1, 
        y: 0, 
        stagger: 0.2,
        scrub: true
      }),
  });
  
  let itemsLeft = gsap.utils.toArray('.anim-left');

	itemsLeft.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -160 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-700',
				end: '-150',
				scrub: true
			}
		});
	});
  
  let itemsRight = gsap.utils.toArray('.anim-right');

	itemsRight.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 160 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-700',
				end: '-150',
				scrub: true
			}
		});
	});

  let itemsUp = gsap.utils.toArray('.anim-up');

	itemsUp.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: 110 }, {
			opacity: 1, y: 0,
			scrollTrigger: {
				trigger: item,
				start: '-700',
				end: '-200',
				scrub: true
			}
		});
	});


  let itemsFade = gsap.utils.toArray('.anim-fade');

	itemsFade.forEach(item => {
		gsap.fromTo(item, { opacity: 0}, {
			opacity: 1,
			scrollTrigger: {
				trigger: item,
				start: '-700',
				end: '-200',
				scrub: true
			}
		});
	});

}