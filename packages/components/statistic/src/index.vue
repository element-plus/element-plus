<!-- eslint-disable @typescript-eslint/no-this-alias -->
<template>
  <div>
    fsa
    <div class="el-statistic">
      <div class="head">
        <slot name="title">
          <span class="title">
            {{ title }}
          </span>
        </slot>
      </div>
      <div class="con">
        <span class="prefix">
          <slot name="prefix">
            {{ prefix }}
          </slot>
        </span>

        <span class="number" :style="valueStyle">
          <slot name="formatter"> {{ disposeValue }}</slot>
        </span>
        <span class="suffix">
          <slot name="suffix">
            {{ suffix }}
          </slot>
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import _ from 'lodash'

export default defineComponent({
  name: 'ElStatistic',
  props: {
    decimalSeparator: {
      type: String,
      default: '.',
    },
    groupSeparator: {
      type: String,
      default: '',
    },
    precision: {
      type: Number,
      default: 0,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    prefix: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
    title: {
      type: [String, Number],
      default: '',
    },
    timeIndices: {
      type: Boolean,
      default: false,
    },
    valueStyle: {
      type: Object,
      default() {
        return {}
      },
    },
    format: {
      type: String,
      default: 'HH:mm:ss:SSS',
    },
    rate: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      disposeValue: '',
      timeTask: '',
      REFRESH_INTERVAL: 1000 / 30,
    }
  },
  watch: {
    value() {
      this.branch()
    },
  },
  created() {
    this.branch()
  },
  methods: {
    branch() {
      if (this.timeIndices) {
        clearInterval(this.timeTask)
        this.countDown()
      } else {
        this.dispose()
      }
    },

    magnification(num: number, mulriple = 1000, groupSeparator = ',') {
      // magnification factor
      if (_.isNumber(num)) return false
      const result = String(_.divide(num, mulriple))
        .split('.')
        .join(groupSeparator || ',')
      return result
    },
    dispose() {
      let { value, precision, groupSeparator, rate } = this

      if (!_.isNumber(value)) return false
      if (precision) {
        value = _.ceil(value, precision)
      }

      let integer: any = String(value).split('.')[0]
      const decimals =
        String(value).split('.')[1] ||
        (precision ? _.fill(Array.from({ length: precision }), 0).join('') : '')
      let result: any = 0
      // 1000 multiplying power
      if (groupSeparator) {
        integer = this.magnification(integer, rate, groupSeparator)
      }

      result = [integer, decimals].join(
        decimals ? this.decimalSeparator || '.' : ''
      )
      this.disposeValue = result
      return result
    },
    diffDate(minuend: number, subtrahend: number) {
      return _.subtract(minuend, subtrahend)
    },
    suspend(isStop: any) {
      if (isStop) {
        clearInterval(this.timeTask)
      } else {
        this.branch()
      }
      return this.disposeValue
    },
    countDown() {
      const { format, value, REFRESH_INTERVAL, diffDate, suspend } = this
      let diffTiem = diffDate(Number(value), Date.now())
      const formatTimeStr = function (format: any, time: number) {
        const timeUnits = [
          ['Y', 1000 * 60 * 60 * 24 * 365], // years
          ['M', 1000 * 60 * 60 * 24 * 30], // months
          ['D', 1000 * 60 * 60 * 24], // days
          ['H', 1000 * 60 * 60], // hours
          ['m', 1000 * 60], // minutes
          ['s', 1000], // seconds
          ['S', 1], // million seconds
        ]
        return _.reduce(
          timeUnits,
          (con, item: any[]) => {
            const name = item[0]
            return con.replace(new RegExp(`${name}+`, 'g'), (match: any) => {
              let sum: any = _.chain(time).divide(item[1]).floor().value()
              time -= _.multiply(sum, item[1])
              sum = _.padStart(String(sum), String(match).length, '0') // autoCompletion
              if (!sum) suspend(false)
              return sum
            })
          },
          format
        )
      }
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const than: any = this
      const disappearTime = function (time: any) {
        let result = true // stop
        if (value > Date.now()) {
          than.$emit('change', time)

          result = false
        } else {
          result = true

          than.$emit('finish', true)
        }
        return result
      }

      than.timeTask = setInterval(() => {
        // console.log(diffTiem);
        if (disappearTime(diffTiem)) clearInterval(than.timeTask)
        diffTiem = diffTiem < REFRESH_INTERVAL ? 0 : diffTiem - REFRESH_INTERVAL
        than.disposeValue = formatTimeStr(format, diffTiem)
      }, REFRESH_INTERVAL)
    },
  },
})
</script>
<style></style>
