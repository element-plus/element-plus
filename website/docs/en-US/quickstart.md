## Quick start

This part walks you through the process of using Element Plus in a webpack project.

### Use vue-cli@4.5

We provide an [Element Plus plugin](https://github.com/element-plus/vue-cli-plugin-element-plus) for vue-cli@4.5, which you can use to quickly build an Element-based project.

### Use Starter Kit

We provide a general [project template](https://github.com/element-plus/element-plus-starter) for you, and also a Vite [template](https://github.com/element-plus/element-plus-vite-starter). For Laravel users, we have a [template](https://github.com/element-plus/element-plus-in-laravel-starter) here. You can download and use them directly.

If you prefer not to use them, please read the following.

### Import Element Plus

You can import ElementPlus entirely, or just import what you need. Let's start with fully import.

#### Fully import

In main.js:

```javascript
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

The above imports Element Plus entirely. Note that CSS file needs to be imported separately.

#### On demand

With the help of [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), we can import components we actually need, making the project smaller than otherwise.

Firstly，install babel-plugin-import:

```bash
$ npm install babel-plugin-import -D
```

or if you use `Yarn` as package manager

```bash
$ yarn add babel-plugin-import -D
```


Then edit babel.config.js:

```js
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          // Because of the existence of `customStyleName`, `style: true` will not be effective.
          // So if you want to use the `.scss` source file, you only need to replace the extension name from `.css` to `.scss`
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ],
  ],
};
```

Next, if you need Button and Select, edit main.js:

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

Full example (Component list [reference](https://github.com/element-plus/element-plus/tree/dev/packages))

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

### Global config

When importing Element, you can define a global config object. For now this object has two properties: `size` and `zIndex`. The property `size` sets the default size for all components and the property `zIndex` sets the initial z-index (default: 2000) for modal boxes:

Fully import Element：

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
```

Partial import Element：

```js
import { createApp } from 'vue'
import { ElButton } from 'element-plus';
import App from './App.vue';

const app = createApp(App)
app.config.globalProperties.$ELEMENT = option
app.use(ElButton);
```

With the above config, the default size of all components that have size attribute will be 'small', and the initial z-index of modal boxes is 3000.

### Start coding

Now you have implemented Vue and Element Plus to your project, and it's time to write your code. Please refer to each component's documentation to learn how to use them.

### Use Nuxt.js

We can also start a project using [Nuxt.js](https://nuxtjs.org/):

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
