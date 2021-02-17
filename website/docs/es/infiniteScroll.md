## InfiniteScroll

Cargar más datos mientras se llega al final de la página

### Uso básico
Añada `v-infinite-scroll` a la lista para ejecutar automáticamente el método de carga cuando se desplace hacia abajo.
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

### Deshabilite Loading

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


### Atributos

| Atributos | Descripción | Tipo | Valores aceptados | Por defecto |
| -------------- | ------------------------------ | --------- | ------------------------------------ | ------- |
| infinite-scroll-disabled | si esta disabled | boolean      | - |false |
| infinite-scroll-delay   | retraso en milisegundos | number       |   - |200   |
| infinite-scroll-distance| distancia de activación (px) | number   |- |0 |
| infinite-scroll-immediate |Si se debe ejecutar el método de carga inmediatamente, en caso de que el contenido no se pueda rellenar en el estado inicial. | boolean | - |true |
