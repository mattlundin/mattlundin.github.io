//* NAVBAR
const nav = document.querySelector('.nav');

//~ Hide navbar on scroll
let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function () {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollPos > currentScrollPos) {
		nav.style.top = '0';
	} else {
		nav.style.top = '-75px';
	}
	prevScrollPos = currentScrollPos;

	if (window.screen.width <= '500px') {
		nav.style.top = '0';
	}
});

//* MOBILE NAV
const navSlide = () => {
	const navList = document.querySelector('.nav-list');
	const navStack = document.querySelectorAll('.stack');
	const navItem = document.querySelectorAll('.nav-list li');
	const burger = document.querySelector('.burger');
	const body = document.querySelector('body');

	burger.addEventListener('click', () => {
		navStack.forEach((navEl) => navEl.classList.toggle('open'));
		burger.classList.toggle('toggle');

		//~ disable scroll while mobile-nav is open
		if (burger.classList.contains('toggle')) {
			body.style.position = 'fixed';
		} else {
			body.style.position = 'static';
			burger.style.marginRight = '1rem';
		}
	});
	//~ close nav when clicking on nav-link
	for (let i = 0; i < navItem.length; i++) {
		let closeNav = navItem[i];
		closeNav.addEventListener('click', () => {
			navStack.forEach((navEl) => navEl.classList.toggle('open'));

			burger.classList.toggle('toggle');

			body.style.position = 'static';
		});
	}
};
navSlide();

//~ mobile vh toolbar fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//* === ANIMATIONS ===
gsap.to('.logo', {
	delay: 1,
	opacity: 1,
	y: 0,
	rotation: 360,
});
gsap.from('.slide-right', {
	opacity: 0,
	x: -150,
	duration: 1.2,
	stagger: 0.5,
	ease: 'back.out(1.7)',
});
gsap.from('.home-accent', {
	opacity: 0,
	duration: 2,
	delay: 0.5,
	stagger: 0.4,
});
gsap.to('.about-me', {
	scrollTrigger: {
		trigger: '.about-me',
		start: '20px 80%',
	},
	opacity: 1,
	x: 0,
	duration: 1.3,
	ease: 'power3',
});
gsap.to('.img-container', {
	scrollTrigger: {
		trigger: '.img-container',
		start: '20px 80%',
	},
	opacity: 1,
	duration: 3,
});
gsap.from('.slide-up', {
	scrollTrigger: {
		trigger: '.tech-columns',
		start: '20px 80%',
	},
	opacity: 0,
	y: 100,
	duration: 1,
	ease: 'power3',
	stagger: 0.3,
});
gsap.to('.projects-header', {
	scrollTrigger: {
		trigger: '.projects-header',
		start: '20px 80%',
	},
	opacity: 1,
	x: 0,
	duration: 1.3,
	ease: 'power3',
});

const images = gsap.utils.toArray('.project-img');
images.forEach((image, i) => {
	let isEven = i % 2 == 0;

	gsap.to(image, {
		scrollTrigger: {
			trigger: image,
			start: '5px 120%',
		},
		opacity: 1,
		y: 0,
		duration: 0.1,
		ease: 'back.out',
		rotate: 360,
		delay: isEven ? 0.2 : 0,
	});
});

gsap.to('.contact-header', {
	scrollTrigger: {
		trigger: '.contact-header',
		start: '20px 80%',
	},
	opacity: 1,
	y: 0,
	duration: 2,
});

gsap.to('#contactForm', {
	scrollTrigger: {
		trigger: '#contactForm',
		start: '10px 80%',
	},
	opacity: 1,
	scale: 1,
	duration: 2,
});
