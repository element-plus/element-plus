---
title: Development FAQ
lang: en-US
---

# Development FAQ

Here are the problems that are easy to encounter in development.

## If you encounter dependency related issues

```shell
rm -rf node_modules
pnpm i
```

## Link local dependencies

```shell
# get dist
pnpm build
cd dist/element-plus
# set cur element-plus to global `node_modules`
pnpm link --global
# for esm we also need link element-plus for dist
pnpm link --global element-plus

# go to your project, link to `element-plus`
cd your-project
pnpm link --global element-plus
```

> More info see [pnpm link](https://pnpm.io/cli/link).

## Theme

We should not write Chinese comments in scss files.

It will generate warning `@charset "UTF-8";` in the header of css file when built with vite.

> More info see [#3219](https://github.com/element-plus/element-plus/issues/3219).
