<template>
  <el-space direction="vertical" alignment="flex-start">
    <el-button @click="setLoading">Click me to reload</el-button>
    <el-skeleton style="width: 240px" :loading="loading" animated :count="3">
      <template #template>
        <el-skeleton-item variant="image" style="width: 400px; height: 267px" />
        <div style="padding: 14px">
          <el-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <el-card
          v-for="item in lists"
          :key="item.name"
          :body-style="{ padding: '0px', marginBottom: '1px' }"
        >
          <img :src="item.imgUrl" class="image multi-content" />
          <div style="padding: 14px">
            <span>{{ item.name }}</span>
            <div class="bottom card-header">
              <span class="time">{{ currentDate }}</span>
              <el-button type="text" class="button">Operation button</el-button>
            </div>
          </div>
        </el-card>
      </template>
    </el-skeleton>
  </el-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dayjs from 'dayjs'

export default defineComponent({
  data() {
    return {
      loading: true,
      currentDate: dayjs().format('YYYY-MM-DD'),
      lists: [],
    }
  },
  mounted() {
    this.loading = false
    this.lists = [
      {
        imgUrl:
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        name: 'Deer',
      },
      {
        imgUrl:
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        name: 'Horse',
      },
      {
        imgUrl:
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        name: 'Mountain Lion',
      },
    ]
  },
  methods: {
    setLoading() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
})
</script>
