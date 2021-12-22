import { Comment, h } from 'vue'

export default function renderArrow(showArrow: boolean) {
  return showArrow
    ? h(
        'div',
        {
          ref: 'arrowRef',
          class: 'el-popper__arrow',
          'data-popper-arrow': '',
        },
        null
      )
    : h(Comment, null, '')
}
