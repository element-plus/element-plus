import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Jumper',

  data() {
    return {
      userInput: null,
    }
  },

  watch: {
    '$parent.internalCurrentPage'() {
      this.userInput = null
    },
  },

  methods: {
    handleKeyup({ keyCode, target }) {
      // Chrome, Safari, Firefox triggers change event on Enter
      // Hack for IE: https://github.com/ElemeFE/element/issues/11710
      // Drop this method when we no longer supports IE
      if (keyCode === 13) {
        this.handleChange(target.value)
      }
    },
    handleInput(value) {
      this.userInput = value
    },
    handleChange(value) {
      this.$parent.internalCurrentPage = this.$parent.getValidCurrentPage(value)
      this.$parent.emitChange()
      this.userInput = null
    },
  },

  template: `
    <span class="el-pagination__jump">
      前往 <input @keyup='handleKeyup'/> 页
    </span>
  `,
})
