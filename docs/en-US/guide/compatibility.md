---
title: Compatibility
lang: en-US
---

# Compatibility ^(2.5.0)

### Browsers

If you really need to support outdated browsers, please add [Babel](https://babeljs.io/) and Polyfill yourself.

Since Vue 3 no longer supports IE11, Element Plus does not support IE either.

| version | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) <br> Chrome | ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) <br> Edge | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) <br> Firefox | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) <br> Safari |
| ------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| < 2.5.0 | Chrome ≥ 64                                                                                | Edge ≥ 79                                                                        | Firefox ≥ 78                                                                                   | Safari ≥ 12                                                                                |
| 2.5.0 + | Chrome ≥ 85                                                                                | Edge ≥ 85                                                                        | Firefox ≥ 79                                                                                   | Safari ≥ 14.1                                                                              |

### Sass

Version `2.8.5` and later, the minimum compatible version of [Sass](https://github.com/sass) is `1.79.0`.

If your terminal prompts `legacy JS API Deprecation Warning`, you can configure the following code in [vite.config.ts](https://vitejs.dev/config/shared-options.html#css-preprocessoroptions).

```ts{3}
css: {
  preprocessorOptions: {
    scss: { api: 'modern-compiler' },
  }
}
```

### Version

Element Plus is currently in a rapid development iteration. [![ElementPlus version badge](https://img.shields.io/npm/v/element-plus.svg?style=flat-square)](https://www.npmjs.org/package/element-plus)

In addition, every commit and PR on the dev branch will be published to [pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new), if you want to use some unpublished content, you can refer to [here](https://github.com/element-plus/element-plus/issues/18433#issuecomment-2392618431).
