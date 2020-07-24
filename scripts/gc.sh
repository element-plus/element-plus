#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: yarn gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi
NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"

cat <<EOF >"$DIRNAME/index.ts"
import { App } from 'vue'
import ${NAME} from './src/index.vue'
export default (app: App) => {
  app.component(${NAME}.name, ${NAME})
}

EOF

cat <<EOF >"$DIRNAME/src/index.vue"
<template>
  <div>
  </div>
</template>
<script lang='ts'>
export default {
  NAME: 'El${NAME}',
    props: { },
    setup(props,ctx) { }
  };
</script>
<style>
</style>

EOF

cat <<EOF >"$DIRNAME/index.stories.js"
import El${NAME} from './index'

export default {
  title: "${NAME}"
}

EOF

cat <<EOF >"$DIRNAME/package.json"
{
  "name": "@element-plus/${INPUT_NAME}",
  "description": "ElementPlus Component ${INPUT_NAME}",
  "version": "0.1.0",
  "main": "dist/index.js",
  "license": "MIT",
  "dependencies": {}
}

EOF
