#! /usr/bin/bash


# echo `node ./build/build.js ./packages/button`
# find all folders under root/packages excludes
# *utils, __mocks__ directives hooks locale theme*
# which means the result will not contain folder name includes utils

yarn bootstrap

yarn clean:lib
yarn build:esm-bundle
tar --exclude=index.esm.js -zcvf  ./es.gz ./lib
mkdir -p es
tar -zxvf ./es.gz --strip-component 2 -C ./es
yarn build:lib
yarn build:lib-full

# -P6 stands for 6 maximum parallel, with
# node .build/build.js command
find './packages' -type d -depth 1 ! -name '*util*' ! -name '__mocks__' ! -name 'locale' ! -name 'theme*' -print0 | xargs -I {} -P6 -0 node ./build/build.comps.js {}

node ./build/build.entry.js

yarn build:utils

yarn build:locale

yarn build:locale-umd

yarn build:theme

# Post build clean up

rm ./es.gz
