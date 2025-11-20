<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/select">select</RouterLink>
    <RouterLink to="/el-input">el-input</RouterLink>
    <RouterLink to="/el-select">el-select</RouterLink>
    <RouterLink to="/el-date-picker">el-date-picker</RouterLink>
    <RouterLink to="/el-dropdown">el-dropdown</RouterLink>
    <RouterLink to="/el-popover">el-popover</RouterLink>
  </nav>
  <br />
  <RouterView v-slot="{ Component }">
    <component :is="Component" :key="$route.name"></component>
  </RouterView>
</template>
<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

watch(
  () => route.path,
  (val) => {
    console.log(val)
    if (val !== '/') {
      console.log('mount')
      const timer = setTimeout(() => {
        clearTimeout(timer)
        router.push('/')
      }, 5000)
    }
  }
)
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
