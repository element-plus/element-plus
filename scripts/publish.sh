#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version

pnpm build

cd dist/guwave-ui
pnpm publish --no-git-checks
cd -

echo "✅ Publish completed"
