import { TinyColor } from '@ctrl/tinycolor'
import { hasOwn } from '@element-plus/utils'

import type { ColorFormats } from '@ctrl/tinycolor'

interface ColorOptions {
  enableAlpha: boolean
  format: string
  value?: string
}

export default class Color {
  private _hue = 0
  private _saturation = 100
  private _value = 100
  private _alpha = 100
  private _tiny = new TinyColor()
  private _isValid = false
  public enableAlpha = false
  public format = ''
  public value = ''
  public selected?: boolean

  constructor(options: Partial<ColorOptions> = {}) {
    for (const option in options) {
      if (hasOwn(options, option)) {
        this[option] = options[option]
      }
    }
    if (options.value) {
      this.fromString(options.value)
    } else {
      this.doOnChange()
    }
  }

  set(prop: { [key: string]: any } | any, value?: number) {
    if (arguments.length === 1 && typeof prop === 'object') {
      for (const p in prop) {
        if (hasOwn(prop, p)) {
          this.set(p, prop[p])
        }
      }

      return
    }
    ;(this as any)[`_${prop}`] = value
    this._isValid = true
    this.doOnChange()
  }

  get(prop: string) {
    if (['hue', 'saturation', 'value', 'alpha'].includes(prop)) {
      return Math.round((this as any)[`_${prop}`])
    }
    return (this as any)[`_${prop}`]
  }

  toRgb() {
    return this._isValid ? this._tiny.toRgb() : { r: 255, g: 255, b: 255, a: 0 }
  }

  fromString(value: string) {
    const color = new TinyColor(value)
    this._isValid = color.isValid
    if (color.isValid) {
      const { h, s, v, a } = color.toHsv()
      this._hue = h
      this._saturation = s * 100
      this._value = v * 100
      this._alpha = a * 100
    } else {
      this._hue = 0
      this._saturation = 100
      this._value = 100
      this._alpha = 100
    }
    this.doOnChange()
  }

  compare(color: this) {
    const compareColor = new TinyColor({
      h: color._hue,
      s: color._saturation / 100,
      v: color._value / 100,
      a: color._alpha / 100,
    })
    return this._tiny.equals(compareColor)
  }

  doOnChange() {
    const { _hue, _saturation, _value, _alpha, format, enableAlpha } = this
    let _format = format || (enableAlpha ? 'rgb' : 'hex')
    if (format === 'hex' && enableAlpha) {
      _format = 'hex8'
    }
    this._tiny = new TinyColor({
      h: _hue,
      s: _saturation / 100,
      v: _value / 100,
      a: _alpha / 100,
    })
    this.value = this._isValid
      ? this._tiny.toString(_format as ColorFormats)
      : ''
  }
}
