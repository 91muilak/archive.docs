// ! Copyright (c) 2021, Haba Kudzaev <rx1310@inbox.ru>

const storageKey = "k19-theme";
const themes = {
	day: "theme-day",
	night: "theme-night"
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
	if (localStorage.getItem(storageKey) === themes.night) {
		themerSet(themes.day);
	} else {
		themerSet(themes.night);
	}
}

/* themerApply()
 * └── применяет тему из localStorage при загрузке страницы */
function themerApply() {
	if (localStorage.getItem(storageKey) === themes.night) {
		themerSet(themes.night);
	} else {
		themerSet(themes.day);
	}
} themerApply();