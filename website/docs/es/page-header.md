## PageHeader

Si la ruta de la página es simple, se recomienda utilizar  PageHeader en lugar de Breadcrumb.

### Básico

:::demo
```html
<el-page-header @back="goBack" content="detail">
</el-page-header>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const goBack = () => {
        console.log('go back');
      };

      return {
        goBack,
      };
    },
  });
</script>
```
:::

### Atributos
| Atributos | Descripción | Tipo   | Valores aceptados | Por defecto |
|---------- |-------------- |---------- |------------------------------ | ------ |
| title     | titulo principal | string    |  —                            | Back   |
| content   | contenido   | string    |  —                            | —      |

### Eventos
| Nombre evento | Descripción | Parámetros |
|----------- |-------------- |----------- |
| back       | se activa cuando se hace clic en el lado derecho | — |

### Slots
| Nombre del slot | Descripción |
| --------------- | ----------- |
| title           | titulo      |
| content         | contenido   |
