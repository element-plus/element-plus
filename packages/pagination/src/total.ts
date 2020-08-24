import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Total',

  props: {
    type: {
      type: String,
      default: '',
      validator: (val: string) => {
        return ['', 'primary', 'success', 'warning', 'info', 'error'].includes(val)
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    total: {
      type: Number,
      default: 1000,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    function handleClick(event: Event) {
      if (!props.disabled) {
        emit('click', event)
      }
    }
    return {
      handleClick,
    }
  },

  template: `
  <span class="el-pagination__total">{{ total }}</span>
  `,
})
