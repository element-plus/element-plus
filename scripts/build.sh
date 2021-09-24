#!/bin/sh

set -e

pnpm build:new

rsync -a dist/entry/types/ dist/element-plus/es/
rsync -a dist/entry/types/ dist/element-plus/lib/

echo "copy index.css"
cp dist/element-plus/theme-chalk/index.css dist/element-plus/dist/index.css
cp -R dist/element-plus/theme-chalk/fonts dist/element-plus/dist/fonts

echo "copying source code"
cp -R packages dist/element-plus
cp packages/element-plus/package.json dist/element-plus/package.json

echo "copying README"
cp README.md dist/element-plus
