## Calendar

Muestra fechas.

### Básico

:::demo Configure el valor para especificar el mes que se muestra actualmente. Si no se especifica el valor, se muestra el mes actual. el valor soporta la vinculación bidireccional.
```html
<el-calendar v-model="value">
</el-calendar>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const value = ref(new Date());

      return {
        value,
      };
    },
  });

</setup>
-->
```
:::

### Contenido personalizado

:::demo Personalice lo que se muestra en la celda del calendario configurando el `scoped-slot` llamada `dateCell`. En la ranura de alcance se puede obtener la fecha (la fecha de la celda actual), los datos (incluyendo el tipo, isSelected, el atributo day). Para obtener más información, consulte la documentación de la API a continuación.

```html
<el-calendar>
  <template #dateCell="{data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}
    </p>
  </template>
</el-calendar>
<style>
  .is-selected {
    color: #1989FA;
  }
</style>
```
:::

### Rango

:::demo Defina el atributo `range` para especificar el rango de visualización del calendario. El tiempo de inicio debe ser el lunes, el tiempo de finalización debe ser el domingo y el período no puede exceder los dos meses.
```html
<el-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]">
</el-calendar>
```
:::

### Localization

The default locale of is English, if you need to use other languages, please check [Internationalization](#/es/component/i18n)

Note, date time locale (month name, first day of the week ...) are also configed in localization.

### Atributos
| Atributo        | Descripción        | Tipo      | Valores aceptados     | Por defecto |
|-----------------|------------------- |---------- |---------------------- |------------ |
| model-value / v-model | valor vinculante   | Date | —            | —           |
| range           | rango de tiempo, incluyendo el tiempo de inicio y el tiempo final. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months | [Date]Array     | —           | —      |

### dateCell scoped slot
| Atributo      | Descripción | Tipo   | Valores aceptados | Por defecto |
|-----------------|-------------- |---------- |---------------------- |--------- |
| data            | { type, isSelected, day, date}. `type` indica el mes al que pertenece la fecha, los valores opcionales son mes anterior, mes actual, mes siguiente; `isSelected` indica si la fecha está seleccionada; `day` es la fecha formateada en el formato yyyy-MM-dd; `date` es la fecha que la celda representa | Object      | —           | —      |

