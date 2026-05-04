<template>
  <el-space style="width: 100%" fill>
    <div>
      <el-button @click="setLoading">Click me to reload</el-button>
    </div>
    <el-skeleton
      style="display: flex; gap: 8px"
      :loading="loading"
      animated
      :count="3"
    >
      <template #template>
        <div style="flex: 1">
          <el-skeleton-item variant="image" style="height: 240px" />
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
        </div>
      </template>
      <template #default>
        <el-card
          v-for="item in lists"
          :key="item.name"
          :body-style="{ padding: '0px', marginBottom: '1px' }"
        >
          <img
            :src="item.imgUrl"
            class="image multi-content"
            style="max-width: 100%"
          />
          <div style="padding: 14px">
            <span>{{ item.name }}</span>
            <div class="bottom card-header">
              <div class="time">{{ currentDate }}</div>
              <el-button text class="button">Operation button</el-button>
            </div>
          </div>
        </el-card>
      </template>
    </el-skeleton>
  </el-space>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

interface ListItem {
  imgUrl: string
  name: string
}

const loading = ref(true)
const lists = ref<ListItem[]>([])
const currentDate = new Date().toDateString()

const setLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

onMounted(() => {
  loading.value = false
  lists.value = [
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
})
</script>
