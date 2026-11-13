import { nextTick, ref } from 'vue'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { afterEach, describe, expect, test } from 'vitest'
import { ElForm, ElFormItem } from '@element-plus/components/form'
import ElInput from '@element-plus/components/input'
import SelectDropdown from '../../select/src/select-dropdown.vue'
import Pagination from '../src/pagination'

import type { ComponentSize } from '@element-plus/constants'
import type { FormItemValidateState } from '@element-plus/components/form'

enableAutoUnmount(afterEach)

describe('Pagination form integration', () => {
  test.each(['error', 'success', 'validating'] as const)(
    'does not display the parent field %s state in its internal controls',
    async (state) => {
      const status = ref<FormItemValidateState>('')
      const wrapper = mount(() => (
        <ElForm model={{ name: '' }} statusIcon>
          <ElFormItem prop="name" validateStatus={status.value}>
            <ElInput class="field-input" validateEvent={false} />
            <Pagination layout="sizes, jumper, slot" total={400}>
              <ElInput class="slot-input" validateEvent={false} />
            </Pagination>
          </ElFormItem>
        </ElForm>
      ))

      status.value = state
      await nextTick()

      for (const selector of [
        '.el-pagination__sizes',
        '.el-pagination__jump',
      ]) {
        expect(
          wrapper.get(selector).find('[class*="validateIcon"]').exists()
        ).toBe(false)
      }
      expect(
        wrapper.get('.field-input').find('.el-input__validateIcon').exists()
      ).toBe(true)
      expect(
        wrapper.get('.slot-input').find('.el-input__validateIcon').exists()
      ).toBe(true)

      status.value = ''
      await nextTick()
      expect(wrapper.find('[class*="validateIcon"]').exists()).toBe(false)
    }
  )

  test('does not associate pagination inputs with the parent field label', async () => {
    const wrapper = mount(() => (
      <ElForm model={{ name: '' }}>
        <ElFormItem label="Name" prop="name">
          <ElInput class="field-input" />
          <Pagination layout="sizes, jumper" total={400} />
        </ElFormItem>
      </ElForm>
    ))
    await nextTick()

    const fieldId = wrapper.get('.field-input input').attributes('id')
    expect(fieldId).toBeTruthy()
    expect(wrapper.get('.el-form-item__label').attributes('for')).toBe(fieldId)
    expect(
      wrapper.get('.el-pagination__jump input').attributes('aria-label')
    ).toBe('Page')
  })

  test('keeps the inherited control size reactive', async () => {
    const itemSize = ref<ComponentSize>('small')
    const paginationSize = ref<ComponentSize>()
    const wrapper = mount(() => (
      <ElForm model={{ name: '' }} size="large">
        <ElFormItem prop="name" size={itemSize.value}>
          <Pagination
            layout="sizes, jumper"
            total={400}
            size={paginationSize.value}
          />
        </ElFormItem>
      </ElForm>
    ))

    const expectControlSize = (size: ComponentSize) => {
      expect(
        wrapper.get('.el-pagination__sizes .el-select').classes()
      ).toContain(`el-select--${size}`)
      expect(wrapper.get('.el-pagination__jump .el-input').classes()).toContain(
        `el-input--${size}`
      )
    }
    expectControlSize('small')
    itemSize.value = 'large'
    await nextTick()
    expectControlSize('large')
    paginationSize.value = 'small'
    await nextTick()
    expectControlSize('small')
  })

  test.each([false, true])(
    'preserves Pagination disabled=%s inside a disabled form',
    (disabled) => {
      const wrapper = mount(() => (
        <ElForm model={{ name: '' }} disabled>
          <ElFormItem prop="name">
            <Pagination
              layout="sizes, jumper"
              total={400}
              disabled={disabled}
            />
          </ElFormItem>
        </ElForm>
      ))

      expect(
        wrapper
          .get('.el-pagination__sizes .el-select__wrapper')
          .classes()
          .includes('is-disabled')
      ).toBe(disabled)
      expect(
        wrapper.get<HTMLInputElement>('.el-pagination__jump input').element
          .disabled
      ).toBe(disabled)
    }
  )

  test('changing pagination does not validate the parent field', async () => {
    let validations = 0
    const page = ref(1)
    const pageSize = ref(100)
    const wrapper = mount(() => (
      <ElForm
        model={{ name: '' }}
        rules={{
          name: [
            {
              validator(_rule, _value, callback) {
                validations++
                callback(new Error('Name is required'))
              },
            },
          ],
        }}
        statusIcon
      >
        <ElFormItem prop="name">
          <ElInput validateEvent={false} />
          <Pagination
            total={400}
            pageSizes={[100, 200]}
            layout="sizes, pager, jumper"
            v-model:current-page={page.value}
            v-model:page-size={pageSize.value}
          />
        </ElFormItem>
      </ElForm>
    ))
    await wrapper.getComponent(ElForm).vm.validate(() => undefined)
    expect(validations).toBe(1)
    expect(wrapper.find('[class*="validateIcon"]').exists()).toBe(true)

    await wrapper.get('.el-select').trigger('click')
    await wrapper
      .getComponent(SelectDropdown)
      .get('li:nth-child(2)')
      .trigger('click')
    expect(pageSize.value).toBe(200)
    await wrapper.get('.el-pager .number:nth-child(2)').trigger('click')
    expect(page.value).toBe(2)
    await wrapper.get('.el-pagination__jump input').setValue('1')
    await wrapper.get('.el-pagination__jump input').trigger('blur')
    expect(page.value).toBe(1)
    expect(validations).toBe(1)
  })
})
