#! /bin/bash

NAME=$(echo $1 | sed -E 's/([A-Z])/-\1/g' | sed -E 's/^-//g' | tr 'A-Z' 'a-z')

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: pnpm gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/components/$NAME"
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
PROP_NAME=$(echo "${NAME:0:1}" | tr '[:upper:]' '[:lower:]')${NAME:1}

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"
mkdir -p "$DIRNAME/__tests__"

cat > $DIRNAME/src/$INPUT_NAME.vue <<EOF
<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ${PROP_NAME}Props } from './$INPUT_NAME'

defineOptions({
  name: 'El$NAME',
})

const props = defineProps(${PROP_NAME}Props)

// init here
</script>
EOF

cat > $DIRNAME/src/$INPUT_NAME.ts <<EOF
import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type $NAME from './$INPUT_NAME.vue'

export const ${PROP_NAME}Props = buildProps({})
export type ${NAME}Props = ExtractPropTypes<typeof ${PROP_NAME}Props>

export const ${PROP_NAME}Emits = {}
export type ${NAME}Emits = typeof ${PROP_NAME}Emits

export type ${NAME}Instance = InstanceType<typeof $NAME>
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { withInstall } from '@element-plus/utils'
import $NAME from './src/$INPUT_NAME.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const El$NAME: SFCWithInstall<typeof $NAME> = withInstall($NAME)
export default El$NAME

export * from './src/$INPUT_NAME'
EOF

cat > $DIRNAME/__tests__/$INPUT_NAME.test.tsx <<EOF
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import $NAME from '../src/$INPUT_NAME.vue'

const AXIOM = 'Rem is the best girl'

describe('$NAME.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <$NAME>{AXIOM}</$NAME>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
EOF
