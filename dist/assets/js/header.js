window.addEventListener('scroll', (e) => {

	const header = document.querySelector('.header');

	if (window.pageYOffset > 50) {
		header.classList.add("header--collapse");
	} else {
		header.classList.remove("header--collapse");
	}

});