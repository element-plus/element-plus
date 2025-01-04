import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { useCalcInputWidth } from '../use-calc-input-width'

const AXIOM = 'Rem is the best girl'

describe('useCalcInputWidth', () => {
  it('create', async () => {
    const inputValue = ref()
    const { calculatorRef, inputStyle } = useCalcInputWidth()

    const wrapper = mount(() => (
      <div
        style={{
          position: 'relative',
          width: '100px',
        }}
      >
        <input v-model={inputValue.value} style={inputStyle.value} />
        <span
          ref={calculatorRef}
          aria-hidden="true"
          v-text={inputValue.value}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            maxWidth: '100%',
            visibility: 'hidden',
            whiteSpace: 'pre',
            overflow: 'hidden',
          }}
        />
      </div>
    ))

    expect(wrapper.find('input').element.style.minWidth).toBe('11px')

    await wrapper.find('input').trigger('focus')
    await wrapper.find('input').setValue(AXIOM)
    expect(inputValue.value).toBe(AXIOM)
    expect(calculatorRef.value?.innerHTML).toBe(AXIOM)
  })
})
