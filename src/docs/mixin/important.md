---
title: "Миксин Important"
header: {
	"title": "important()",
	"description":"Правило CSS !important отвечает за приоритет в стилях в случае спорных моментов. Если мы указали это правило, то мы подчеркиваем то, что это свойство является главным. Миксин позволяет добавлять правило !important группе свойств."
}
---

## Как работает миксин
Миксин Important нужен для весьма специфической задачи. Миксин помогает добавлять к пачке свойств правило `!important`.

## Пример
Сделаем так, чтобы у блока `.block` свойства `color`, `background` и `border` не переопределялись и добавим ко всем правило `!important`:
```scss
// styles.scss
.block {
	@include important (
		(
			color: #ff5656,
			background: #ffc5c5,
			border: none
		)
	)
}
```
После компиляци SASS CSS-код будет выглядеть след. образом:
```css
/* styles.css */
.block {
  color: #ff5656 !important;
  background: #ffc5c5 !important;
  border: none !important;
}
```