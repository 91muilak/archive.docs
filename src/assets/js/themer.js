// ! Copyright (c) 2021, Haba Kudzaev <rx1310@inbox.ru>

const storageKey = "k19-theme";


const themes = {
	light: "theme-light",
	dark: "theme-dark"
}

/* themerSet()
 * └── меняет значение в localStorage
 * @param theme - указывается название темы из списка themes[] */
function themerSet(theme, color) {
	localStorage.setItem(storageKey, theme);
	document.documentElement.className = theme;
	if (color) {
		setColorTheme(color);
	} else {
		setColorTheme("#ffffff")
	}
}

/* themerToggle()
 * └── переключает тему со светлой на темную и наоборот */
function themerToggle() {
	if (localStorage.getItem(storageKey) === themes.dark) {
		themerSet(themes.light, "#ffffff");
	} else {
		themerSet(themes.dark, "#050505");
	}
}

/* themerApply()
 * └── применяет тему из localStorage при загрузке страницы */
function themerApply() {
	if (localStorage.getItem(storageKey) === themes.dark) {
		themerSet(themes.dark, "#050505");
	} else {
		themerSet(themes.light, "#fffff");
	}
} themerApply();

function setColorTheme(color) {
	let scheme = document.querySelector('meta[name="theme-color"]');
	scheme.setAttribute('content', color);
}