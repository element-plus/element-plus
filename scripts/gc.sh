#! /bin/bash

NAME=$(echo $1 | sed -E "s/([A-Z])/-\1/g" | sed -E "s/^-//g" | sed -E "s/_/-/g" | tr "A-Z" "a-z")

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: pnpm gen \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/components/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi

NAME=$(echo $NAME | awk -F'-' '{ for(i=1; i<=NF; i++) { $i = toupper(substr($i,1,1)) tolower(substr($i,2)) } print $0 }' OFS='')
PROP_NAME=$(echo "${NAME:0:1}" | tr '[:upper:]' '[:lower:]')${NAME:1}

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"
mkdir -p "$DIRNAME/style"
mkdir -p "$DIRNAME/__tests__"

cat > $DIRNAME/src/$INPUT_NAME.vue <<EOF
<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ${PROP_NAME}Emits, ${PROP_NAME}Props } from './$INPUT_NAME'

defineOptions({
  name: 'El$NAME',
})

const props = defineProps(${PROP_NAME}Props)
const emit = defineEmits(${PROP_NAME}Emits)

// init here
</script>
EOF

cat > $DIRNAME/src/$INPUT_NAME.ts <<EOF
import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const ${PROP_NAME}Props = buildProps({} as const)
export type ${NAME}Props = ExtractPropTypes<typeof ${PROP_NAME}Props>

export const ${PROP_NAME}Emits = {}
export type ${NAME}Emits = typeof ${PROP_NAME}Emits
EOF

cat > $DIRNAME/src/instance.ts <<EOF
import type $NAME from './$INPUT_NAME.vue'

export type ${NAME}Instance = InstanceType<typeof $NAME> & unknown
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { withInstall } from '@element-plus/utils'
import $NAME from './src/$INPUT_NAME.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const El$NAME: SFCWithInstall<typeof $NAME> = withInstall($NAME)
export default El$NAME

export * from './src/$INPUT_NAME'
export type { ${NAME}Instance } from './src/instance'
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

cat > $DIRNAME/style/index.ts <<EOF
import '@element-plus/components/base/style'
import '@element-plus/theme-chalk/src/$INPUT_NAME.scss'
EOF

cat > $DIRNAME/style/css.ts <<EOF
import '@element-plus/components/base/style/css'
import '@element-plus/theme-chalk/el-$INPUT_NAME.css'
EOF

cat > $FILE_PATH/theme-chalk/src/$INPUT_NAME.scss <<EOF
EOF

perl -0777 -pi -e "s/\n\n/\nexport * from '.\/$INPUT_NAME'\n\n/" $FILE_PATH/components/index.ts

TYPE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../typings" && pwd)

perl -0777 -pi -e "s/\n\s+}/\n    El$NAME: typeof import('element-plus')['El$NAME']\n  }/" $TYPE_PATH/global.d.ts
