## DateTimePicker

Seleccionar fecha y tiempo juntos en un picker.

:::tip
DateTimePicker se deriva de DatePicker y TimePicker. Por una explicación más atributos, puede referirse a DatePicker y TimePicker.
:::

###  Fecha y hora

:::demo Puede seleccionar la fecha y la hora en un picker al mismo tiempo configurando el tipo de fecha y la hora. La forma de utilizar los atajos es la misma que con Date Picker.


```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="Select date and time"
      :shortcuts="shortcuts">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With default time</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="Select date and time"
      :default-time="defaultTime">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'Today',
          value: new Date(),
        }, {
          text: 'Yesterday',
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date
          },
        }, {
          text: 'A week ago',
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date
          },
        }],
        value1: '',
        value2: '',
        value3: '',
        defaultTime: new Date(2000, 1, 1, 12, 0, 0) // '12:00:00'
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
        shortcuts: [
          {
            text: 'Today',
            value: new Date(),
          },
          {
            text: 'Yesterday',
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
          },
          {
            text: 'A week ago',
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
          },
        ],
        value1: '',
        value2: '',
        value3: '',
        defaultTime: new Date(2000, 1, 1, 12, 0, 0), // '12:00:00'
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

### Alcance de fecha y tiempo

:::demo Puede seleccionar la fecha y el rango de tiempo ajustando `type` a `datetimerange`.

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :shortcuts="shortcuts"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'Last week',
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end]
          }
        }, {
          text: 'Last month',
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end]
          }
        }, {
          text: 'Last 3 months',
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end]
          }
        }],
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
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
        shortcuts: [
          {
            text: 'Last week',
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            },
          },
          {
            text: 'Last month',
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            },
          },
          {
            text: 'Last 3 months',
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            },
          },
        ],
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: '',
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

###  Valor de la hora por defecto para la fecha de inicio y la fecha final

:::demo Cuando se selecciona el rango de fechas en el panel con el tipo datetimerange, 00:00:00:00 se usará como el valor de tiempo predeterminado para la fecha de inicio y fin. Podemos controlarlo con el atributo default-time. default-time acepta array of Date objects. La primera posición controla el valor de tiempo de la fecha de inicio y la segunda el valor de tiempo de la fecha de fin.
```html
<template>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="defaultTime1">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00, end date time 08:00:00</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="defaultTime2">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        defaultTime1: [
          new Date(2000, 1, 1, 12, 0, 0),
        ], // '12:00:00'
        defaultTime2: [
          new Date(2000, 1, 1, 12, 0, 0),
          new Date(2000, 2, 1, 8, 0, 0)
        ] // '12:00:00', '08:00:00'
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
        value1: '',
        value2: '',
        defaultTime1: [new Date(2000, 1, 1, 12, 0, 0)], // '12:00:00'
        defaultTime2: [
          new Date(2000, 1, 1, 12, 0, 0),
          new Date(2000, 2, 1, 8, 0, 0),
        ], // '12:00:00', '08:00:00'
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

### Atributos
| Atributos          | Descripción                              | Tipo              | Valores aceptados                        | Por defecto          |
| ------------------ | ---------------------------------------- | ----------------- | ---------------------------------------- | -------------------- |
| model-value / v-model     | valor enlazado                           | date(DateTimePicker) / array(DateTimeRangePicker) | — | — |
| readonly           | si DatePicker es solo de lectura         | boolean           | —                                        | false                |
| disabled           | si DatePicker esta deshabilitada         | boolean           | —                                        | false                |
| editable           | Si la entrada es editable                | boolean           | —                                        | true                 |
| clearable          | Si mostrar el botón de `clear`           | boolean           | —                                        | true                 |
| size               | tamaño del input                         | string            | large/medium/small/mini  | large |
| placeholder        | placeholder cuando el modo NO es Range   | string            | —                                        | —                    |
| start-placeholder  | placeholder para el inicio de fecha en el modo Range | string            | —                                        | —                    |
| end-placeholder    | placeholder para el fin de fecha en el modo Range | string            | —                                        | —                    |
| time-arrow-control | si se puede modificar el `time`  utilizando botones con flechas | boolean           | —                                        | false                |
| type               | tipo del picker                          | string            | year/month/date/datetime/ week/datetimerange/daterange | date                 |
| format             | formato de valor mostrado en el input    | string            | ver [date formats](#/es/component/date-picker#date-formats) | yyyy-MM-dd HH:mm:ss           |
| popper-class       | nombre de clase personalizado para el Dropdown de DatePicker | string            | —                                        | —                    |
| range-separator    | separador de rango                       | string            | -                                        | '-'                  |
| default-value      | opcional, fecha predeterminada del calendario | Fecha             | cualquier cosa aceptada por `new Date()` — |                      |
| default-time | the default time value after picking a date | non-range: Date / range: Date[] | non-range: a Date object, range: array of two Date objects, and the first item is for the start date and second for the end date. Time `00:00:00` will be used if not specified | — |
| name               | igual que `name` en la entrada nativa    | string            | —                                        | —                    |
| unlink-panels      | desconectar dos date-panels en range-picker | boolean           | —                                        | false                |
| prefix-icon        | Clase personalizada para el icono prefijado | string            | —                                        | el-icon-date         |
| clear-icon         | Clase personalizada para el icono `clear` | string              | —                                        | el-icon-circle-close |
| validate-event     | si se debe disparar la validacion | boolean             | -                                        | true                 |
| shortcuts | un array de objetos para establecer opciones de acceso directo | object[{ text: string, value: date / function }] | — | — |
| disabledDate   | una función que determina si una fecha está desactivada con esa fecha como parámetro. Debería devolver un booleano | función  | —                 | —           |
| cellClassName | establecer nombre de clase personalizado | Function(Date) | — | — |

### Eventos
| Nombre de evento | Descripción                              | Parámetros                    |
| ---------------- | ---------------------------------------- | ----------------------------- |
| change           | Se dispara cuando el usuario confirma el valor | valor enlazado del componente |
| blur             | Se dispara cuando el input pierde el foco | instancia del componente      |
| focus            | Se dispara cuando el input obtiene el foco | instancia del componente      |

### Métodos
| Método | Descripción      | Parámetros |
| ------ | ---------------- | ---------- |
| focus  | foco en el input | —          |
