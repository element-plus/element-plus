import { inject } from 'vue'

export default () => {
  const navigateOptions = (direction: string) => {
    if (!this.visible) {
      this.visible = true
      return
    }
    if (this.options.length === 0 || this.filteredOptionsCount === 0) return
    if (!this.optionsAllDisabled) {
      if (direction === 'next') {
        this.hoverIndex++
        if (this.hoverIndex === this.options.length) {
          this.hoverIndex = 0
        }
      } else if (direction === 'prev') {
        this.hoverIndex--
        if (this.hoverIndex < 0) {
          this.hoverIndex = this.options.length - 1
        }
      }
      const option = this.options[this.hoverIndex]
      if (option.disabled === true ||
        option.groupDisabled === true ||
        !option.visible) {
        this.navigateOptions(direction)
      }
      this.$nextTick(() => this.scrollToOption(this.hoverOption))
    }
  }

  const _selectGroup = inject('SelectGroup', {}) as any

  const _select = inject('Select', {}) as any

  return { navigateOptions, _selectGroup, _select }
}
