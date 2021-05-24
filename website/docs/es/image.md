## Image
Además de las características nativas de img, soporte de carga perezosa, marcador de posición personalizado y fallo de carga, etc.

### Uso básico

:::demo Indica cómo se debe cambiar el tamaño de la imagen para que se ajuste a su contenedor por ajuste, igual que el ajuste de objeto nativo. [object-fit](https://developer.mozilla.org/es/docs/Web/CSS/object-fit)。

```html
<div class="demo-image">
  <div class="block" v-for="fit in fits" :key="fit">
    <span class="demonstration">{{ fit }}</span>
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :fit="fit"></el-image>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
</script>
```
:::

### Placeholder

:::demo Personalice el placeholder del contenido mientras la imagen aun no ha sido cargada vía `slot = placeholder`
```html
<div class="demo-image__placeholder">
  <div class="block">
    <span class="demonstration">Default</span>
    <el-image :src="src"></el-image>
  </div>
  <div class="block">
    <span class="demonstration">Custom</span>
    <el-image :src="src">
      <template #placeholder>
        <div class="image-slot">
          Loading<span class="dot">...</span>
        </div>
      </template>
    </el-image>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
</script>
```
:::

### Fallo de carga

:::demo Personalice el contenido cuando ocurra algún error al cargar la imagen vía `slot = error`
```html
<div class="demo-image__error">
  <div class="block">
    <span class="demonstration">Default</span>
    <el-image></el-image>
  </div>
  <div class="block">
    <span class="demonstration">Custom</span>
    <el-image>
      <template #error>
        <div class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </template>
    </el-image>
  </div>
</div>
```
:::

### Lazy Load

:::demo Use lazy load vía `lazy = true`. La imagen se cargará hasta que se desplace a la vista cuando esté configurada. Puede indicar el contenedor de scroll que añade el oyente de scroll vía `scroll-container`. Si no está definido, será el contenedor padre más cercano cuya propiedad overflow es auto o scroll.

```html
<div class="demo-image__lazy">
  <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
</div>

<script>
  export default {
    data() {
      return {
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
      }
    }
  }
</script>
```
:::

### Vista previa de la imagen

:::demo permitir una vista previa grande de la imagen configurando la prop `previewSrcList`.
```html
<div class="demo-image__preview">
  <el-image
    style="width: 100px; height: 100px"
    :src="url"
    :preview-src-list="srcList">
  </el-image>
</div>

<script>
  export default {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    }
  }
</script>
```
:::

### Image Atributos
| Atributo | Descripción | Tipo | Valores aceptados | Por defecto |
|---------- |-------- |---------- |-------------  |-------- |
| alt | alt nativo | string | - | - |
| fit | Indica como la imagen debe adaptarse al contenedor, lo mismo que [object-fit](https://developer.mozilla.org/es/docs/Web/CSS/object-fit) | string | fill / contain / cover / none / scale-down | - |
| hide-on-click-modal (needs translation) | When enabling preview, use this flag to control whether clicking on backdrop can exit preview mode | boolean | true / false | false |
| lazy | si se usara lazy load | boolean | — | false |
| preview-src-list | permitir una vista previa grande de la imagen | Array | — | - |
| referrer-policy | referrerPolicy nativo | string | - | - |
| src | origen de la imagen, igual que en nativo | string | — | - |
| scroll-container | El contenedor para añadir el scroll listener cuando se utiliza lazy load | string / HTMLElement | — | El contenedor padre más cercano cuya propiedad de desbordamiento es auto o scroll |
| z-index | establecer el z-index de la vista previa de la imagen | Number | — | 2000 |
| append-to-body     | whether to append image itself to body. A nested parent element attribute transform should have this attribute set to `true` | boolean   | — | false |

### Image Eventos
| Nombre del evento | Descripción | Parámetros |
|---------- |-------- |---------- |
| load | Igual que el load nativo | (e: Event) |
| error | Igual que el error nativo | (e: Error) |

### Image Slots
| Nombre del slot | Descripción |
|---------|-------------|
| placeholder | Se activa cuando la imagen se carga |
| error | Se activa cuando la carga de la imagen falla |

### ImageViewer Atributos
| Attribute      | Description    | Type      | Acceptable Value    | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| url-list | Preview link list | Array\<string\> | - | [] |
| z-index  | Preview backdrop z-index | number / string |  int / string\<int\> | 2000 |
| initial-index | The initial preview image index, less than or equal to the length of `url-list` | number | int | 0 |
| infinite | Whether preview is infinite | boolean | true / false | true |
| hide-on-click-modal | Whether user can emit close event when clicking backdrop | boolean | true / false | false |

### ImageViewer Eventos
| Event name      | Description    | Callback parameter      |
|---------- |-------- |---------- |
| close | Emitted when clicking on `X` button or when `hide-on-click-modal` enabled clicking on backdrop | None |
| switch | When switching images | `(val: number)` switching target index |
