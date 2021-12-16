window.addEventListener('scroll', (e) => {

	const nav = document.querySelector('.nav');
	const scroll2top = document.querySelector('.scroll2top');

	if (window.pageYOffset > 55) {
		nav.classList.add("nav--shadow");
		scroll2top.classList.add("scroll2top--show");
	} else {
		nav.classList.remove("nav--shadow");
		scroll2top.classList.remove("scroll2top--show");
	}

});