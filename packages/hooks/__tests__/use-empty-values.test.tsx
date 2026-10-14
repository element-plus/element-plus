import { reactive } from 'vue'
import { describe, expect, it } from 'vitest'
import {
  DEFAULT_EMPTY_VALUES,
  DEFAULT_VALUE_ON_CLEAR,
  useEmptyValues,
} from '../use-empty-values'

describe('useEmptyValues', () => {
  it('should return default value', async () => {
    const props = reactive({}) as any

    const { emptyValues, valueOnClear } = useEmptyValues(props)

    expect(emptyValues.value).toEqual(DEFAULT_EMPTY_VALUES)
    expect(valueOnClear.value).toEqual(DEFAULT_VALUE_ON_CLEAR)
  })

  it('should return default value prop', async () => {
    const props = reactive({}) as any

    const { valueOnClear } = useEmptyValues(props, null)

    expect(valueOnClear.value).toEqual(null)
  })

  it('should return props value', async () => {
    const props = reactive({
      emptyValues: [null, undefined],
      valueOnClear: null,
    }) as any

    const { emptyValues, valueOnClear } = useEmptyValues(props)

    expect(emptyValues.value).toEqual([null, undefined])
    expect(valueOnClear.value).toEqual(null)

    props.emptyValues = ['']
    props.valueOnClear = ''

    expect(emptyValues.value).toEqual([''])
    expect(valueOnClear.value).toEqual('')

    props.emptyValues = [null]
    props.valueOnClear = null

    expect(emptyValues.value).toEqual([null])
    expect(valueOnClear.value).toEqual(null)

    props.emptyValues = [undefined]
    props.valueOnClear = () => undefined

    expect(emptyValues.value).toEqual([undefined])
    expect(valueOnClear.value).toEqual(undefined)
  })

  it('should judge empty value', async () => {
    const props = reactive({}) as any

    const { isEmptyValue } = useEmptyValues(props)

    expect(isEmptyValue('')).toBe(true)
    expect(isEmptyValue(undefined)).toBe(true)
    expect(isEmptyValue(null)).toBe(true)
    expect(isEmptyValue('null')).toBe(false)
    expect(isEmptyValue(Number.NaN)).toBe(false)
    expect(isEmptyValue(false)).toBe(false)
    expect(isEmptyValue(0)).toBe(false)

    props.emptyValues = ['', Number.NaN, 'null', false, 0]
    props.valueOnClear = ''

    expect(isEmptyValue('')).toBe(true)
    expect(isEmptyValue(undefined)).toBe(false)
    expect(isEmptyValue(null)).toBe(false)
    expect(isEmptyValue('null')).toBe(true)
    expect(isEmptyValue(Number.NaN)).toBe(true)
    expect(isEmptyValue(false)).toBe(true)
    expect(isEmptyValue(0)).toBe(true)
  })
})
