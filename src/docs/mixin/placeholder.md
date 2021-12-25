---
title: "Миксин Placeholder"
header: {
	"title": "placeholder()",
	"description": "Атрибут placeholder применяется для призыва к действию внутри пустых элементов input и textarea. Миксин же позволяет не думать о браузерных префиксах."
}
---

## Как работает миксин 
Все просто. При использовании миксина ему передается просто набор свойств, а после компиляции код дублируется с префиксами для определённых браузеров.

## Пример использования
Просто укажем псевдоэлементу `placeholder` элемента `input` цвет шрифта `#1f6878`:
```scss
input {
	@include placeholder {
		color: #1f6878;
	}
}
```
После компиляци SASS CSS-код будет выглядеть след. образом:
```css
input.placeholder {
  color: #1f6878;
}
input:-moz-placeholder {
  color: #1f6878;
}
input::-moz-placeholder {
  color: #1f6878;
}
input:-ms-input-placeholder {
  color: #1f6878;
}
input::-webkit-input-placeholder {
  color: #1f6878;
}
```
Также создается класс `.placeholder` для элемента `input`. Чтобы не генерировать этот класс необходимо передать в миксин значение `false` для переменной `$createPhClass`:
```scss
@include placeholder(false) {
	...
}
```

### Результат
<style>
	input {
		width: 100%
	}
	input.placeholder {
		color: #1f6878;
	}
	input:-moz-placeholder {
		color: #1f6878;
	}
	input::-moz-placeholder {
		color: #1f6878;
	}
	input:-ms-input-placeholder {
		color: #1f6878;
	}
	input::-webkit-input-placeholder {
		color: #1f6878;
	}
</style>

<div class="sample">
	<input type="text" placeholder="Текст placeholder">
</div>