---
title: Loading
lang: en-US
---

# Loading

Show animation while loading data.

## Loading inside a container

Displays animation in a container (such as a table) while loading data.

:::demo Element Plus provides two ways to invoke Loading: directive and service. For the custom directive `v-loading`, you just need to bind a `boolean` value to it. By default, the loading mask will append to the element where the directive is used. Adding the `body` modifier makes the mask append to the body element.

loading/basic

:::

## Customization

You can customize loading text, loading spinner and background color.

:::demo Add attribute `element-loading-text` to the element on which `v-loading` is bound, and its value will be displayed under the spinner. Similarly, the `element-loading-spinner / element-loading-svg` and `element-loading-background` attributes are used to set the svg icon, background color value, and loading icon, respectively.

loading/customization

:::

:::warning

Although the `element-loading-spinner / element-loading-svg` attribute supports incoming HTML fragments, it is very dangerous to dynamically render arbitrary HTML on the website, because it is easy to cause [XSS attack](https://en.wikipedia.org/wiki/Cross-site_scripting). Please make sure that the content of `element-loading-spinner / element-loading-svg` is trustworthy. **Never** assign user-submitted content to the `element-loading-spinner / element-loading-svg` attribute.

:::

## Full screen loading

Show a full screen animation while loading data.

:::demo When used as a directive, a full screen Loading requires the `fullscreen` modifier, and it will be appended to body. In this case, if you wish to disable scrolling on body, you can add another modifier `lock`. When used as a service, Loading will be full screen by default.

loading/fullscreen

:::

## Service

You can also invoke Loading with a service. Import Loading service:

```ts
import { ElLoading } from 'element-plus'
```

Invoke it:

```ts
ElLoading.service(options)
```

The parameter `options` is the configuration of Loading, and its details can be found in the following table. `LoadingService` returns a Loading instance, and you can close it by invoking its `close` method:

```ts
const loadingInstance = ElLoading.service(options)
nextTick(() => {
  // Loading should be closed asynchronously
  loadingInstance.close()
})
```

Note that in this case the full screen Loading is singleton. If a new full screen Loading is invoked before an existing one is closed, the existing full screen Loading instance will be returned instead of actually creating another Loading instance:

```ts
const loadingInstance1 = ElLoading.service({ fullscreen: true })
const loadingInstance2 = ElLoading.service({ fullscreen: true })
console.log(loadingInstance1 === loadingInstance2) // true
```

Calling the `close` method on any one of them can close this full screen Loading.

If Element Plus is imported entirely, a globally method `$loading` will be registered to `app.config.globalProperties`. You can invoke it like this: `this.$loading(options)`, and it also returns a Loading instance.

## App context inheritance ^(2.9.10)

Now loading accepts a `context` as second parameter of the loading constructor which allows you to inject current app's context to loading which allows you to inherit all the properties of the app.

You can use it like this:

:::tip

If you globally registered ElLoading component, it will automatically inherit your app context.

:::

```ts
import { getCurrentInstance } from 'vue'
import { ElLoading } from 'element-plus'

// in your setup method
const { appContext } = getCurrentInstance()!
ElLoading.service({}, appContext)
```

## API

### Options

| Name                 | Description                                                                                                                                                              | Type                       | Default       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | ------------- |
| target               | the DOM node Loading needs to cover. Accepts a DOM object or a string. If it's a string, it will be passed to `document.querySelector` to get the corresponding DOM node | ^[string] / ^[HTMLElement] | document.body |
| body                 | same as the `body` modifier of `v-loading`                                                                                                                               | ^[boolean]                 | false         |
| fullscreen           | same as the `fullscreen` modifier of `v-loading`                                                                                                                         | ^[boolean]                 | true          |
| lock                 | same as the `lock` modifier of `v-loading`                                                                                                                               | ^[boolean]                 | false         |
| text                 | loading text that displays under the spinner                                                                                                                             | ^[string]                  | —             |
| spinner              | class name of the custom spinner                                                                                                                                         | ^[string]                  | —             |
| background           | background color of the mask                                                                                                                                             | ^[string]                  | —             |
| customClass          | custom class name for loading                                                                                                                                            | ^[string]                  | —             |
| svg                  | custom SVG element to override the default loading spinner                                                                                                               | ^[string]                  | —             |
| svgViewBox           | sets the viewBox attribute for loading svg element                                                                                                                       | ^[string]                  | —             |
| beforeClose ^(2.7.8) | Function executed before loading attempts to close. If this function returns false, the closing process will be aborted. Otherwise, the loading will close.              | ^[Function]`() => boolean` | —             |
| closed ^(2.7.8)      | Function triggered after loading has completely closed                                                                                                                   | ^[Function]`() => void`    | —             |

### Directives

| Name                         | Description                                                  | Type                           |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------ |
| v-loading                    | show animation while loading data                            | ^[boolean] / ^[LoadingOptions] |
| element-loading-text         | loading text that displays under the spinner                 | ^[string]                      |
| element-loading-spinner      | icon of the custom spinner                                   | ^[string]                      |
| element-loading-svg          | icon of the custom spinner (same as element-loading-spinner) | ^[string]                      |
| element-loading-svg-view-box | sets the viewBox attribute for loading svg element           | ^[string]                      |
| element-loading-background   | background color of the mask                                 | ^[string]                      |
| element-loading-custom-class | custom class name for loading                                | ^[string]                      |
