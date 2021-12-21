/* eslint-disable */
import { utoa } from '../utils'

const scriptRe = /<script[^>]*>([\s\S]*)<\/script>/

export const usePlayGround = (source: string) => {
  const decodeCode = decodeURIComponent(source)
  const result = decodeCode.match(scriptRe)
  let finalCode = ''
  if (result) {
    finalCode = decodeCode.replace(
      scriptRe,
      `<script lang="ts" setup>
import { setupElementPlus } from './element-plus.js'
setupElementPlus()
$1
<\/script>`
    )
  } else {
    finalCode = `${decodeCode}
<script lang="ts" setup>
import { setupElementPlus } from './element-plus.js'
setupElementPlus()
<\/script>
`
  }
  const originCode = {
    'App.vue': finalCode,
  }
  return utoa(JSON.stringify(originCode))
}
