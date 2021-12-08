window.addEventListener('scroll', (e) => {

	const nav = document.querySelector('.nav');

	if (window.pageYOffset > 50) {
		nav.classList.add("nav--shadow");
	} else {
		nav.classList.remove("nav--shadow");
	}

});