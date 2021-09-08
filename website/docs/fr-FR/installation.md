# Installation de ElementPlus

## Soutien à l'environnement

- Navigateurs modernes

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge                                                                   | last 2 versions                                                                   | last 2 versions                                                                | last 2 versions                                                                |

> Comme IE11 n'est plus pris en charge par Vue3, ElementPlus ne prend pas non plus
> en charge IE11 et les versions antérieures.

## Version actuelle

ElementPlus est actuellement en itération de développement rapide.

[![ElementPlus version badge](https://img.shields.io/npm/v/element-plus.svg?style=flat-square)](https://www.npmjs.org/package/element-plus)

## Installation via npm ou yarn

**Nous recommandons d'utiliser la méthode d'installation du gestionnaire
de paquets**, qui fonctionne mieux avec[vite](https://vitejs.dev), [webpack](https://webpack.js.org/).
outils d'emballage.

```shell
$ npm install element-plus --save
```

```shell
$ yarn add element-plus
```

Si votre environnement réseau est médiocre, la mise en miroir est recommandée.

## Introduction directe du navigateur

ElementPlus est introduit directement par les balises HTML du navigateur, et `ElementPlus` peut être utilisé de manière globale.

Introduction complète de `ElementPlus` par le biais de **CDN**, qui varie selon le fournisseur **CDN**, ici nous utilisons
[unpkg](https://unpkg.com) et [jsdelivr](https://jsdelivr.com), par exemple.
Vous pouvez également utiliser d'autres fournisseurs **CDN**.

## Utiliser unpkg

```html
<head>
  <!-- Introduction des styles -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- Présentation de Vue -->
  <script src="//unpkg.com/vue@next"></script>
  <!-- Introduction des bibliothèques de composants -->
  <script src="//unpkg.com/element-plus"></script>
</head>
```

## Utiliser jsDelivr

```html
<head>
  <!-- Introduction des styles -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css"
  />
  <!-- Présentation de Vue -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- Introduction des bibliothèques de composants -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
</head>
```

:::tip
Nous recommandons aux utilisateurs qui ont introduit `ElementPlus` en utilisant
**CDN** de verrouiller la version à l'adresse liée pour éviter d'être affectés
par des mises à jour non compatibles lors de la mise à niveau de `ElementPlus`
dans le futur. Pour verrouiller la version, veuillez consulter
[unpkg.com](https://unpkg.com).
:::

## Hello world

Avec l'approche **CDN**, nous pouvons facilement écrire une page Hello world en
utilisant `ElementPlus`.[Démonstration en ligne](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Si vous installez via npm / yarn et souhaitez l'utiliser avec l'outil de conditionnement,
veuillez lire la section suivante : [Démarrage](/#/fr-FR/component/quickstart)。
