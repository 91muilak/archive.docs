---
title: "Миксин Media"
header: {
	"title": "media()",
	"description": "Зачастую бывает многословно прописывать медиа-выражения (особенно если их много). Поэтомы был написан миксин, позволяющий ускорить и упростить написание этих медиа-выражений."
}
---

## Как работает миксин
Синтаксис миксина весьма прост и понятен. Используются краткие названия привычных ширин устройств из переменной `k-mediaQueries`, которая имеет в текущем состоянии след. вид:

```scss
// _config.scss
$k-mediaQueries: (
  null: null,
  wmin-sm: 'screen and (min-width: 576px)',
  wmax-sm: 'screen and (max-width: 576px)',
  wmin-md: 'screen and (min-width: 768px)',
  wmax-md: 'screen and (max-width: 768px)',
  wmin-lg: 'screen and (min-width: 992px)',
  wmax-lg: 'screen and (max-width: 992px)',
  wmin-xl: 'screen and (min-width: 1200px)',
  wmax-xl: 'screen and (max-width: 1200px)',
) !default;
```

> Если Вы изучали SASS, то знаете о том, что `!default` означает возможность перезаписи переменной.

Это готовые шаблоны с сокращенным названием типа дисплея, которое используется в основном в веб-разработке.

Их можно переопределить в своем SASS-файле. Например:
```scss
$k-mediaQueries: (
  mobile: 'screen and (min-width: 576px)',
  desktop: 'screen and (min-width: 1200px)',
) !default;
```

> Если вы переопределяете настройку Kalium19, то необходимо это делать до импорта пакета!

## Пример
Для примера просто создаем блок с красным фоновым цветом, а уже на брейкпоинте *768px* меняем на синий
```scss
// styles.scss
.block {

	background-color: red;

	@include media(wmin-md) {
		background-color: blue;
	}

}
```
```css
/* styles.css */
.block {
  background-color: red;
}

@media screen and (min-width: 768px) {
  .block {
    background-color: blue;
  }
}
```

На наглядном примере видно, насколько проще использовать миксин вместо ручной прописи медиа-выражений.

## Кастомное значение
Помимо заготовленных вариантов ширины дисплея, Вы можете прямо в миксине прописывать свои значения.

### Пример
Также создаем блок с красным фоном, но при достижении брейкпоинта *355px* цвет меняется на синий, а на *635px* меняется на черный.
```scss
// styles.scss
.block {

	background-color: red;

	@include media(355px) {
		background-color: blue;
	};

	@include media(635px, max) {
		background-color: black;
	}

}
```
```css
/* styles.css */
.block {
  background-color: red;
}

@media screen and (min-width: 355px) {
  .block {
    background-color: blue;
  }
}

@media screen and (max-width: 635px) {
  .block {
    background-color: black;
  }
}
```

Также мы указали, что на максимальном значении *365px* будет изменен цвет.