<template>
  <div class="demo-date-picker">
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="Pick a day"
      format="YYYY/MM/DD"
      value-format="YYYY-MM-DD"
    >
      <template #default="cell">
        <div class="cell" :class="{ current: cell.isCurrent }">
          <span class="text">{{ cell.text }}</span>
          <span v-if="isHoliday(cell)" class="holiday"></span>
        </div>
      </template>
    </el-date-picker>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value = ref('2021-10-29')

    const holidays = [
      '2021-10-01',
      '2021-10-02',
      '2021-10-03',
      '2021-10-04',
      '2021-10-05',
      '2021-10-06',
      '2021-10-07',
    ]

    function isHoliday({ dayjs }) {
      return holidays.includes(dayjs.format('YYYY-MM-DD'))
    }

    return {
      value,
      isHoliday,
    }
  },
})
</script>

<style lang="scss" scoped>
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
  .text {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
    line-height: 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }

  &.current {
    .text {
      background: purple;
      color: #fff;
    }
  }
  .holiday {
    position: absolute;
    width: 6px;
    height: 6px;
    background: red;
    border-radius: 50%;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
