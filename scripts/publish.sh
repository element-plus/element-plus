#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version

pnpm build

find dist/element-plus/packages -type d -name node_modules -print0 | xargs -0 -I {} rm -rf {}

cd dist/element-plus
npm publish --access public
cd -

echo "Publish completed"
