---
title: Dark Mode
lang: en-US
---

# Dark Mode ^(2.2.0)

After a long time, Element Plus supports dark mode!

We extracted and unified all necessary variables to make it possible to implement based on CSS Vars.

## How to enable it?

First you can create a switch to toggle `dark` class of html.

> If you only need dark mode, just add `dark` class for html.

```html
<html class="dark">
  <head></head>
  <body></body>
</html>
```

> If you want to toggle it, i recommend [useDark | VueUse](https://vueuse.org/core/useDark/).

Then, you can quickly enable it with just one line of code to import CSS in your entry.

```ts [main.ts]
// if you just want to import css
import 'element-plus/theme-chalk/dark/css-vars.css'
```

> If you want an example, you can refer to [element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter).

## Custom variables

### By CSS

Just override it by CSS Vars.

For example, new file `styles/dark/css-vars.css`:

```css
html.dark {
  /* custom dark bg color */
  --el-bg-color: #626aef;
}
```

Import it after styles of Element Plus:

```ts [main.ts]
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'
```

### By SCSS

If you use scss, you can also import scss file to compile.

> You can refer [Theming](./theming.md) to get more info.

```scss [styles/element/index.scss]
/*just override what you need*/
@forward 'element-plus/theme-chalk/src/dark/var.scss' with (
  $bg-color: (
    'page': #0a0a0a,
    '': #626aef,
    'overlay': #1d1e1f,
  )
);
```

```ts [main.ts]
import './styles/element/index.scss'

// or just want to import scss?
// import 'element-plus/theme-chalk/src/dark/css-vars.scss'
```
