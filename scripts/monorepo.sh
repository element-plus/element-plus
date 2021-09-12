#! /usr/bin/bash

set -e

yarn bootstrap
yarn clean:lib
yarn update:version
yarn gen:version

# build all packages in case of error

yarn build:comps
rsync -a dist/types/components/ dist/element-plus/es/components/
rsync -a dist/types/components/ dist/element-plus/lib/components/

yarn build:style

yarn build:theme
yarn build:locale
yarn build:utils
yarn build:hooks
yarn build:directives
yarn build:tokens
yarn build:full-bundle
yarn build:locale-umd

rsync -a dist/entry/types/ dist/element-plus/es/
rsync -a dist/entry/types/ dist/element-plus/lib/

yarn build:helper

echo "copy index.css"
cp dist/element-plus/theme-chalk/index.css dist/element-plus/dist/index.css
cp -R dist/element-plus/theme-chalk/fonts dist/element-plus/dist/fonts

echo "syncing style.js"
rsync -a dist/styles/es/ dist/element-plus/es/components/
rsync -a dist/styles/lib/ dist/element-plus/lib/components/

echo "copying source code"
cp -R packages dist/element-plus
cp packages/element-plus/package.json dist/element-plus/package.json

echo "copying README"
cp README.md dist/element-plus

cd dist/element-plus
npm publish --access public
cd -

echo "Publish completed"
