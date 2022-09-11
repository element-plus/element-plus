import { nextTick, shallowRef } from 'vue'
import { describe, expect, it } from 'vitest'
import { useCursor } from '../use-cursor'

describe('useCursor', () => {
  it('record and set cursor correctly', async () => {
    const inputRef = shallowRef<HTMLInputElement>()
    const [recordCursor, setCursor] = useCursor(inputRef)
    if (inputRef.value == undefined) return
    inputRef.value.value = 'abc'
    //set a cursor position
    inputRef.value.setSelectionRange(1, 1)
    recordCursor()
    inputRef.value.value = 'a-bc'
    setCursor()
    await nextTick()
    const { selectionStart, selectionEnd } = inputRef.value
    expect(selectionStart).toEqual(2)
    expect(selectionEnd).toEqual(2)
  })
})
