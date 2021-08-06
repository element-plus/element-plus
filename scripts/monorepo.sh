#! /usr/bin/bash

yarn bootstrap
yarn clean:lib

yarn build:mono
cd dist/components
npm publish --dry-run
cd -

yarn build:theme
cd dist/theme-chalk
npm publish --dry-run
cd -

yarn build:locale
cd dist/locale
npm publish --dry-run
cd -

yarn build:utils
yarn build:hooks
yarn build:directives
cd dist/hooks
npm publish --dry-run
cd -

cd dist/directives
npm publish --dry-run
cd -

cd dist/utils
npm publish --dry-run
cd -

# yarn build:full-bundle
# cd dist/element-plus
# npm publish --dry-run
# cd -
