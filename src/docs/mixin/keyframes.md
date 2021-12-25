---
title: "Миксин Keyframes"
header: {
	"title": "keyframes()",
	"description": "Миксин позволяет писать правило @keyframes, не задумываясь о браузерных префиксах."
}
---

## Как работает миксин
Миксин Keyframes использует принцип Prefixer, добавляя браузерные префиксы. Разработчик пишет один раз, не думая о том что нужно добавлять префиксы для старых браузеров, не поддерживающих `keyframes` надлежащим образом.

## Пример
Создаем простой прямоугольник с классом `.block-anim` с заливкой и анимируем его. Будем вращать блок бесконечно используя `keyframes` и `transform: rotate()`:
```scss
// styles.scss

.block-anim {

	width           : 100px;
	height          : 100px;
	background-color: red;
	animation       : rotate 2s infinite;

	@include border-radius(10px);

}

@include keyframes(rotate) {
	from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```
После компиляци SASS CSS-код будет выглядеть след. образом:
```css
/* styles.css */
.block-anim {
  width                : 100px;
  height               : 100px;
  background-color     : red;
  animation            : rotate 2s infinite;
  -webkit-border-radius: 10px;
  -moz-border-radius   : 10px;
  border-radius        : 10px;
}

@-webkit-keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-moz-keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-ms-keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-o-keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```
### Результат
<style>

	.block-anim {
		width                : 100px;
		height               : 100px;
		background-color     : red;
		animation            : rotate 5s infinite;
		-webkit-border-radius: 10px;
		-moz-border-radius   : 10px;
		border-radius        : 10px;
	}

	@-webkit-keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@-moz-keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@-ms-keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@-o-keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

</style>

<div class="sample">
	<div class="block-anim"></div>
</div>