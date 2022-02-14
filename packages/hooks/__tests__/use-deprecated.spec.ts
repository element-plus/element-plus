import { computed, defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { debugWarn } from '@element-plus/utils'
import { useDeprecated } from '../use-deprecated'

jest.mock('@element-plus/utils/error', () => {
  return {
    debugWarn: jest.fn(),
  }
})

const DummyComponent = defineComponent({
  props: {
    shouldWarn: Boolean,
  },
  setup(props) {
    useDeprecated(
      {
        from: 'oldApi',
        replacement: 'newApi',
        scope: 'dummyComponent',
        version: 'some version',
        ref: '',
      },
      computed(() => props.shouldWarn)
    )
  },
  template: `<div>Rem is the best girl</div>`,
})

describe('useDeprecated', () => {
  beforeEach(() => {
    ;(debugWarn as jest.Mock).mockClear()
  })
  it('should warn when condition is true', async () => {
    mount(DummyComponent, {
      props: {
        shouldWarn: true,
      },
    })
    await nextTick()
    expect(debugWarn).toHaveBeenCalled()
  })

  it('should not warn when condition is false', async () => {
    mount(DummyComponent)
    await nextTick()
    expect(debugWarn).not.toHaveBeenCalled()
  })
})
