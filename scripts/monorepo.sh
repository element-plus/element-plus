#! /usr/bin/bash

set -e

yarn bootstrap
yarn clean:lib
# yarn update:version

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
yarn build:helper

echo 'copy index.css'
cp dist/element-plus/theme-chalk/index.css dist/element-plus/dist/index.css

echo 'syncing style.css'
rsync -a dist/styles/es/ dist/element-plus/es/components/
rsync -a dist/styles/lib/ dist/element-plus/lib/components/

cp -R packages dist/element-plus
cp packages/element-plus/package.json dist/element-plus/package.json

exit 0

# cd dist/element-plus
# npm publish --access public
# cd -

