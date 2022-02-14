<script setup lang="ts">
defineProps<{
  item: {
    name: string
    img: string
    url: string
  }
}>()
</script>

<template>
  <div class="sponsor-item">
    <a :href="item.url" :title="item.name" target="_blank">
      <img :src="item.img" :alt="item.name" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.sponsor-item {
  margin-right: 4px;

  a {
    display: inline-flex;
    align-items: center;

    img {
      width: 36px;
      height: 36px;
    }
  }
}
</style>
