const fs = require("fs");
const path = require("path");

const { NODE_PATH } = process.env;
const { argv } = process;
if (argv.length > 3) {
  console.error("Usage: npm run gc ${componentName}");
  process.exit(1);
}
const targetPath = path.resolve(NODE_PATH, "./src/components");
const componentName = argv[2];
const targetDir = `${targetPath}/${componentName}`;
if (fs.existsSync(targetDir)) {
  console.error("The component already exists, please choose another name");
  process.exit(0);
}

const templateVue = `
<template>
  <div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'El${componentName.slice(0, 1).toUpperCase()}${componentName.slice(1)}',
    props: {
    },
    setup(props,ctx) { }
  };
</script>

<style>
</style>

`;

const templateIndex = `
import { App } from 'vue'
import ${componentName} from './src/index.vue'
export default (app: App) => {
  app.component(${componentName}.name, ${componentName})
}

`;

const templatePkgJSON = `
{
  "name": "eleplus-${componentName}",
  "description": "",
  "version": "0.1.0",
  "main": "./index.ts",
  "license": "MIT",
  "dependencies": {}
}

`;

fs.mkdirSync(targetDir);
fs.mkdirSync(`${targetDir}/src`);
fs.writeFileSync(`${targetDir}/src/index.vue`, templateVue);
fs.writeFileSync(`${targetDir}/index.ts`, templateIndex);
fs.writeFileSync(`${targetDir}/package.json`, templatePkgJSON);
