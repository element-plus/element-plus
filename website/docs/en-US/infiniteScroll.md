## InfiniteScroll

Load more data while reach bottom of the page

### Basic usage
Add `v-infinite-scroll` to the list to automatically execute loading method when scrolling to the bottom.
:::demo
```html
<template>
  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
  </ul>
</template>

<script>
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const count = ref(0);
      const load = () => {
        count.value += 2;
      };
      return {
        count,
        load,
      };
    },
  });
</script>
```
:::

### Disable Loading

:::demo
```html
<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="i in count" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</template>

<script>
  import { defineComponent, ref, computed } from 'vue';

  export default defineComponent({
    setup() {
      const count = ref(10);
      const loading = ref(false);
      const noMore = computed(() => count.value >= 20);
      const disabled = computed(() => loading.value || noMore.value);
      const load = () => {
        loading.value = true;
        setTimeout(() => {
          count.value += 2;
          loading.value = false;
        }, 2000);
      };
      return {
        count,
        loading,
        noMore,
        disabled,
        load,
      };
    },
  });
</script>
```
:::


### Attributes

| Attribute | Description | Type  | Accepted values | Default   |
| -------------- | ------------------------------ | --------- | ------------------------------------ | ------- |
| infinite-scroll-disabled | is disabled           | boolean      | - |false |
| infinite-scroll-delay   | throttle delay (ms)   | number       |   - |200   |
| infinite-scroll-distance| trigger distance (px) | number   |- |0 |
| infinite-scroll-immediate |Whether to execute the loading method immediately, in case the content cannot be filled up in the initial state. | boolean | - |true |
