#!/bin/sh

set -e

yarn update:version

sh scripts/build.sh

cd dist/element-plus
npm publish --access public
cd -

echo "Publish completed"
