<p align="center">
  <img width="300px" src="https://user-images.githubusercontent.com/10731096/95823103-9ce15780-0d5f-11eb-8010-1bd1b5910d4f.png">
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/element-plus">
    <img src="https://img.shields.io/npm/v/element-plus.svg">
  </a>
  <a href="https://npmcharts.com/compare/element-plus?minimal=true">
    <img src="http://img.shields.io/npm/dm/element-plus.svg">
  </a>
  <br>
</p>

<p align="center">Element Plus - A Vue.js 3 UI library</p>

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript

## Archived website

If you are looking for previous version website, here is the link.

[Element Plus Documentation Archived](https://github.com/element-plus/doc-archive)

The new website is launched at 17th Sep 2021.

## Status: Beta

This project is still under heavy development. Feel free to join us and make your first pull request.

[![Edit element-plus](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/element-plus-ncxnt?fontsize=14&hidenavigation=1&theme=dark)

<br/>
<p align="center">
  <b>Special thanks to the generous sponsorship by:</b>
</p>
<br/>
<table align="center" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <a href="https://bit.dev/?from=element-ui" target="_blank">
          <img width="150px" src="https://user-images.githubusercontent.com/10095631/41342907-e44e7196-6f2f-11e8-92f2-47702dc8f059.png">
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://www.renren.io/?from=element-ui" target="_blank">
          <img width="150px" src="https://user-images.githubusercontent.com/82012629/126620778-0d8ab509-018a-45d7-b8de-a5bac2ad519a.png">
        </a>
      </td>
    </tr>
  </tbody>
</table>

---

## Translations

Element Plus is translated to multiple languages, you can click the badge to help up update the translation or apply to become
a proofreader [![Crowdin](https://badges.crowdin.net/element-plus/localized.svg)](https://crowdin.com/project/element-plus)

## Documentation

You can find for more details, API, and other docs on [https://element-plus.org](https://element-plus.org/)

国内[加速镜像站点](https://element-plus.gitee.io/)

Join our [Discord](https://discord.link/ElementPlus) to start communicating with everybody.

## Breaking change list

You can find the breaking change list here: [Breaking Change List](https://github.com/element-plus/element-plus/issues/162).

## Bootstrap project

With command

```bash
$ pnpm bootstrap
```

the project will install all dependencies

## Website preview

With command

```bash
$ pnpm docs:dev
```

the project will launch website for you to preview all existing component

## Local development

1. With command

```shell
$ pnpm dev
```

will start the local development environment

2. Add your component into `play/play.vue`

> play.vue

```vue
<template>
  <ComponentYouAreDeveloping />
</template>

<script setup lang="ts">
// make sure this component is registered in @element-plus/components
import { ComponentYouAreDeveloping } from '@element-plus/components'
</script>
```

Modify `play.vue` file per your needs to get things work.

## Component migration process

1. Convert the item in https://github.com/element-plus/element-plus/projects/1 to an issue
2. Assign yourself to the issue
3. Author your component by generating new component command below
4. Migrate tests and docs
5. Open a new pull request, fill in the component issue link in 1

## Generate new component

With command

```bash
$ pnpm gen component-name
```

Note the `component-name` must be in `kebab-case`, combining words by replacing each space with a dash.

## Commit template

With command

```bash
pnpm cz
```

Example

```
# [TYPE](SCOPE): [el-component-name] DESCRIPTION#[ISSUE]
# example: feat(components): [el-button] add type for form usage #1234
```

## Licence

Element Plus is open source software licensed as
[MIT](https://github.com/element-plus/element-plus/blob/master/LICENSE).

## Contributors

This project wouldn't exist without our amazing contributors

<a href="https://github.com/element-plus/element-plus/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=element-plus/element-plus" />
</a>
