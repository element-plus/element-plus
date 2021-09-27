# DEV FAQ

Here are the problems that are easy to encounter in development.

## If you encounter dependency related issues

```bash
pnpm i
```

## Link local dependencies

```bash
# get dist
pnpm build
cd dist/element-plus
# set cur element-plus to global `node_modules`
pnpm link --global

# go to your project, link to `element-plus`
pnpm link --global element-plus
```

> More info see [link | pnpm](https://pnpm.io/zh/cli/link).
