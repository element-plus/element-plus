<p align="center">
  <img src="https://cdn.rawgit.com/ElemeFE/element/dev/element_logo.svg">
</p>

<p align="center">Element Plus - A Vue.js 3.0 UI library</p>

* 💪 Vue 3.0 Composition API
* 🔥 Written in TypeScript

This project is still under heavy development. Feel free to join us and make your first pull request.

---

Join our [Discord](https://discord.link/ElementPlus) to start communicating with everybody <a href="https://discord.link/ElementPlus" target="_blank" rel="noreferrer noopener" align="center"> ![Discord](https://discord.com/api/guilds/746641026239954954/widget.png?style=shield)</a>

## Bootstrap project
With command
```bash
$ yarn bootstrap
```
the project will install all dependencies and run `lerna bootstrap` to initialize the project

## Storybook preview
With command
```bash
$ yarn storybook
```
the project will launch `@storybook` client for you to preview all existing component

## Component migration process
1. Convert the item in https://github.com/element-plus/element-plus/projects/1 to an issue
2. Assign yourself to the issue
3. Author your component by generating new component command below
4. Migrate tests and docs
5. Open a new pull request, fill in the component issue link in 1

## Generate new component
With command
```bash
$ yarn gen component-name
```

Note the `component-name` must be in `kebab-case`, combining words by replacing each space with a dash.

## Commit template
With command
```bash
yarn cz
```

Example
```
[TYPE](SCOPE):DESCRIPTION#[ISSUE]
# example feat(button):add type 'button' for form usage #1234
```

