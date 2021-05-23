
## DatePicker

Utilice Date Picker para introducir la fecha.

###  Ingresar Fecha

Date Picker básico por "día".

:::demo La medida está determinada por el atributo `type` . You can enable quick options via `shortcuts` property. La fecha desactivada se ajusta mediante `disabledDate`, que es una función.


```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Picker with quick options</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a day"
      :disabled-date="disabledDate"
      :shortcuts="shortcuts"
    >
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: 'Today',
          value: new Date(),
        }, {
          text: 'Yesterday',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          })(),
        }, {
          text: 'A week ago',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          })(),
        }],
        value1: '',
        value2: '',
      };
    }
  };
</script>
```

:::

### Otras mediciones

Puede elegir la semana, el mes, el año o varias fechas ampliando el componente estándar del selector de fechas.

:::demo

```html
<div class="container">
  <div class="block">
    <span class="demonstration">Week</span>
    <el-date-picker
      v-model="value1"
      type="week"
      format="[Week] ww"
      placeholder="Pick a week">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Month</span>
    <el-date-picker
      v-model="value2"
      type="month"
      placeholder="Pick a month">
    </el-date-picker>
  </div>
</div>
<div class="container">
  <div class="block">
    <span class="demonstration">Year</span>
    <el-date-picker
      v-model="value3"
      type="year"
      placeholder="Pick a year">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Dates</span>
    <el-date-picker
      type="dates"
      v-model="value4"
      placeholder="Pick one or more dates">
    </el-date-picker>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      };
    }
  };
</script>
```

:::

###  Rango de fechas

Se soporta la selección de un rango de fechas.

:::demo En modo de rango, los paneles izquierdo y derecho están vinculados por defecto. Si desea que los dos paneles cambien los meses actuales de forma independiente, puede utilizar el atributo `unlink-panels`.

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With quick options</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      :shortcuts="shortcuts"
    >
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'Last week',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          })(),
        }, {
          text: 'Last month',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          })(),
        }, {
          text: 'Last 3 months',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          })(),
        }],
        value1: '',
        value2: ''
      };
    }
  };
</script>
```

:::

### Rango de mes

Se admite la selección de un intervalo de un mes.

:::demo Cuando se encuentra en el modo de rango, los paneles izquierdo y derecho están enlazados de forma predeterminada. Si desea que los dos paneles cambien de año en curso de forma independiente, puede utilizar el atributo unlink-panels.
```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="monthrange"
      range-separator="To"
      start-placeholder="Start month"
      end-placeholder="End month">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With quick options</span>
    <el-date-picker
      v-model="value2"
      type="monthrange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start month"
      end-placeholder="End month"
      :shortcuts="shortcuts"
    >
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'This month',
          value: [new Date(), new Date()],
        }, {
          text: 'This year',
          value: (() => {
            const end = new Date()
            const start = new Date(new Date().getFullYear(), 0)
            return [start, end]
          })(),
        }, {
          text: 'Last 6 months',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 6)
            return [start, end]
          })(),
        }],
        value1: '',
        value2: ''
      };
    }
  };
</script>
```
:::

###  Valor por defecto

Si el usuario no ha escogido una fecha, muestra el calendario de hoy por defecto. Puede utilizar `default-value` para fijar otra fecha. Su valor debe ser definido por `new Date()`.

Si el tipo es `daterange`, `default-value` establece el calendario del lado izquierdo.

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">date</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a date"
      :default-value="new Date(2010, 9, 1)">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">daterange</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: ''
      };
    }
  };
</script>
```
:::

###  Formatos de Date
Utilice `format` para controlar el formato del texto visualizado en el input.

Por defecto, el componente acepta y emite un objeto Date.

Check the list [here](https://day.js.org/docs/en/display/format#list-of-all-available-formats) of all available formats of Day.js.

:::warning
Preste atención a la capitalización
:::

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">Emits Date object</span>
    <div class="demonstration">Value: {{ value1 }}</div>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a Date"
      format="YYYY/MM/DD">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
</script>
```
:::

###  Hora por defecto para comienzo y fin de fecha

Al seleccionar un intervalo de fechas, puede asignar la hora para la fecha de inicio y la fecha final.

:::demo Por defecto, la hora de la fecha de inicio y final es `00:00:00`. Configurar `default-time`  puede cambiar la hora respectivamente. Acepta un array de Date dos cadenas. La primera cadena fija la hora para la fecha de inicio y la segunda para la fecha final.

```html
<template>
  <div class="block">
    <p>Component value：{{ value }}</p>
    <el-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="Start date"
      end-placeholder="End date"
      :default-time="defaultTime"
    ></el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        defaultTime: [
          new Date(2000, 1, 1, 0, 0, 0),
          new Date(2000, 2, 1, 23, 59, 59)
        ] // '00:00:00', '23:59:59'
      };
    }
  };
</script>
```
:::

### Localization

The default locale of is English, if you need to use other languages, please check [Internationalization](#/es/component/i18n)

Note, date time locale (month name, first day of the week ...) are also configed in localization.

### Atributos
| Atributo          | Descripción                              | Tipo              | Valores aceptados                        | Por defecto          |
| ----------------- | ---------------------------------------- | ----------------- | ---------------------------------------- | -------------------- |
| model-value / v-model    | valor enlazado | date(DatePicker) / array(DateRangePicker) | — | — |
| readonly          | si DatePicker es solo de lectura         | boolean           | —                                        | false                |
| disabled          | si DatePicker esta deshabilitado         | boolean           | —                                        | false                |
| size              | tamaño del input                         | string            | large/medium/small/mini  | large |
| editable          | si el input es editable                  | boolean           | —                                        | true                 |
| clearable         | si se muestra el botón de borrado   | boolean           | —                                        | true                 |
| placeholder       | placeholder cuando el modo NO es rango   | string            | —                                        | —                    |
| start-placeholder | placeholder para la fecha de inicio en modo rango | string            | —                                        | —                    |
| end-placeholder   | placeholder para la fecha final en modo rango | string            | —                                        | —                    |
| type              | tipo de picker                           | string            | year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange | date                 |
| format            | formato en que se muestra el valor en el input | string            | ver [date formats](#/es/component/date-picker#date-formats) | yyyy-MM-dd           |
| align             | alineación                               | left/center/right | left                                     |                      |
| popper-class      | nombre de clase personalizada para el dropdown de DatePicker | string            | —                                        | —                    |
| range-separator   | separador de rangos                      | string            | —                                        | '-'                  |
| default-value     | opcional, valor por defecto para el calendario | Date              | cualquiera aceptado por `new Date()`     | —                    |
| default-time | optional, the time value to use when selecting date range | Date[] | Array with length 2, each item is a Date. The first item for the start date and then second item for the end date | — |
| name              | igual que `name` en el input nativo      | string            | —                                        | —                    |
| unlink-panels     | desvincular los dos paneles de fecha en el range-picker | boolean           | —                                        | false                |
| prefix-icon       | Clase personalizada para el icono prefijado | string            | —                                        | el-icon-date         |
| clear-icon        | Clase personalizada para el icono `clear` | string            | —                                        | el-icon-circle-close |
| disabledDate   | una función que determina si una fecha está desactivada con esa fecha como parámetro. Debería devolver un valor booleano | function                       | —                 | —           |
| shortcuts | un array de objetos para establecer opciones de acceso directo | object[{ text: string, value: Date }] | — | — |

### Eventos
| Nombre | Descripción                              | Parametros                   |
| ------ | ---------------------------------------- | ---------------------------- |
| change | se dispara cuando el usuario confirma el valor | valor enlazado al componente |
| blur   | se dispara cuando el input pierde el foco | instancia del componente     |
| focus  | se dispara cuando el input obtiene el foco | instancia del componente     |

### Metodos
| Metodo | Descripción                | Parameteros |
| ------ | -------------------------- | ----------- |
| focus  | coloca el foco en el input | —           |

### Slots
| Name            | Description                           |
| --------------- | ------------------------------------- |
| range-separator | Separador de los rangos personalizado |
