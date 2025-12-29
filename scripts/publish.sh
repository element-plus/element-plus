#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version

pnpm build

cd dist/element-plus
pnpm publish --access public --no-git-checks
cd -

cd internal/eslint-config
pnpm publish --access public --no-git-checks
cd -

cd internal/metadata
pnpm build
pnpm publish --access public --no-git-checks
cd -

echo "✅ Publish completed"
