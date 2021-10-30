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
# for esm we also need link element-plus for dist
pnpm link --global element-plus

# go to your project, link to `element-plus`
cd your-project
pnpm link --global element-plus
```

> More info see [pnpm link](https://pnpm.io/cli/link).
