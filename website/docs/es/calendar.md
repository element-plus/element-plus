## Calendar

Muestra fechas.

### Básico

:::demo Configure el valor para especificar el mes que se muestra actualmente. Si no se especifica el valor, se muestra el mes actual. el valor soporta la vinculación bidireccional.

```html
<el-calendar v-model="value"> </el-calendar>

<script>
  export default {
    data() {
      return {
        value: new Date(),
      }
    },
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
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' :
      '' }}
    </p>
  </template>
</el-calendar>
<style>
  .is-selected {
    color: #1989fa;
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

### Cabeza personalizada

:::demostración configurando el nombre `header` de `scoped-slot` Personaliza el contenido que se muestra en el encabezado del calendario. existe `scoped-slot` Puede obtener la fecha (la fecha de la celda actual). Para obtener más información, consulte la documentación de la API a continuación.

```html
<el-calendar ref="calendar">
  <template #header="{date}">
    <span>Contenido de encabezado personalizado</span>
    <span>{{ date }}</span>
    <el-button-group>
      <el-button size="mini" @click="selectDate('prev-year')"
        >el año pasado</el-button
      >
      <el-button size="mini" @click="selectDate('prev-month')"
        >el mes pasado</el-button
      >
      <el-button size="mini" @click="selectDate('today')">Hoy en día</el-button>
      <el-button size="mini" @click="selectDate('next-month')"
        >próximo mes</el-button
      >
      <el-button size="mini" @click="selectDate('next-year')"
        >el próximo año</el-button
      >
    </el-button-group>
  </template>
</el-calendar>

<script>
  export default {
    methods: {
      selectDate(value) {
        this.$refs.calendar.selectDate(value)
      },
    },
  }
</script>
```

:::

### Localization

The default locale of is English, if you need to use other languages, please check [Internationalization](#/es/component/i18n)

Note, date time locale (month name, first day of the week ...) are also configed in localization.

### Atributos

| Atributo              | Descripción                                                                                                                                                                       | Tipo        | Valores aceptados | Por defecto |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------------- | ----------- |
| model-value / v-model | valor vinculante                                                                                                                                                                  | Date        | —                 | —           |
| range                 | rango de tiempo, incluyendo el tiempo de inicio y el tiempo final. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months | [Date]Array | —                 | —           |

### Slots

| Name     | Description                                                                                                                                                                                                                                                                              | Attribute |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| dateCell | { type, isSelected, day, date }. `type` indicates which month the date belongs, optional values are prev-month, current-month, next-month; `isSelected` indicates whether the date is selected; `day` is the formatted date in the format YYYY-MM-DD; `date` is date the cell represents | data      |

### Methods

| Method     | Description   | Parameters                                              |
| ---------- | ------------- | ------------------------------------------------------- |
| selectDate | Cambiar fecha | today / prev-month / next-month / prev-year / next-year |
