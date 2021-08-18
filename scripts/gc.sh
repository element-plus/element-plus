#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: yarn gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/components/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi

IFS="-"
read -a arr1 <<< "$NAME"
NORMALIZED_NAME=""
for i in "${arr1[@]}"
do
  IFS="_"
  read -a arr2 <<< "$i"
  for j in "${arr2[@]}"
  do
    C=$(echo "${j:0:1}" | tr "[:lower:]" "[:upper:]")
    NORMALIZED_NAME="$NORMALIZED_NAME${C}${j:1}"
  done
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"
mkdir -p "$DIRNAME/__tests__"

cat > "$DIRNAME/src/index.vue" <<EOF
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

cat > "$DIRNAME/__tests__/$INPUT_NAME.spec.ts" <<EOF
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
