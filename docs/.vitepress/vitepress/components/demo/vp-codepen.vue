<script setup lang="ts">
import { computed, ref, getCurrentInstance } from 'vue'

const vm = getCurrentInstance()

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
  html: {
    type: String,
    required: true,
  },
})

const js = computed(() => {
  const imports = /(import*) ([^'\n]*) from ([^\n]*)/g
  let component = /export default {([\s\S]*)}/g.exec(
    decodeURIComponent(props.js || '')
  )
  component = ((component && component[1]) || '')
    .replace(/\n {2}/g, '\n')
    .trim()

  return `var Main = {
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
