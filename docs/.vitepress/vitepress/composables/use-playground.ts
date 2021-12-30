import { utoa } from '../utils'

const scriptRe = /<script[^>]*>([\s\S]*)<\/script>/

const MAIN_FILE_NAME = 'App.vue'
const SETUP_CODE = `import { setupElementPlus } from './element-plus.js'
setupElementPlus()`

export const usePlayGround = (source: string) => {
  const decodeCode = decodeURIComponent(source)
  const result = decodeCode.match(scriptRe)
  let code: string
  if (result) {
    code = decodeCode.replace(
      scriptRe,
      `<script lang="ts" setup>
${SETUP_CODE}
$1
</script>`
    )
  } else {
    code = `${decodeCode}
<script lang="ts" setup>
${SETUP_CODE}
</script>
`
  }
  const originCode = {
    [MAIN_FILE_NAME]: code,
  }

  const encoded = utoa(JSON.stringify(originCode))
  const link = `https://element-plus.run/#${encoded}`
  return {
    encoded,
    link,
  }
}
