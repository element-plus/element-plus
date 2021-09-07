<script setup lang="ts">
import { withBase } from 'vitepress'
import { shallowRef } from 'vue'

const props = defineProps({
  file: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['loaded', 'error'])

const component = shallowRef()

const load = async () => {
  let c = {}
  try {
    c = await import(`../../examples/${props.file}.vue`)
    emit('loaded', c.default)
  } catch (err) {
    c = await import('./example-not-found.vue')
    emit('error', err)
  }
  component.value = c.default
}

load()
</script>

<template>
  <div class="example-showcase">
    <component v-if="component" :is="component" v-bind="$attrs" />
  </div>
</template>

<style lang="scss" scoped>
.example-showcase {
  padding: 1rem;

  background-color: rgb(255, 255, 255);
  background-image: linear-gradient(
      45deg,
      rgb(249, 249, 250) 25%,
      transparent 25%
    ),
    linear-gradient(135deg, rgb(249, 249, 250) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgb(249, 249, 250) 75%),
    linear-gradient(135deg, transparent 75%, rgb(249, 249, 250) 75%);
  background-size: 20px 20px;
  background-position: 0px 0px, 10px 0px, 10px -10px, 0px 10px;
}
</style>
