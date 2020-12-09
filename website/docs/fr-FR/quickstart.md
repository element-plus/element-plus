## Démarrer

Cette page vous guidera tout le long de l'installation d'Element Plus au sein d'un projet webpack.

### Use vue-cli@4.5

Nous fournissons un [plugin Element](https://github.com/element-plus/vue-cli-plugin-element-plus) pour vue-cli@4.5, que vous pouvez utiliser pour créer rapidement un projet basé sur Element.

### Utiliser le Starter Kit

Nous fournissons un [template de projet](https://github.com/element-plus/element-plus-starter) pour débuter rapidement, and also a Vite [template](https://github.com/element-plus/element-plus-vite-starter). Pour les utilisateurs Laravel, il est aussi possible d'utiliser ce [template](https://github.com/element-plus/element-plus-in-laravel-starter). VOus pouvez les télécharger directement.

Si vous préférer vous passer de template, voyez la section suivante.

### Importer Element Plus

Element Plus peut être importé entièrement ou à la demande. Commençons par l'import total.

#### Import total

Dans main.js:

```javascript
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

L'exemple ci-dessus importe Element Plus entièrement. Notez que les fichiers CSS doivent être importés séparément.

#### À la demande

Grâce au [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component), nous pouvons importer uniquement les composants désirés, rendant ainsi le projet plus léger.

Tout d'abord, installez babel-plugin-component:

```bash
npm install babel-plugin-component -D
```

Puis éditez .babelrc:

```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-plus",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

Ensuite, si vous n'avez besoin que de Button et Select, éditez main.js comme suit:

```javascript
import { createApp } from 'vue'
import { ElButton, ElSelect } from 'element-plus';
import App from './App.vue';

const app = createApp(App)
app.component(ElButton.name, ElButton);
app.component(ElSelect.name, ElSelect);

/* or
 * app.use(ElButton)
 * app.use(ElSelect)
 */

app.mount('#app')
```

Exemple complet (liste complète des composants dans [reference](https://github.com/element-plus/element-plus/tree/dev/packages)):

```javascript
import { createApp } from 'vue'
import App from './App.vue';
import {
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElContainer,
  ElDatePicker,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElImage,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElOptionGroup,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSlider,
  ElStep,
  ElSteps,
  ElSubmenu,
  ElSwitch,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTag,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTransfer,
  ElTree,
  ElUpload,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
} from 'element-plus';

const components = [
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElContainer,
  ElDatePicker,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElImage,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElOptionGroup,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSlider,
  ElStep,
  ElSteps,
  ElSubmenu,
  ElSwitch,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTag,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTransfer,
  ElTree,
  ElUpload,
]

const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

plugins.forEach(plugin => {
  app.use(plugin)
})
```

### Configuration globale

Lors de l'import d'Element, vous pouvez définir un objet de configuration global. Actuellement il possède de propriétés: `size` et `zIndex`. La propriété `size` détermine la taille par défaut de tout les composants et `zIndex` règle le z-index initial (default: 2000) des fenêtres modales:

Import total d'Element：

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
```

Import partiel d'Element：

```js
import { createApp } from 'vue'
import { ElButton } from 'element-plus';
import App from './App.vue';

const app = createApp(App)
app.config.globalProperties.$ELEMENT = option
app.use(ElButton);
```

Avec la configuration ci-dessus, la taille par défaut des composants ayant l'attribut size sera 'small', et le z-index initial des fenêtres modales est 3000.

### Commencer à développer

Maintenant que vous avez ajouté Vue et Element Plus à votre projet, vous pouvez commencer à coder. Référez-vous à la documentation de chaque composant pour savoir comment les utiliser.

### Utiliser Nuxt.js

Vous pouvez également commencer un projet avec [Nuxt.js](https://nuxtjs.org/):

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
