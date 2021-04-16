<!--<template>-->
<!--  <component :is="tag">-->
<!--    <template v-if="type === 'label'">-->
<!--    </template>-->
<!--    <template v-else-if="type === 'content'">-->
<!--      <slot></slot>-->
<!--    </template>-->
<!--    <template v-else-if="type === 'both'">-->
<!--      <slot></slot>-->
<!--    </template>-->
<!--  </component>-->
<!--</template>-->

<script>
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'ElDescriptionsCell',
  props: {
    cell: {
      type: Object,
    },
    tag: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  setup(props) {
    // console.log(props.cell)
  },
  // render() {
  //   return h(this.tag,[
  //
  //   ])
  // },
})
</script>
