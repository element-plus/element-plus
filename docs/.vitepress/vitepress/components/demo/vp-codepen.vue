<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  css: {
    type: String,
    required: true,
  },
  cssPreProcessor: {
    type: String,
    required: true,
  },
  js: {
    type: String,
    required: true,
  },
  jsPreProcessor: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
})

const globalMapper = {
  "'vue'": 'Vue',
  "'element-plus'": 'ElementPlus',
}

const js = computed(() => {
  const decodedJs = decodeURIComponent(props.js || '')
  const imports = /(import*) ([^'\n]*) from ([^\n]*)/g
  const globals = []
  let match
  while ((match = imports.exec(decodedJs))) {
    const [, , members, target] = match

    globals.push(`const ${members} = ${globalMapper[target]};`)
  }
  const componentRegex = decodedJs.includes('export default defineComponent')
    ? /export default defineComponent\({([\s\S]*)}\)/g
    : /export default {([\s\S]*)}/g

  let component = componentRegex.exec(decodedJs)
  component = ((component && component[1]) || '')
    .replace(/\n {2}/g, '\n')
    .trim()

  return `${globals.join('\n')}
var Main = {
  ${component}
};

const app = Vue.createApp(Main);
app.use(ElementPlus);
app.mount("#app");
`
})

const data = computed(() => {
  return JSON.stringify({
    html: `<script src="//unpkg.com/vue@next"><${'/script'}>
<script src="//unpkg.com/element-plus/dist/index.full.js"><${'/script'}>
<div id="app">
  ${decodeURIComponent(props.html).trim()}
</div>
`,
    css: `@import url("//unpkg.com/element-plus/dist/index.css");
${decodeURIComponent(props.css).trim()}
`,
    js: js.value,
    css_pre_processor: props.cssPreProcessor,
    js_pre_processor:
      props.jsPreProcessor === 'ts' ? ' typescript' : props.jsPreProcessor,
  })
})

const formRef = ref(null)

const submit = () => {
  formRef.value.submit?.()
}

defineExpose({
  submit,
})
</script>

<template>
  <form
    ref="formRef"
    action="https://codepen.io/pen/define/"
    method="POST"
    target="_blank"
  >
    <input type="hidden" name="data" :value="data" />
  </form>
</template>
