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

TEMPLATE_INDEX_VUE="<template>\n
  <div>\n
  </div>\n
</template>\n
<script lang='ts'>\n
export default {\n
  NAME: 'El${NAME}',\n
    props: {\n
    },\n
    setup(props,ctx) { }\n
  };\n
</script>\n
<style>\n
</style>\n
"

TEMPLATE_INDEX_TS="\n
import { App } from 'vue'\n
import ${NAME} from './src/index.vue'\n
export default (app: App) => {\n
  app.component(${NAME}.name, ${NAME})\n
}
"
TEMPLATE_PKG_JSON="\n
{\n
  \"name\": \"@element-plus/${INPUT_NAME}\",\n
  \"description\": \"\",\n
  \"version\": \"0.1.0\",\n
  \"main\": \"./index.ts\",\n
  \"license\": \"MIT\",\n
  \"dependencies\": {}\n
}\n
"

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"
echo $TEMPLATE_INDEX_VUE >>"$DIRNAME/src/index.vue"
echo $TEMPLATE_INDEX_TS >>"$DIRNAME/index.ts"
echo $TEMPLATE_PKG_JSON >>"$DIRNAME/package.json"
