#!/bin/sh

set -e

yarn bootstrap
yarn update:version
yarn gen:version

sh scripts/build.sh

cd dist/element-plus
npm publish --access public
cd -

echo "Publish completed"
