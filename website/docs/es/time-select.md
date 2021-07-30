## TimeSelect

Use el Time Select para input de tipo time.

### Selector de tiempo fijo

Provee una lista de tiempo fijo para que los usuarios escojan.

:::demo Use el tag `el-time-select`, se pueden asignar tiempo de inicio, tiempo de finalización y salto de tiempo con `start`, `end` y `step`.
```html
<el-time-select
  v-model="value"
  start='08:30'
  step='00:15'
  end='18:30'
  placeholder="Select time">
</el-time-select>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    }
  }
</script>
```
:::

### Rango de tiempo fijo

Si se escoge el tiempo de inicio al principio, el tiempo de finalización cambiará respectivamente.

:::demo
```html
<template>
  <el-time-select
    placeholder="Start time"
    v-model="startTime"
    start='08:30'
  step='00:15'
  end='18:30'>
  </el-time-select>
  <el-time-select
    placeholder="End time"
    v-model="endTime"
    start='08:30'
    step='00:15'
    end='18:30'
    :minTime="startTime">
  </el-time-select>
</template>

<script>
  export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
  }
</script>
```
:::

### Atributos
| Atributo          | Descripción                              | Tipo                                     | Valores aceptados                        | Por defecto          |
| ----------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | -------------------- |
| model-value / v-model    | valor enlazado                           | string    | —                                        | —                    |
| disabled | si el TimeSelect se encuentra deshabilitado | boolean | — | false |
| editable          | si el input puede ser editado            | boolean                                  | —                                        | true                 |
| clearable         | si mostrar el botón de borrado           | boolean                                  | —                                        | true                 |
| size              | tamaño del input                         | string                                   | medium / small / mini                    | —                    |
| placeholder       | placeholder en un modo fuera de rango    | string                                   | —                                        | —                    |
| name              | como `name` en input nativo              | string                                   | —                                        | —                    |
| prefix-icon       | Clase personalizada para el icono de prefijado | string                                   | —                                        | el-icon-time         |
| clear-icon        | Clase personalizada para el icono `clear` | string                                   | —                                        | el-icon-circle-close |
| start    | tiempo de inicio                         | string | —                 | 09:00       |
| end      | tiempo de finalización                   | string | —                 | 18:00       |
| step     | salto de tiempo                          | string | —                 | 00:30       |
| minTime  | tiempo mínimo, cualquier tiempo antes de éste será deshabilitado | string | —                 | 00:00       |
| maxTime  | tiempo máximo, cualquier tiempo después de éste será deshabilitado | string | —                 | —           |

### Eventos
| Nombre de Evento | Descripción                              | Parámetros                     |
| ---------------- | ---------------------------------------- | ------------------------------ |
| change           | se lanza cuando el usuario confirma el valor | valor vinculado del componente |
| blur             | se lanza cuando el input se difumina     | instancia del componente       |
| focus            | se lanza cuando el input se enfoca       | instancia del componente       |

### Metodos
| Metodo | Descripción                | Parameteros |
| ------ | -------------------------- | ----------- |
| focus  | coloca el foco en el input | —           |
| blur  | quitar el foco en el input | —           |
