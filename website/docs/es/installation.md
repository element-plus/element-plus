# Installing ElementPlus

## Medio ambiente

- Navegador moderno

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge                                                                   | last 2 versions                                                                   | last 2 versions                                                                | last 2 versions                                                                |

> Dado que Vue3 ya no es compatible con IE11, ElementPlus no es compatible con
> IE11 y versiones anteriores anteriores.

## Última versión actual

ElementPlus se encuentra actualmente en una iteración de desarrollo rápido:

[![ElementPlus version badge](https://img.shields.io/npm/v/element-plus.svg?style=flat-square)](https://www.npmjs.org/package/element-plus)

## Instalación mediante npm o yarn

**Recomendamos utilizar el gestor de paquetes para instalar ElementPlus**,
para poder utilizar bundlers como [vite](https://vitejs.dev) y
[webpack](https://webpack.js.org/).

```shell
$ npm install element-plus --save
```

```shell
$ yarn add element-plus
```

Si su entorno de red no es bueno, se recomienda utilizar un registro espejo

## Introducción directa del navegador

Importar directamente ElementPlus a través de las etiquetas HTML del navegador, y utilizar `ElementPlus` de forma global

Introducir `ElementPlus` en su totalidad a través de **CDN**. Según los diferentes proveedores de **CDN**
hay diferentes métodos de introducción. Aquí utilizamos
[unpkg](https://unpkg.com) y [jsdelivr](https://jsdelivr.com) Por ejemplo,
También puede utilizar otros proveedores de **CDN**.

## Utilice unpkg

```html
<head>
  <!-- Introduce style -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- Introduce Vue -->
  <script src="//unpkg.com/vue@next"></script>
  <!-- Introduce component library -->
  <script src="//unpkg.com/element-plus"></script>
</head>
```

## Utilice jsDelivr

```html
<head>
  <!-- Introduce style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css"
  />
  <!-- Introduce Vue -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- Introduce component library -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
</head>
```

:::tip
Recomendamos utilizar **CDN** para introducir a los usuarios de `ElementPlus`
para bloquear la versión
en la dirección del enlace, para no verse afectados por actualizaciones
incompatibles cuando `ElementPlus`
se actualice en el futuro. Por favor, consulte [unpkg.com](https://unpkg.com) para
el método para bloquear la versión.
:::

## Hello world

Con **CDN**, podemos utilizar fácilmente `ElementPlus` para
escribir una página de Hola Mundo. [Online Demo](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Si usted está instalando a través de npm / yarn y desea utilizarlo con
una herramienta de empaquetado, por favor lea la
siguiente sección: [Inicio rápido](/#/es/component/quickstart).
