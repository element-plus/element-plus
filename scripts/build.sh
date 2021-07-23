#! /usr/bin/bash


# echo `node ./build/build.js ./packages/button`
# find all folders under root/packages excludes
# *utils, __mocks__ directives hooks locale theme*
# which means the result will not contain folder name includes utils
yarn bootstrap
yarn clean:lib
yarn build:type

yarn build:lib
yarn build:lib-full

yarn build:components

find ./packages/utils -type f ! -name '*.test.ts' ! -name 'package.json' -print0 \
| xargs -P2 -0 -I {} node ./build/build-util.js {}

node ./build/build.entry.js

find ./packages/locale -type f ! -name '*.spec.ts' ! -name 'package.json' ! -name '.DS_Store' -print0 \
| xargs -P2 -0 -I {} node ./build/build-util.js {}

yarn build:locale-umd

yarn build:theme

yarn build:helper

# Post build cp type definitions
touch temp
find dist -type d ! -name 'element-plus' -depth 1 -print0 | xargs -0 -I {} sh -c "basename {}" > temp

input="./temp"

mkdir -p tempDir
while IFS= read -r line
do
  filepath="el-$line"
  case "$line" in
    directives|locale|utils|hooks)
      filepath="$line"
      ;;
  esac
  mv "dist/$line" "tempDir/$filepath"
  cp -nR "tempDir/" es
  cp -nR "tempDir/" lib

done < "$input"

cp packages/utils/types.ts es/utils/
cp dist/element-plus/* lib
cp packages/utils/types.ts lib/utils/
cp dist/element-plus/* es


# Post build cleanup 
rm -rf temp
rm -rf tempDir
