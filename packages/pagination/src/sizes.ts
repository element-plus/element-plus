import { defineComponent } from 'vue'
import { isEqual } from 'lodash'
export default defineComponent({
  name: 'Sizes',

  props: {
    // pageSize:Number,
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40, 50, 100]
      },
    },
    popperClass: {
      type: String,
      default: '',
    },
    disabled: Boolean,
  },

  setup(props) {
    props.pageSizes.map(x => console.log(x))
    console.log('sizes props:', props)
  },

  watch: {
    pageSizes: {
      immediate: true,
      handler(newVal, oldVal) {
        if (isEqual(newVal, oldVal)) return
        if (Array.isArray(newVal)) {
          this.pageSize = newVal.indexOf(this.pageSize) > -1
            ? this.pageSize
            : this.pageSizes[0]
        }
      },
    },
  },

  methods: {
    handleChange(val) {
      let newPageSize = val.target.value
      if (newPageSize !== this.pageSize) {
        this.pageSize = newPageSize = parseInt(newPageSize, 10)
        this.userChangePageSize = true
        this.$parent.internalPageSize = this.pageSize
        this.$parent.emitChange()
      }
    },
  },

  template: `
    <span class="el-pagination__sizes">
      <select @input="handleChange">
          <option v-for="item in pageSizes" :value="item" :key="item">
            {{ item }}
          </option>
      </select>
    </span>`,
})
