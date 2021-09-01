<template>
  <component :is="`h${level}`" :class="['ep-heading', map[level]]">
    <a
      v-if="href"
      :href="href"
      class="text-decoration-none text-right text-md-left"
      @click="onClick"
    >
      ¶
    </a>
    {{ content }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Utilities
// import { get } from 'vuex-pathify'
export default defineComponent({
  name: 'AppHeading',
  props: {
    content: String,
    href: String,
    level: String,
  },
  data: () => ({
    map: {
      1: 'text-h3 text-sm-h3 mb-4',
      2: 'text-h4 text-sm-h4 mb-3',
      3: 'text-h5 mb-2',
      4: 'text-h6 mb-2',
      5: 'text-subtitle-1 font-weight-medium mb-2',
    },
  }),
  computed: { hash: () => window.location.hash },
  methods: {
    onClick(e: MouseEvent) {
      e.preventDefault()
      const hash = this.href
      if (this.hash === hash) return
      this.$router.push({ hash })
    },
  },
})
</script>
