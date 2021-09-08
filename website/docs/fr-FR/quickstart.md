# Démarrage rapide

Cette section décrit comment utiliser ElementPlus dans votre projet.

## Utilisation des composants

### Introduction complète de tous les composants

> main.ts

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

### Introduction de composants à la demande

Le code JS d'ElementPlus supporte par défaut le [tree shaking](https://webpack.js.org/guides/tree-shaking/)
basé sur les modules ES.

> App.vue

```html
<template>
  <el-button> Je suis ElButton </el-button>
</template>
<script>
  import { defineComponent } from 'vue'
  import { ElButton } from 'element-plus'

  export default defineComponent({
    name: 'app'
    components: {
      ElButton,
    },
  })
</script>
```

### Introduction du style

Nous **recommandons fortement d'apporter les fichiers de style complets directement**,
bien que cela puisse sembler augmenter la taille de l'application entière, cela
évite d'introduiredes plugins d'outils de packaging supplémentaires (moins de charge)
et vous pouvez également utiliser le [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)
pour charger les fichiers de style, ce qui accélère le chargement de votre application.

Introduction par le biais de JS

```typescript
import 'element-plus/dist/index.css'
```

Introduit par les en-têtes HTML

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
</head>
```

Si vous souhaitez que les styles soient également introduits à la demande, vous
pouvez y faire référence en utilisant le plug-in fourni par l'outilcorrespondant.
Voir [FAQ](/#/fr-FR/component/quickstart#faqs)

## Modèle de projet de construction rapide

### Utilisez vue-cli@4.5

Nous avons préparé les plugins vue-cli correspondants pour la nouvelle version de
[Element Plus plugins](https://github.com/element-plus/vue-cli-plugin-element-plus)
que vous pouvez utiliser pour créer rapidement un projet basé sur les éléments suivants
Projet Element Plus.

### Utilisation du kit de démarrage

Nous fournissons des [modèles de projet génériques ](https://github.com/element-plus/element-plus-starter)
que vous pouvez utiliser directement, et nous fournissons également les éléments
suivants vite [modèle](https://github.com/element-plus/element-plus-vite-starter).
Pour
Utilisateurs de Laravel,
nous disposons également d'un [modèle correspondant](https://github.com/element-plus/element-plus-in-laravel-starter)
que vous pouvez également télécharger et utiliser directement.

## Configuration globale

Lors de l'introduction d'Element Plus, un objet de configuration globale peut être
transmis. Cet objet supporte actuellement les champs `size` et `zIndex`. `size`
permet de modifier la taille par défaut du composant et `zIndex` définit le
z-index initial de la boîte pop-up (valeur par défaut : 2000). L'élément Plus est
présenté sur demande comme suit.

Présentation complète d'ElementPlus.

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
```

Présentation d'ElementPlus à la demande.

```js
import { createApp } from 'vue'
import { ElButton } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$ELEMENT = option
app.use(ElButton)
```

Avec les paramètres ci-dessus, tous les composants du projet ayant la propriété
`size` auront une taille par défaut de 'small' et l'index z initial de la boîte
pop-up sera de 3000.

## Utilisation de Nuxt.js

Nous pouvons également utiliser [Nuxt.js](https://nuxtjs.org) pour.

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>

## Démarrage

Maintenant qu'un environnement de développement basé sur Vue et Element Plus a
été mis en place, il est temps d'écrire du code. Consultez la documentation de
chaque composant pour savoir comment les utiliser.

## Questions fréquemment posées

### Je veux introduire des composants et des styles à la demande en même temps.

#### Chargement des styles à la demande en utilisant vite

Si vous utilisez [vite](https://vitejs.dev) comme outil de compilation, vous devrez
d'abord installer `vite-plugin-element-plus` pour charger les styles à la demande.

```shell
yarn add vite-plugin-element-plus -D
# ou
npm install vite-plugin-element-plus -D
```

Ensuite, ajoutez le code suivant au fichier `vite.config.js` :

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginElementPlus from 'vite-plugin-element-plus'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  plugins: [
    vue(),
    VitePluginElementPlus({
      // Si vous devez utiliser le fichier source [nom du composant].scss, vous
      // devez le décommenter ci-dessous.
      // Pour toutes les API, vous pouvez consulter la documentation à l'adresse
      // https://github.com/element-plus/vite-plugin-element-plus.
      // pour les commentaires de la documentation
      // useSource: true
      format: mode === 'development' ? 'esm' : 'cjs',
    }),
  ],
})
```

#### Chargement des styles à la demande avec webpack

Si vous utilisez webpack comme outil de compilation, vous devez d'abord
installer `babel-plugin-import` pour charger les styles à la demande.

```shell
yarn add babel-plugin-import -D
# ou
npm install babel-plugin-import -D
```

Ensuite, vous devez ajouter le code suivant à votre fichier `babel.config.js`.

> babel.config.js

```javascript
module.exports = {
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: 'element-plus',
        // import component
        customName: (name) => {
          name = name.slice(3)
          return `element-plus/lib/components/${name}`
        },
        // import style
        customStyleName: (name) => {
          name = name.slice(3)
           // Si vous avez besoin du fichier [nom].scss, vous devez commenter la
          // ligne de code précédente et décommenter la ligne de code suivante.
          // return `element-plus/lib/components/${name}/style`
          // Si vous avez besoin du fichier [nom].css, vous devez renvoyer la ligne
          // suivante
          return `element-plus/lib/components/${name}/style/css`
        },
      },
    ],
  ]
}
```
