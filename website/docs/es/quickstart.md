## Inicio rápido

Esta sección te guía en el proceso de usar Element Plus con webpack en un proyecto.

### Use vue-cli@4.5

Proporcionamos un [plugin de Element](https://github.com/element-plus/vue-cli-plugin-element-plus) para vue-cli@4.5, que puede utilizar para construir rápidamente un proyecto basado en Element.

### Usa la plantilla de Kit de inicio

Proveemos una plantilla general [project template](https://github.com/element-plus/element-plus-starter), and also a Vite [template](https://github.com/element-plus/element-plus-vite-starter). Para los usuarios de Laravel, también tenemos [template](https://github.com/element-plus/element-plus-in-laravel-starter). Puedes descargarlas y agregarlas directamente también.

Si prefiere no utilizarlas, lee las siguientes secciones de este documento.

### Importando Element Plus

Puede importar Element Plus completamente o solamente importar lo que necesite. Comencemos importando todo.

#### Importando todo

En main.js:

```javascript
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

El código anterior importa Element Plus completamente. Nótese que el archivo CSS necesita ser incluido por separado.

#### En demanda

**Vue CLI**

Con la ayuda de [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), podemos importar los componentes que necesitamos, haciendo nuestro proyecto más pequeño que de la otra manera.

Primero, instale babel-plugin-import:

```bash
npm install babel-plugin-import -D
```

Luego edite babel.config.js:

- import `.scss` style

:::warning
Please make sure that `sass` and `sass-loader` dependencies have been installed and import `element-plus/packages/theme-chalk/src/base.scss` in the entry file.
:::

```js
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
      },
    ],
  ],
};
```

- import `.css` style

```js
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ],
  ],
};
```
 
**Vite**
  
Firstly，install [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import):

```bash
$ npm install vite-plugin-style-import -D
```

or if you use `Yarn` as package manager

```bash
$ yarn add vite-plugin-style-import -D
```

Then edit vite.config.js:

- import `.scss` style


:::warning
Please make sure that the `sass` dependency have been installed and import `element-plus/packages/theme-chalk/src/base.scss` in the entry file.
:::

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ]
})
```

- import `.css` style

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    })
  ]
})
```

Luego, si necesita Button y Select, edite main.js:

```javascript
import { createApp } from 'vue'
import { ElButton, ElSelect } from 'element-plus';
import App from './App.vue';
// If you want to use the .scss style file, you need to import the base.scss file
// import 'element-plus/packages/theme-chalk/src/base.scss'

const app = createApp(App)
app.component(ElButton.name, ElButton);
app.component(ElSelect.name, ElSelect);

/* or
 * app.use(ElButton)
 * app.use(ElSelect)
 */

app.mount('#app')
```

Ejemplo completo (Referencia completa de componentes [reference](https://github.com/element-plus/element-plus/tree/dev/packages))

```javascript
import { createApp } from 'vue'
import App from './App.vue';
// If you want to use the .scss style file, you need to import the base.scss file
// import 'element-plus/packages/theme-chalk/src/base.scss'

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

### Configuración global

Cuando importa Element, puede definir un objeto global de configuración. Por ahora este elemento solo contiene dos propiedades: `size`, `zIndex`. `size` define el tamaño por defecto de todos los componentes.

La propiedad `zIndex` indica el z-index inicial (por defecto: 2000) para los modal:

Importando Element Plus completamente：

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
```

Importando Element Plus parcialmente：

```js
import { createApp } from 'vue'
import { ElButton } from 'element-plus';
import App from './App.vue';
// If you want to use the .scss style file, you need to import the base.scss file
// import 'element-plus/packages/theme-chalk/src/base.scss'

const app = createApp(App)
app.config.globalProperties.$ELEMENT = option
app.use(ElButton);
```

Con la anterior configuración, el tamaño por defecto de todos los componentes que tienen el atributo `size` será `small`. El valor inicial de z-index para los modals se ha establecido a 3000.

### Empiece ya!

Ahora ha incorporado Vue y Element Plus a su proyecto y es el momento para comenzar a programar. Por favor, refiérase a la documentación de cada componente para aprender cómo usarlos.

### Use Nuxt.js

También podemos comenzar un proyecto usando [Nuxt.js](nuxtjs.org):

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
