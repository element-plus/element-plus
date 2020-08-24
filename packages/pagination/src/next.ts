import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Next',

  props: {
    disabled: Boolean,
    currentPage: {
      type: Number,
      default: 1,
    },
    pageCount: {
      type: Number,
      default: 50,
    },
    nextText: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    console.log('next props: ', props)
  },

  computed: {
    internalDisabled() {
      return this.disabled || this.currentPage === this.pageCount || this.pageCount === 0
    },
  },

  watch: {
    internalDisabled: {
      handler(val) {
        console.log('watch next: ', val)
      },
    },
    currentPage: {
      handler(val) {
        console.log('watch next currentPage: ', val)
      },
    },
    pageCount: {
      handler(val) {
        console.log('watch next pageCount: ', val)
      },
    },
  },

  methods: {
    next() {
      this.$emit('click')
    },
  },

  template: `
    <button
        type="button"
        class="btn-next"
        :disabled="internalDisabled"
        @click.self.prevent="next">
            <span v-if="nextText">{{ nextText }}</span>
            <i v-else class="el-icon el-icon-arrow-right"></i>
    </button>`,
})
