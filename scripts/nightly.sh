sed -i 's/"name": "element-plus",/"name": "@element-plus\/nightly",/' packages/element-plus/package.json
sed -i '2s/element-plus/@element-plus\/nightly/' internal/build-constants/src/pkg.ts

# remove line 14 to 22, will not publish eslint-config and metadata to npm on nightly
sed -i '14,22d' scripts/publish.sh
