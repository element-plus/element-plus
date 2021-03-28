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
mkdir -p "$DIRNAME/__tests__"

cat > $DIRNAME/src/index.vue <<EOF
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'El${NAME}',
  props: { },
  setup(props) {
    // init here
  },
})
</script>
<style>
</style>
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { App } from 'vue'
import ${NAME} from './src/index.vue'

${NAME}.install = (app: App): void => {
  app.component(${NAME}.name, ${NAME})
}

export default ${NAME}
EOF

cat > $DIRNAME/package.json <<EOF
{
  "name": "@element-plus/$INPUT_NAME",
  "version": "0.0.0",
  "main": "dist/index.js",
  "license": "MIT",
  "peerDependencies": {
    "vue": "^3.0.9"
  },
  "devDependencies": {
    "@vue/test-utils": "^2.0.0-beta.3"
  }
}
EOF

cat > $DIRNAME/__tests__/$INPUT_NAME.spec.ts <<EOF
import { mount } from '@vue/test-utils'
import $NAME from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('$NAME.vue', () => {
  test('render test', () => {
    const wrapper = mount($NAME, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
EOF
