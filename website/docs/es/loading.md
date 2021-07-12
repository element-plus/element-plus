## Cargando

Se muestra la animación mientras se cargan los datos.

### Cargando dentro de un contenedor

Muestra una animación en un contenedor (como en una tabla) mientras se cargan los datos.

:::demo Element Plus provee dos maneras para invocar el componente de Cargando: por directiva y por servicio. Para la directiva personalizada `v-loading`, solo necesitas enlazarlo a un valor `Boolean`. Por defecto, la máscara de carga se agregará al elemento donde se usa la directiva. Al agregar el modificador `body`, la máscara se agrega al elemento body.

```html
<template>
  <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Fecha"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Nombre"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Dirección">
    </el-table-column>
  </el-table>
</template>

<style>
  body {
    margin: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true
      };
    }
  };
</script>
<!--
<setup>

import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      tableData: [
        {
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
        {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
        {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
      ],
      loading: true,
    });
    return {
      ...toRefs(state),
    };
  },
});

</setup>
-->
```
:::

### Personalización

Puede personalizar el texto de carga, spinner de carga y color de fondo.

:::demo Agregue el atributo `element-loading-text` al elemento en el que `v-loading` está vinculado, y su valor se mostrará debajo del spinner. De manera similar, los atributos `element-loading-spinner`,` element-loading-background` y `element-loading-svg` se utilizan para establecer el nombre de la clase del icono, el valor del color de fondo y el icono de carga, respectivamente.
```html
<template>
  <el-table
    v-loading="loading"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Fecha"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Nombre"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Dirección">
    </el-table-column>
  </el-table>
  <el-table
    v-loading="loading"
    :element-loading-svg="svg"
    class="custom-loading-svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Fecha"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Nombre"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Dirección">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true,
        svg: `
          <path class="path" d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
        `,
      };
    }
  };
</script>
<!--
<setup>

import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      tableData: [
        {
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
        {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
        {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
      ],
      loading: true,
      svg: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,
    });
    return {
      ...toRefs(state),
    };
  },
});

</setup>
-->
```
:::

:::warning
Aunque el atributo `element-loading-svg` admite fragmentos HTML entrantes, es muy peligroso representar dinámicamente HTML arbitrario en el sitio web porque es fácil causar [ataque XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). Asegúrese de que el contenido de `element-loading-svg` sea confiable. ** Nunca ** asigne contenido enviado por el usuario al atributo` element-loading-svg`.
:::

### Cargando a pantalla completa

Muestra una animación de pantalla completa mientras se cargan los datos

:::demo Cuando se utiliza como una directiva, la carga a pantalla completa requiere el modificador `fullscreen`, y este puede ser agregado al `body`. En este caso, si desea deshabilitar el desplazamiento en `body`, puede agregar otro modificador `lock`. Cuando se utiliza como un servicio, el componente puede ser mostrado a pantalla completa por defecto.

```html
<template>
  <el-button
    type="primary"
    @click="openFullScreen1"
    v-loading.fullscreen.lock="fullscreenLoading">
    Como directiva
  </el-button>
  <el-button
    type="primary"
    @click="openFullScreen2">
    Como servicio
  </el-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen1() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';
  import { ElLoading } from 'element-plus';

  export default defineComponent({
    setup() {
      const fullscreenLoading = ref(false);
      const openFullScreen1 = () => {
        fullscreenLoading.value = true;
        setTimeout(() => {
          fullscreenLoading.value = false;
        }, 2000);
      };

      const openFullScreen2 = () => {
        const loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      };

      return {
        fullscreenLoading,
        openFullScreen1,
        openFullScreen2,
      };
    },
  });

</setup>
-->
```
:::

### Servicio

Puede invocar el componente con un servicio. Importe el servicio:

```javascript
import { ElLoading } from 'element-plus';
```
Invocar:
```javascript
ElLoading.service(options);
```
El parámetro `options` es la configuración del componente, y estos detalles pueden ser encontrados en la siguiente table. `LoadingService` devuelve una instancia del componente, y puede cerrarlo invocando el método `close`:
```javascript
let loadingInstance = ElLoading.service(options);
loadingInstance.close();
```
Tenga en cuenta que, en este caso, el componente a pantalla completa es una instancia única. Si un nuevo componente de pantalla completa es invocado antes de que se cierre la existente, se devolverá la instancia existente en lugar de crear la otra instancia:
```javascript
let loadingInstance1 = ElLoading.service({ fullscreen: true });
let loadingInstance2 = ElLoading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
```
Llamar al método `close` en cualquiera de estas puede cerrarlo.

Si Element Plus es importado completamente, un método global `$loading` puede ser registrado a `app.config.globalProperties`. Puede invocarlo como esto: `this.$loading(options)`, y también devuelve una instancia del componente.

### Options
| Atributo    | Descripción                              | Tipo          | Valores aceptados | Por defecto   |
| ----------- | ---------------------------------------- | ------------- | ----------------- | ------------- |
| target      | el nodo del DOM que el componente debe cubrir. Acepta un objecto DOM o una cadena. Si está es una cadena, este será pasado a `document.querySelector` para obtener el correspondiente nodo del DOM | object/string | —                 | document.body |
| body        | igual que el modificador `body` de `v-loading` | boolean       | —                 | false         |
| fullscreen  | igual que el modificador `fullscreen` de `v-loading` | boolean       | —                 | true          |
| lock        | igual que el modificador `lock` de `v-loading` | boolean       | —                 | false         |
| text        | texto de cargando que se muestra debajo del spinner | string        | —                 | —             |
| spinner     | nombre de clase del spinner personalizado | string        | —                 | —             |
| background  | color de fondo de la máscara             | string        | —                 | —             |
| customClass | nombre de clase personalizada para el componente | string        | —                 | —             |
