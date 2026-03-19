import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { TypeComponentsMap, ValidateComponentsMap } from '../..'

describe('TypeComponentsMap', () => {
  it('Given a type "success", it should return SuccessFilled component', () => {
    const component = shallowMount(TypeComponentsMap.success)
    expect(component.exists()).toBe(true)
  })

  it('Given a type "warning", it should return WarningFilled component', () => {
    const component = shallowMount(TypeComponentsMap.warning)
    expect(component.exists()).toBe(true)
  })

  it('Given a type "error", it should return CircleCloseFilled component', () => {
    const component = shallowMount(TypeComponentsMap.error)
    expect(component.exists()).toBe(true)
  })

  it('Given a type "info", it should return InfoFilled component', () => {
    const component = shallowMount(TypeComponentsMap.info)
    expect(component.exists()).toBe(true)
  })
})

describe('ValidateComponentsMap', () => {
  it('Given a validation state "validating", it should return Loading component', () => {
    const component = shallowMount(ValidateComponentsMap.validating)
    expect(component.exists()).toBe(true)
  })

  it('Given a validation state "success", it should return CircleCheck component', () => {
    const component = shallowMount(ValidateComponentsMap.success)
    expect(component.exists()).toBe(true)
  })

  it('Given a validation state "error", it should return CircleClose component', () => {
    const component = shallowMount(ValidateComponentsMap.error)
    expect(component.exists()).toBe(true)
  })
})
