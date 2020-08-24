import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Prev',

  props: {
    disabled: Boolean,
    currentPage: {
      type: Number,
      default: 1,
    },
    prevText: {
      type: String,
      default: '',
    },
  },

  computed: {
    internalDisabled() {
      return this.disabled || this.currentPage <= 1
    },
  },

  methods: {
    prev() {
      this.$emit('click')
    },
  },

  template: `
    <button
        type="button"
        class="btn-prev"
        :disabled="internalDisabled"
        @click.self.prevent="prev">
            <span v-if="prevText ">{{ prevText }}</span>
            <i v-else class="el-icon el-icon-arrow-left"></i>
    </button>`,
})
