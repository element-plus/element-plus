#! /usr/bin/bash

# set -e

yarn bootstrap
yarn clean:lib
yarn update:version

# build all packages in case of error

yarn build:mono
yarn build:style

# rsync -a dist/styles/ dist/components/

yarn build:theme
yarn build:locale
yarn build:utils
yarn build:hooks
yarn build:directives
yarn build:tokens
yarn build:lib
yarn build:lib-full
yarn build:helper

exit 0
# release built packages
# cp .npmrc will fail on local run, do not engage local release
cp .npmrc dist/components
cd dist/components
npm publish --access public
cd -

cp .npmrc dist/theme-chalk
cd dist/theme-chalk
npm publish --access public
cd -

cp .npmrc dist/locale
cd dist/locale
npm publish --access public
cd -

cp .npmrc dist/hooks
cd dist/hooks
npm publish --access public
cd -

cp .npmrc dist/directives
cd dist/directives
npm publish --access public
cd -

cp .npmrc dist/utils
cd dist/utils
npm publish --access public
cd -

cp .npmrc dist/tokens
cd dist/tokens
npm publish --access public
cd -

# cd dist/element-plus
# npm publish --access public
# cd -

# Build helpers
# yarn build:helper
