## Message

Utilizado para mostrar retroalimentación después de una actividad. La diferencia con el componente Notification es que este ultimo es utilizado para mostrar una notificación pasiva a nivel de sistema.

### Uso básico

Se muestra en la parte superior de la pagina y desaparece después de 3 segundos.

:::demo La configuración del componente Message es muy similar al del componente notification, así que parte de las opciones no serán explicadas en detalle aquí. Puedes consultar la tabla de opciones en la parte inferior combinada con la documentación del componente notification para comprenderla. Element Plus a registrado un método `$message` para poder invocarlo. Message puede tomar una cadena o un Vnode como parámetro, y lo mostrara como el cuerpo principal.

```html
<template>
  <el-button :plain="true" @click="open">Show message</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
</template>

<script>
  import { defineComponent, getCurrentInstance, h } from 'vue';

  export default defineComponent({
    setup() {
      const { proxy } = getCurrentInstance();

      const open = () => {
        proxy.$message('this is a message.');
      };

      const openVn = () => {
        proxy.$message({
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode'),
          ]),
        });
      };

      return {
        open,
        openVn,
      };
    },
  });
</script>
```
:::

### Tipos

Utilizados para mostrar retroalimentación de Success, Warning, Message y Error activities.

:::demo Cuando necesite mas personalización, el componente Message también puede tomar un objeto como parámetro. Por ejemplo, estableciendo el valor de `type` puede definir diferentes tipos, el predeterminado es `info`. En tales casos el cuerpo principal se pasa como el valor de `message`. También, hay registrados métodos para los diferentes tipos, así que, puedes llamarlos sin necesidad de pasar un tipo como `open4`.
```html
<template>
  <el-button :plain="true" @click="open2">success</el-button>
  <el-button :plain="true" @click="open3">warning</el-button>
  <el-button :plain="true" @click="open1">message</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>

<script>
  import { defineComponent, getCurrentInstance } from 'vue';

  export default defineComponent({
    setup() {
      const { proxy } = getCurrentInstance();

      const open1 = () => {
        proxy.$message('this is a message.');
      };
      const open2 = () => {
        proxy.$message({
          message: 'Congrats, this is a success message.',
          type: 'success',
        });
      };
      const open3 = () => {
        proxy.$message({
          message: 'Warning, this is a warning message.',
          type: 'warning',
        });
      };
      const open4 = () => {
        proxy.$message.error('Oops, this is a error message.');
      };
      return {
        open1,
        open2,
        open3,
        open4,
      };
    },
  });
</script>
```
:::

### Closable

Un botón para cerrar que puede ser agregado.

:::demo Un componente Message predeterminado no se puede cerrar manualmente. Si necesitas un componente message que pueda cerrarse, puedes establecer el campo `showClose`. Ademas, al igual que las notificaciones, message tiene un atributo `duration` que puede ser controlado. Por defecto la duración es de 3000 ms, y no desaparecerá al llegar a `0`.
```html
<template>
  <el-button :plain="true" @click="open1">message</el-button>
  <el-button :plain="true" @click="open2">success</el-button>
  <el-button :plain="true" @click="open3">warning</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>

<script>
  import { defineComponent, getCurrentInstance } from 'vue';

  export default defineComponent({
    setup() {
      const { proxy } = getCurrentInstance();

      const open1 = () => {
        proxy.$message({
          showClose: true,
          message: 'This is a message.',
        });
      };
      const open2 = () => {
        proxy.$message({
          showClose: true,
          message: 'Congrats, this is a success message.',
          type: 'success',
        });
      };
      const open3 = () => {
        proxy.$message({
          showClose: true,
          message: 'Warning, this is a warning message.',
          type: 'warning',
        });
      };
      const open4 = () => {
        proxy.$message({
          showClose: true,
          message: 'Oops, this is a error message.',
          type: 'error',
        });
      };
      return {
        open1,
        open2,
        open3,
        open4,
      };
    },
  });
</script>
```
:::

### Texto centrado
Utiliza el atributo `center` para centrar el texto.

:::demo

```html
<template>
  <el-button :plain="true" @click="openCenter">Centered text</el-button>
</template>

<script>
  import { defineComponent, getCurrentInstance } from 'vue';

  export default defineComponent({
    setup() {
      const { proxy } = getCurrentInstance();
      const openCenter = () => {
        proxy.$message({
          showClose: true,
          message: 'This is a message.',
        });
      };
      return {
        openCenter,
      };
    },
  });
</script>
```
:::

### Utiliza cadenas HTML
`message` soporta cadenas HTML.

:::demo Establece la propiedad `dangerouslyUseHTMLString` en true y `message` sera tratado como una cadena HTML.

```html
<template>
  <el-button :plain="true" @click="openHTML">Use HTML String</el-button>
</template>

<script>
  import { defineComponent, getCurrentInstance } from 'vue';

  export default defineComponent({
    setup() {
      const { proxy } = getCurrentInstance();
      const openCenter = () => {
        proxy.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>',
        });
      };
      return {
        openCenter,
      };
    },
  });
</script>
```
:::

:::warning
Aunque la propiedad `message` soporta cadenas HTML, realizar arbitrariamente render dinámico de HTML en nuestro sitio web puede ser muy peligroso ya que puede conducir fácilmente a [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). Entonces cuando `dangerouslyUseHTMLString` esta activada, asegurese que el contenido de `message` sea de confianza, y **nunca** asignar `message` a contenido generado por el usuario.
:::

### Métodos Globales

Element Plus ha agregado un método global llamado `$message` para `app.config.globalProperties`. Entonces en una instancia de vue puede llamar a `Message` como lo hicimos en esta pagina.

### Importación local

```javascript
import { ElMessage } from 'element-plus';
```

En este caso debería llamar al método `ElMessage(options)`. También se han registrado métodos para los diferentes tipos, e.g. `ElMessage.success(options)`. Puede llamar al método `ElMessage.closeAll()` para cerrar manualmente todas las instancias.

### Options
| Atributo                 | Descripcion                              | Tipo           | Valores permitidos         | Por defecto |
| ------------------------ | ---------------------------------------- | -------------- | -------------------------- | ----------- |
| message                  | texto del mensaje                        | string / VNode | —                          | —           |
| type                     | tipo del mensaje                         | string         | success/warning/info/error | info        |
| iconClass                | clase personalizada para el icono, sobreescribe `type` | string         | —                          | —           |
| dangerouslyUseHTMLString | utilizado para que `message` sea tratado como cadena HTML | boolean        | —                          | false       |
| customClass              | nombre de clase personalizado para el componente Message | string         | —                          | —           |
| duration                 | muestra la duración,en milisegundos. si se establece en 0, este no se apagara automáticamente | number         | —                          | 3000        |
| showClose                | utilizado para mostrar un botón para cerrar | boolean        | —                          | false       |
| center                   | utilizado para centrar el texto          | boolean        | —                          | false       |
| onClose                  | función callback ejecutada cuando se cierra con una instancia de mensaje como parámetro | function       | —                          | —           |
| offset | La distancia desde la parte superior del  viewport | number | — | 20 |

### Métodos
`Message` y `this.$message` regresan una instancia del componente Message. Para cerrar manualmente la instancia, puede llamar al método `close`.

| Método | Descripción                  |
| ------ | ---------------------------- |
| close  | cierra el componente Message |
