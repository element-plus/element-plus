import { Comment, h, nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, test, vi } from 'vitest'
import { EVENT_CODE } from '@element-plus/constants'
import triggerEvent from '@element-plus/test-utils/trigger-event'
import { ArrowDown, Check, CircleClose } from '@element-plus/icons-vue'
import { usePopperContainerId } from '@element-plus/hooks'
import { hasClass } from '@element-plus/utils'
import ElForm, { ElFormItem } from '@element-plus/components/form'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElTag from '@element-plus/components/tag'
import ElTooltip from '@element-plus/components/tooltip'
import Cascader from '../src/cascader.vue'

import type { VNode } from 'vue'
import type ElCascader from '@element-plus/components/cascader'

vi.mock('lodash-unified', async () => {
  return {
    ...((await vi.importActual('lodash-unified')) as Record<string, any>),
    debounce: vi.fn((fn) => {
      fn.cancel = vi.fn()
      fn.flush = vi.fn()
      return fn
    }),
  }
})

const OPTIONS = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
      },
      {
        value: 'wenzhou',
        label: 'Wenzhou',
      },
    ],
  },
]

const AXIOM = 'Rem is the best girl'

const TRIGGER = '.el-cascader'
const NODE = '.el-cascader-node'
const NODE_LABEL = '.el-cascader-node__label'
const TAG = '.el-tag'
const SUGGESTION_ITEM = '.el-cascader__suggestion-item'
const SUGGESTION_PANEL = '.el-cascader__suggestion-panel'
const DROPDOWN = '.el-cascader__dropdown'

const _mount = (render: () => VNode) =>
  mount(render, {
    attachTo: document.body,
  })

afterEach(() => {
  document.body.innerHTML = ''
})

describe('Cascader.vue', () => {
  test('toggle popper visible', async () => {
    const handleVisibleChange = vi.fn()
    const wrapper = _mount(() => (
      <Cascader onVisibleChange={handleVisibleChange} />
    ))

    const trigger = wrapper.find(TRIGGER)
    const dropdown = wrapper.findComponent(ArrowDown).element as HTMLDivElement

    await trigger.trigger('click')
    expect(dropdown.style.display).not.toBe('none')
    expect(handleVisibleChange).toBeCalledWith(true)
    await trigger.trigger('click')
    expect(handleVisibleChange).toBeCalledWith(false)
    await trigger.trigger('click')
    document.body.click()
    expect(handleVisibleChange).toBeCalledWith(false)
  })

  test('expand and check', async () => {
    const handleChange = vi.fn()
    const handleExpandChange = vi.fn()
    const value = ref([])

    const wrapper = _mount(() => (
      <Cascader
        v-model={value.value}
        options={OPTIONS}
        onChange={handleChange}
        onExpandChange={handleExpandChange}
      />
    ))

    const trigger = wrapper.find(TRIGGER)

    await trigger.trigger('click')
    ;(document.querySelector(NODE) as HTMLElement).click()
    await nextTick()
    expect(handleExpandChange).toBeCalledWith(['zhejiang'])
    ;(document.querySelectorAll(NODE)[1] as HTMLElement).click()
    await nextTick()
    expect(handleChange).toBeCalledWith(['zhejiang', 'hangzhou'])
    expect(value.value).toEqual(['zhejiang', 'hangzhou'])
    expect(wrapper.find('input').element.value).toBe('Zhejiang / Hangzhou')
  })

  test('with default value', async () => {
    const value = ref(['zhejiang', 'hangzhou'])
    const wrapper = _mount(() => (
      <Cascader v-model={value.value} options={OPTIONS} />
    ))

    await nextTick()
    expect(wrapper.find('input').element.value).toBe('Zhejiang / Hangzhou')
    value.value = ['zhejiang', 'ningbo']
    await nextTick()
    expect(wrapper.find('input').element.value).toBe('Zhejiang / Ningbo')
  })

  test('options change', async () => {
    const value = ref(['zhejiang', 'hangzhou'])
    const options = ref(OPTIONS)
    const wrapper = _mount(() => (
      <Cascader v-model={value.value} options={options.value} />
    ))

    options.value = []
    await nextTick()
    expect(wrapper.find('input').element.value).toBe('')
  })

  test('disabled', async () => {
    const handleVisibleChange = vi.fn()
    const wrapper = _mount(() => (
      <Cascader disabled onVisibleChange={handleVisibleChange} />
    ))

    await wrapper.find(TRIGGER).trigger('click')
    expect(handleVisibleChange).not.toBeCalled()
    expect(wrapper.find('input[disabled]').exists()).toBe(true)
  })

  test('custom placeholder', async () => {
    const wrapper = _mount(() => <Cascader placeholder={AXIOM} />)

    expect(wrapper.find('input').attributes().placeholder).toBe(AXIOM)
  })

  test('custom placeholder with empty string', async () => {
    const wrapper = _mount(() => <Cascader placeholder={''} />)
    expect(wrapper.find('input').attributes().placeholder).toBe('')
    expect(wrapper.find('input').element.value).toBe('')
  })

  test('clearable', async () => {
    const isClear = ref(false)

    const wrapper = _mount(() => (
      <Cascader
        modelValue={['zhejiang', 'hangzhou']}
        clearable
        options={OPTIONS}
        onClear={() => {
          isClear.value = true
        }}
      />
    ))

    const trigger = wrapper.find(TRIGGER)
    expect(wrapper.findComponent(ArrowDown).exists()).toBe(true)
    await trigger.trigger('mouseenter')
    expect(wrapper.findComponent(ArrowDown).exists()).toBe(false)
    expect(isClear.value).toBe(false)
    await wrapper.findComponent(CircleClose).trigger('click')
    expect(wrapper.find('input').element.value).toBe('')
    expect(
      wrapper.findComponent(Cascader).vm.getCheckedNodes(false)?.length
    ).toBe(0)
    await trigger.trigger('mouseleave')
    await trigger.trigger('mouseenter')
    await expect(wrapper.findComponent(CircleClose).exists()).toBe(false)
    expect(isClear.value).toBe(true)
  })

  test('show last level label', async () => {
    const wrapper = _mount(() => (
      <Cascader
        modelValue={['zhejiang', 'hangzhou']}
        showAllLevels={false}
        options={OPTIONS}
      />
    ))

    await nextTick()
    expect(wrapper.find('input').element.value).toBe('Hangzhou')
  })

  test('multiple mode', async () => {
    const value = ref([
      ['zhejiang', 'hangzhou'],
      ['zhejiang', 'ningbo'],
    ])
    const props = { multiple: true }
    const wrapper = _mount(() => (
      <Cascader v-model={value.value} props={props} options={OPTIONS} />
    ))

    await nextTick()
    const tags = wrapper.findAll(TAG)
    const [firstTag, secondTag] = tags
    expect(tags.length).toBe(2)
    expect(firstTag.text()).toBe('Zhejiang / Hangzhou')
    expect(secondTag.text()).toBe('Zhejiang / Ningbo')
    await firstTag.find('.el-tag__close').trigger('click')
    expect(wrapper.findAll(TAG).length).toBe(1)
    expect(value.value).toEqual([['zhejiang', 'ningbo']])
  })

  test('collapse tags', async () => {
    const props = { multiple: true }
    const wrapper = _mount(() => (
      <Cascader
        modelValue={[
          ['zhejiang', 'hangzhou'],
          ['zhejiang', 'ningbo'],
          ['zhejiang', 'wenzhou'],
        ]}
        collapseTags
        props={props}
        options={OPTIONS}
      />
    ))

    await nextTick()
    const tags = wrapper.findAll(TAG).filter((item) => {
      return !hasClass(item.element, 'in-tooltip')
    })
    expect(tags[0].text()).toBe('Zhejiang / Hangzhou')
    expect(tags.length).toBe(2)
  })

  test('collapse tags tooltip', async () => {
    const props = { multiple: true }
    _mount(() => (
      <Cascader
        modelValue={[
          ['zhejiang', 'hangzhou'],
          ['zhejiang', 'ningbo'],
          ['zhejiang', 'wenzhou'],
        ]}
        collapseTags
        collapseTagsTooltip
        props={props}
        options={OPTIONS}
      />
    ))

    await nextTick()
    const tooltipTags = document.querySelectorAll(
      `.el-cascader__collapse-tags ${TAG}`
    )
    expect(tooltipTags.length).toBe(2)
    expect(tooltipTags[0].textContent).toBe('Zhejiang / Ningbo')
    expect(tooltipTags[1].textContent).toBe('Zhejiang / Wenzhou')
  })

  test('max collapse tags', async () => {
    const props = { multiple: true }
    const wrapper = _mount(() => (
      <Cascader
        modelValue={[
          ['zhejiang', 'hangzhou'],
          ['zhejiang', 'ningbo'],
          ['zhejiang', 'wenzhou'],
        ]}
        collapseTags
        collapseTagsTooltip
        props={props}
        options={OPTIONS}
        maxCollapseTags={2}
      />
    ))

    await nextTick()
    const tags = wrapper.findAll(TAG)
    const [firstTag, secondTag, thirdTag] = tags
    expect(tags.length).toBe(3)
    expect(firstTag.text()).toBe('Zhejiang / Hangzhou')
    expect(secondTag.text()).toBe('Zhejiang / Ningbo')
    expect(thirdTag.text()).toBe('+ 1')
    const tooltipTags = document.querySelectorAll(
      `.el-cascader__collapse-tags ${TAG}`
    )
    expect(tooltipTags.length).toBe(1)
  })

  test('max collapse tags tooltip height', async () => {
    const props = { multiple: true }
    const options = [
      ...OPTIONS,
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
          },
          {
            value: 'suzhou',
            label: 'Suzhou',
          },
          {
            value: 'zhenjiang',
            label: 'Zhenjiang',
          },
          {
            value: 'wuxi',
            label: 'Wuxi',
          },
        ],
      },
      {
        value: 'guangdong',
        label: 'Guangdong',
        children: [
          {
            value: 'guangzhou',
            label: 'Guangzhou',
          },
          {
            value: 'shenzhen',
            label: 'Shenzhen',
          },
          {
            value: 'zhuhai',
            label: 'Zhuhai',
          },
        ],
      },
    ]
    const wrapper = _mount(() => (
      <Cascader
        modelValue={[
          ['zhejiang', 'hangzhou'],
          ['zhejiang', 'ningbo'],
          ['zhejiang', 'wenzhou'],
          ['jiangsu', 'nanjing'],
          ['jiangsu', 'suzhou'],
          ['jiangsu', 'zhenjiang'],
          ['jiangsu', 'wuxi'],
          ['guangdong', 'guangzhou'],
          ['guangdong', 'shenzhen'],
          ['guangdong', 'zhuhai'],
        ]}
        collapseTags
        collapseTagsTooltip
        props={props}
        options={options}
        maxCollapseTagsTooltipHeight={200}
      />
    ))
    await nextTick()
    const tagTriggers = wrapper.findAllComponents(ElTag)
    const collapseTags = tagTriggers.filter((item) => {
      return !hasClass(item.element, 'is-closable')
    })
    expect(collapseTags.length).toBe(1)
    const collapseTag = collapseTags[0]
    await collapseTag.trigger('hover')
    const scrollbars = wrapper.findAllComponents(ElScrollbar).filter((item) => {
      return !hasClass(item.element, 'el-cascader-menu')
    })
    expect(scrollbars.length).toBe(1)
    const scrollbar = scrollbars[0]
    expect(scrollbar).toBeDefined()
    expect(scrollbar?.vm.maxHeight).toBe(200)
    const tooltip = await collapseTag.getComponent(ElTooltip)
    expect(tooltip).toBeDefined()
    await tooltip.trigger('hover')
    expect(
      scrollbar?.find('.el-scrollbar__wrap').attributes('style')
    ).toContain('max-height: 200px;')
  })

  test('tag type', async () => {
    const props = { multiple: true }
    const wrapper = _mount(() => (
      <Cascader
        modelValue={[['zhejiang', 'hangzhou']]}
        tagType="success"
        props={props}
        options={OPTIONS}
      />
    ))

    await nextTick()
    expect(wrapper.find('.el-tag').classes()).toContain('el-tag--success')
  })

  test('tag effect', async () => {
    const props = { multiple: true }
    const wrapper = _mount(() => (
      <Cascader
        modelValue={[['zhejiang', 'hangzhou']]}
        tagEffect="dark"
        props={props}
        options={OPTIONS}
      />
    ))

    await nextTick()
    expect(wrapper.find('.el-tag').classes()).toContain('el-tag--dark')
  })

  test('should expose delete-tag through slot & be able to delete a value', async () => {
    const value = ref(['hangzhou', 'wenzhou'])
    const wrapper = _mount(() => (
      <Cascader
        v-model={value.value}
        options={[
          {
            value: 'zhejiang',
            label: 'Zhejiang',
          },
          {
            value: 'hangzhou',
            label: 'Hangzhou',
          },
          {
            value: 'ningbo',
            label: 'Ningbo',
          },
          {
            value: 'wenzhou',
            label: 'Wenzhou',
          },
        ]}
        props={{ multiple: true }}
      >
        {{
          tag: ({ data, deleteTag }: any) =>
            data.map((option: any) => (
              <div class="no-tag" onClick={() => deleteTag(option)}>
                {option.text}
              </div>
            )),
        }}
      </Cascader>
    ))
    await nextTick()
    const cascader = wrapper.findComponent(Cascader)
    const tags = wrapper.findAll('.no-tag')
    expect(tags).toHaveLength(2)
    expect(cascader.vm.modelValue).toEqual(['hangzhou', 'wenzhou'])

    await tags[0].trigger('click')
    expect(wrapper.findAll('.no-tag')).toHaveLength(1)
    expect(cascader.vm.modelValue).toEqual([['wenzhou']])
  })

  test('filterable', async () => {
    const value = ref([])
    const wrapper = _mount(() => (
      <Cascader v-model={value.value} filterable options={OPTIONS} />
    ))

    const input = wrapper.find('input')
    input.element.value = 'Ni'
    await input.trigger('compositionstart')
    await input.trigger('input')
    input.element.value = 'Ha'
    await input.trigger('compositionupdate')
    await input.trigger('input')
    await input.trigger('compositionend')
    const suggestions = document.querySelectorAll(
      SUGGESTION_ITEM
    ) as NodeListOf<HTMLElement>
    const hzSuggestion = suggestions[0]
    expect(suggestions.length).toBe(1)
    expect(hzSuggestion.textContent).toBe('Zhejiang / Hangzhou')
    hzSuggestion.click()
    await nextTick()
    expect(wrapper.findComponent(Check).exists()).toBeTruthy()
    expect(value.value).toEqual(['zhejiang', 'hangzhou'])
    hzSuggestion.click()
    await nextTick()
    expect(value.value).toEqual(['zhejiang', 'hangzhou'])
  })

  test('filterable in multiple mode', async () => {
    const value = ref([])
    const props = { multiple: true }
    const wrapper = _mount(() => (
      <Cascader
        v-model={value.value}
        props={props}
        filterable
        options={OPTIONS}
      />
    ))

    const input = wrapper.find('.el-cascader__search-input')
    ;(input.element as HTMLInputElement).value = 'Ha'
    await input.trigger('input')
    await nextTick()
    const hzSuggestion = document.querySelector(SUGGESTION_ITEM) as HTMLElement
    hzSuggestion.click()
    await nextTick()
    expect(value.value).toEqual([['zhejiang', 'hangzhou']])
    hzSuggestion.click()
    await nextTick()
    expect(value.value).toEqual([])
  })

  test('filter method', async () => {
    const filterMethod = vi.fn((node, keyword) => {
      const { text, value } = node
      return text.includes(keyword) || value.includes(keyword)
    })
    const wrapper = _mount(() => (
      <Cascader filterMethod={filterMethod} filterable options={OPTIONS} />
    ))

    const input = wrapper.find('input')
    input.element.value = 'ha'
    await input.trigger('input')
    const hzSuggestion = document.querySelector(SUGGESTION_ITEM) as HTMLElement
    expect(filterMethod).toBeCalled()
    expect(hzSuggestion.textContent).toBe('Zhejiang / Hangzhou')
  })

  test('filterable keyboard selection', async () => {
    const value = ref([])
    const wrapper = _mount(() => (
      <Cascader v-model={value.value} filterable options={OPTIONS} />
    ))

    const input = wrapper.find('input')
    const dropdown = document.querySelector(DROPDOWN)!
    input.element.value = 'h'
    await input.trigger('input')
    const suggestionsPanel = document.querySelector(
      SUGGESTION_PANEL
    ) as HTMLDivElement
    const suggestions = dropdown.querySelectorAll(
      SUGGESTION_ITEM
    ) as NodeListOf<HTMLElement>
    const hzSuggestion = suggestions[0]
    triggerEvent(suggestionsPanel, 'keydown', EVENT_CODE.down)
    expect(document.activeElement!.textContent).toBe('Zhejiang / Hangzhou')
    triggerEvent(hzSuggestion, 'keydown', EVENT_CODE.down)
    expect(document.activeElement!.textContent).toBe('Zhejiang / Ningbo')
    triggerEvent(hzSuggestion, 'keydown', EVENT_CODE.enter)
    await nextTick()
    expect(value.value).toEqual(['zhejiang', 'hangzhou'])
  })

  describe('teleported API', () => {
    it('should mount on popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      const value = ref([])
      _mount(() => (
        <Cascader v-model={value.value} filterable options={OPTIONS} />
      ))

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value)!.innerHTML).not.toBe(
        ''
      )
    })

    it('should not mount on the popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      const value = ref([])
      _mount(() => (
        <Cascader
          v-model={value.value}
          filterable
          teleported={false}
          options={OPTIONS}
        />
      ))

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value)!.innerHTML).toBe('')
    })
  })

  test('placeholder disappear when resetForm', async () => {
    const model = reactive({
      name: new Array<string>(),
    })

    const wrapper = _mount(() => (
      <ElForm model={model}>
        <ElFormItem label="Activity name" prop="name">
          <Cascader
            v-model={model.name}
            options={OPTIONS}
            filterable
            placeholder={AXIOM}
          />
        </ElFormItem>
      </ElForm>
    ))

    model.name = ['zhejiang', 'hangzhou']
    await nextTick()
    expect(wrapper.find('input').element.placeholder).toBe('')

    wrapper.findComponent(ElForm).vm.$.exposed!.resetFields()
    await nextTick()
    expect(wrapper.find('input').element.placeholder).toBe(AXIOM)
  })

  test('should be able to trigger togglePopperVisible outside the component', async () => {
    let cascader: InstanceType<typeof ElCascader>
    const clickFn = () => {
      cascader.togglePopperVisible()
    }
    const wrapper = _mount(() => (
      <div>
        <Cascader options={OPTIONS} />
        <button onClick={clickFn} />
      </div>
    ))

    cascader = wrapper.findComponent(Cascader).vm
    const dropdown = wrapper.findComponent(ArrowDown).element as HTMLDivElement
    expect(dropdown.style.display).not.toBe('none')
    const button = wrapper.find('button')
    await button.trigger('click')
    await nextTick()
    expect(dropdown?.style.display).not.toBe('none')
  })
  test('height should be changed by size when multiple', async () => {
    const cascaderSize = ref<'small' | 'default' | 'large'>('default')
    const props = { multiple: true }
    const wrapper = _mount(() => (
      <Cascader props={props} size={cascaderSize.value} />
    ))
    await nextTick()
    const inputEl = wrapper.find('input').element as HTMLElement
    const sizeMap: Record<string, number> = {
      small: 24,
      default: 32,
      large: 40,
    }

    for (const size in sizeMap) {
      cascaderSize.value = size as 'small' | 'default' | 'large'
      inputEl.style.setProperty('--el-input-height', `${sizeMap[size]}px`)
      // first is wait for the watch callback function of realSize which is to be called after nextTick
      await nextTick()
      // second is wait for input to set the height attribute
      await nextTick()
      expect(inputEl.style.height).toEqual(`${sizeMap[size] - 2}px`)
    }
  })

  describe('render empty slot', () => {
    it('correct render panel empty slot', async () => {
      const wrapper = _mount(() => (
        <Cascader>
          {{
            empty: () => <div>-=-empty-=-</div>,
          }}
        </Cascader>
      ))

      await wrapper.find(TRIGGER).trigger('click')
      const emptySlotEl = document.querySelector(
        '.el-cascader-menu__empty-text'
      )
      expect(emptySlotEl?.textContent).toBe('-=-empty-=-')
    })

    it('correct render menu list empty slot', async () => {
      const wrapper = _mount(() => (
        <Cascader filterable>
          {{
            empty: () => <div>-=-empty-=-no-data</div>,
          }}
        </Cascader>
      ))

      const input = wrapper.find('input')
      await input.trigger('focus')
      const emptySlotEl = document.querySelector(
        '.el-cascader-menu__empty-text'
      )
      expect(emptySlotEl?.textContent).toBe('-=-empty-=-no-data')
    })
  })

  describe('render default slot', () => {
    it('should render default slot correctly', async () => {
      const wrapper = _mount(() => (
        <Cascader options={OPTIONS}>
          {{
            default: () => <>default slot!</>,
          }}
        </Cascader>
      ))

      await wrapper.find(TRIGGER).trigger('click')
      const defaultSlotEl = document.querySelector('.el-cascader-node__label')
      expect(defaultSlotEl?.textContent).toBe('default slot!')
    })

    it('should fallback to option label when it has v-if comment', async () => {
      const wrapper = _mount(() => (
        <Cascader options={OPTIONS}>
          {{
            default: () => false && <div>{AXIOM}</div>,
          }}
        </Cascader>
      ))

      await wrapper.find(TRIGGER).trigger('click')
      const defaultSlotEl = document.querySelector('.el-cascader-node__label')
      expect(defaultSlotEl?.textContent).toBe(OPTIONS[0].label)
    })

    it('should fallback to option label when default has a single comment', async () => {
      const wrapper = _mount(() => (
        <Cascader options={OPTIONS}>
          {{
            default: () => h(Comment, AXIOM),
          }}
        </Cascader>
      ))

      await wrapper.find(TRIGGER).trigger('click')
      const defaultSlotEl = document.querySelector('.el-cascader-node__label')
      expect(defaultSlotEl?.textContent).toBe(OPTIONS[0].label)
    })
  })

  describe('render prefix slot', () => {
    it('correct render prefix slot', async () => {
      _mount(() => (
        <Cascader>
          {{
            prefix: () => <div>-=-prefix-=-</div>,
          }}
        </Cascader>
      ))

      const prefixSlotEl = document.querySelector('.el-input__prefix-inner')
      expect(prefixSlotEl?.textContent).toBe('-=-prefix-=-')
    })
  })
  describe('Cascader - tag slot displays top-level labels', () => {
    it('should render tags with only top-level labels', async () => {
      const value = ref<string[][]>([])
      const getTopLevelTags = (data: any[]): any[] => {
        const set: Set<string> = new Set()
        for (const datum of data) {
          let parent = datum.node.parent
          while (parent && parent.level !== 1) {
            parent = parent.parent
          }
          const label = parent?.data?.label
          label && set.add(label)
        }
        return [...set]
      }
      const wrapper = _mount(() => (
        <Cascader
          v-model={value.value}
          options={OPTIONS}
          props={{ multiple: true }}
          clearable
        >
          {{
            tag: ({ data }: any) => {
              const list = getTopLevelTags(data)
              return list.map((item: string) => (
                <ElTag key={item}>{item}</ElTag>
              ))
            },
          }}
        </Cascader>
      ))
      const trigger = wrapper.find(TRIGGER)
      await trigger.trigger('click')
      await nextTick()
      const firstNode = document.querySelector(NODE) as HTMLElement
      expect(firstNode).not.toBeNull()
      firstNode.click()
      await nextTick()
      value.value = [
        ['zhejiang', 'hangzhou'],
        ['zhejiang', 'ningbo'],
        ['zhejiang', 'wenzhou'],
      ]
      await nextTick()
      await nextTick()
      const tags = wrapper.findAll('span.el-tag')
      expect(tags.length).toBe(1)
      expect(tags[0].text()).toContain('Zhejiang')
    })
  })

  describe('dynamic options & filterable', () => {
    it('should render dynamic options correctly', async () => {
      const value = ref<any[]>([])
      const options = ref<any[]>([
        {
          value: 'guide',
          label: 'Guide',
        },
        {
          value: 'design',
          label: 'Design',
        },
        {
          value: 'development',
          label: 'Development',
        },
      ])
      const wrapper = _mount(() => (
        <Cascader
          v-model={value.value}
          filterable
          options={options.value}
          teleported={false}
        />
      ))
      const cascaderNodes = wrapper.findAll('.el-cascader-node')

      expect(cascaderNodes.length).toBe(3)
      expect(cascaderNodes[0].text()).toBe('Guide')
      expect(cascaderNodes[1].text()).toBe('Design')
      expect(cascaderNodes[2].text()).toBe('Development')

      options.value.push({
        value: 'testing',
        label: 'Testing',
      })
      await nextTick()
      const newCascaderNodes = wrapper.findAll('.el-cascader-node')
      expect(newCascaderNodes.length).toBe(4)
      expect(newCascaderNodes[3].text()).toBe('Testing')
    })
  })

  describe('Cascader - click to select node', () => {
    it('selects parent node directly on click', async () => {
      const value = ref([])
      const props = { checkStrictly: true, checkOnClickNode: true }
      const wrapper = _mount(() => (
        <Cascader v-model={value.value} options={OPTIONS} props={props} />
      ))
      const trigger = wrapper.find(TRIGGER)
      await trigger.trigger('click')
      await nextTick()
      const nodes = document.querySelectorAll(NODE_LABEL)
      await (nodes[0] as HTMLElement).click()
      await nextTick()
      const newNodes = document.querySelectorAll(NODE_LABEL)
      const hangzhouNode = Array.from(newNodes).find((el) =>
        el.textContent?.includes('Hangzhou')
      )
      expect(hangzhouNode).toBeTruthy()
      await (hangzhouNode as HTMLElement).click()
      await nextTick()
      expect(value.value).toEqual(['zhejiang', 'hangzhou'])
      const input = wrapper.find('input')
      expect((input.element as HTMLInputElement).value).toBe(
        'Zhejiang / Hangzhou'
      )
    })

    it('hides radio but still selects node on click when showPrefix is false', async () => {
      const value = ref([])
      const props = {
        checkStrictly: true,
        checkOnClickNode: true,
        showPrefix: false,
      }
      const wrapper = _mount(() => (
        <Cascader v-model={value.value} options={OPTIONS} props={props} />
      ))
      const trigger = wrapper.find(TRIGGER)
      await trigger.trigger('click')
      await nextTick()
      const radios = wrapper.findAll('input[type="radio"]')
      expect(radios.length).toBe(0)
      const nodes = document.querySelectorAll(NODE_LABEL)
      await (nodes[0] as HTMLElement).click()
      await nextTick()
      const newNodes = document.querySelectorAll(NODE_LABEL)
      const hangzhouNode = Array.from(newNodes).find((el) =>
        el.textContent?.includes('Hangzhou')
      )
      expect(hangzhouNode).toBeTruthy()
      await (hangzhouNode as HTMLElement).click()
      await nextTick()
      expect(value.value).toEqual(['zhejiang', 'hangzhou'])
      const input = wrapper.find('input')
      expect((input.element as HTMLInputElement).value).toBe(
        'Zhejiang / Hangzhou'
      )
    })
  })
})
