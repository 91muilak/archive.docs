---
layout: doc.njk
title: "Миксин Prefixer"
header: {
	"showOrgBlock": true,
	"org": "kalium19",
	"title": "Prefixer",
	"description":"Миксин, позволяющий избавиться от дубляжа одинаковых свойств с браузерными префиксами в стилях."
}
---

> *Миксин **{{header.title}}** был написан Kitty Giraudel и был выложен на сайте [CSS Tricks](https://css-tricks.com/snippets/sass/mixin-prefix-properties/#simple-version), а позже был доработан мною.*

# О миксине
Миксин {{header.title}} позволяет избавиться от дубляжа одинаковых свойств с браузерными префиксами в стилях.

Существует 3 варианта данного миксина:

- [Prefixer](#prefixer)
- [Prefixer Ext](#prefixer-ext)
- [Prefixer Old](#prefixer-old)

## Prefixer {#prefixer}
Синтаксис очень прост. Необходимо указать первым `свойство`, затем `значение` и уже список префиксов, которые необходимо добавить к свойству.
```scss
prefixer(
	prop,
	value,
	prefixes
)
```
### Пример
```scss
// styles.scss
.block {
	@include prefixer(
		border-radius,
		15px,
		webkit moz
	)
}
```
```css
/* styles.css */
.block {
  -webkit-border-radius: 15px;
  -moz-border-radius   : 15px;
  border-radius        : 15px;
}
```

## Prefixer Ext {#prefixer-ext}
Синтаксис также прост. Тут уже можно указать целый список свойств, к которым должны добавиться префиксы.
```scss
prefixer-ext(
	(
		prop: value,
		prop: value
	),
	prefixes
)
```
### Пример
```scss
// styles.scss
.block {
	@include prefixer-ext(
		(
			column-count: 3,
			column-gap: 1.5em,
			column-rule: 2px solid hotpink
		),
		moz webkit
	);
}
```
```css
/* styles.css */
.block {

  -moz-column-count   : 3;
  -webkit-column-count: 3;
  column-count        : 3;

  -moz-column-gap     : 1.5em;
  -webkit-column-gap  : 1.5em;
  column-gap          : 1.5em;

  -moz-column-rule    : 2px solid hotpink;
  -webkit-column-rule : 2px solid hotpink;
  column-rule         : 2px solid hotpink;

}
```

## Prefixer Old {#prefixer-old}
Старая версия миксина, которая требует лишь `свойство` и `значение`, а на выходе добавляет все известные префиксы.
```scss
prefixer(
	prop,
	value
)
```
### Пример
```scss
// styles.scss
.block {
	@include prefixer-old(
		border-radius,
		15px
	);
}
```
```css
/* styles.css */
.block {
  -webkit-border-radius: 15px;
  -moz-border-radius   : 15px;
  -ms-border-radius    : 15px;
  -o-border-radius     : 15px;
  border-radius        : 15px;
}
```