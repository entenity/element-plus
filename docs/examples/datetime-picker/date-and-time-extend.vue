<template>
  <div class="demo-datetime-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
        format="YYYY-MM-DD HH"
        value-format="YYYY-MM-DD HH:mm:ss"
        :disabled-hours="disabledHours"
        :disabled-minutes="disableMinutes"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const value1 = ref('2018-10-21 10:20:00')
const value2 = ref('')
const value3 = ref('')
const defaultTime = new Date(2000, 1, 1, 20, 0, 0)

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]
const disabledHours = () => {
  const arr: any = [2, 5, 8, 11, 14, 17, 20, 23]
  arr.show = true
  return arr
}
const disableMinutes = () => {
  const arr: any = [5, 10, 15, 20, 25, 30, 35, 40, 45]
  arr.show = true
  return arr
}

watch(value1, (value, oldValue, onCleanup) => {
  console.log(value)
})
</script>
<style scoped>
.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-datetime-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-datetime-picker .block:last-child {
  border-right: none;
}
.demo-datetime-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
