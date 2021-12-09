// ! Copyright (c) 2021, Haba Kudzaev <rx1310@inbox.ru>

const storageKey = "k19-theme";
const themes = {
	light: "theme-light",
	dark: "theme-dark"
}

/* themerSet()
 * └── меняет значение в localStorage
 * @param theme - указывается название темы из списка themes[] */
function themerSet(theme) {
	localStorage.setItem(storageKey, theme);
	document.documentElement.className = theme;
}

/* themerToggle()
 * └── переключает тему со светлой на темную и наоборот */
function themerToggle() {
	if (localStorage.getItem(storageKey) === themes.dark) {
		themerSet(themes.light);
	} else {
		themerSet(themes.dark);
	}
}

/* themerApply()
 * └── применяет тему из localStorage при загрузке страницы */
function themerApply() {
	if (localStorage.getItem(storageKey) === themes.dark) {
		themerSet(themes.dark);
	} else {
		themerSet(themes.light);
	}
} themerApply();