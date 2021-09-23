#!/bin/sh

set -e

pnpm bootstrap
pnpm update:version

sh scripts/build.sh

cd dist/element-plus
npm publish --access public
cd -

echo "Publish completed"
