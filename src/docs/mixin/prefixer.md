---
title: "Миксин Prefixer"
header: {
	"title": "Prefixer",
	"description":"Для веб-разработчиков существует большое количество утилит, которые позволяют забыть о необходимости устанавливать браузерные префиксы для CSS-свойств. Данный миксин не добавляет автоматически префиксы, но позволяет облегчить написание стилей с префиксами."
}
---

Для начала разберемся что входит в Prefixer. Существует три основных варианта миксина:
1. обычный
2. пакетный
3. старый
## Обычный
Обычный Prefixer может принимать только одно свойство и его значение:
```scss
prefixer(
	$prop,
	$value,
	$prefixes(),
	$withNonPrefixedDeclaration?
)
```

| Данные | Значение |
|-|-|
| `$prop` 			| CSS-свойство, которое необходимо префиксить |
| `$value` 			| значение CSS-свойства |
| `$prefixes()` | список префиксов |
| `$withNonPrefixedDeclaration?` | настройка, которая определяет будет ли добавлено свойство без префикса | 
### Пример
Добавим префиксы к свойству `border-radius`:
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
Наверное заметили, что `$withNonPrefixedDeclaration` не использовался? Он по дефолту имеет значение `true`. Чтобы скомпилировать свойство без префикса нужно уазать `false`:
```scss/6
// styles.scss
.block {
	@include prefixer(
		border-radius,
		15px,
		webkit moz,
		false
	)
}
```
```css
/* styles.css */
.block {
  -webkit-border-radius: 15px;
  -moz-border-radius   : 15px;
}
```