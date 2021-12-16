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


function toggleMenu() {

	const menu = document.querySelector('.nav-menu');
	let showClassName = "nav-menu--show";
	
	if (menu.classList.contains(showClassName)) {
		menu.classList.remove(showClassName)
	} else {
		menu.classList.add(showClassName)
	}

}