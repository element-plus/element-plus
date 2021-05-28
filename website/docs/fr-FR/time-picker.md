## TimePicker

Utiliser TimePicker pour sélectionner un horaire.

### Sélection d'horaire libre

Vous pouvez aussi laisser l'utilisateur choisir librement un horaire.

:::demo Utilisez `el-time-picker` puis l'attribut et sa propriété `disabledHours` `disabledMinutes` and `disabledSeconds` pour déterminer la tranche horaire disponible. Par défaut, vous pouvez utiliser la molette de votre souris, ou les flèches directionnelles si l'attribut `arrow-control` est présent.

```html
<template>
  <el-time-picker
    v-model="value1"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="Horaire libre">
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value2"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="Horaire libre">
  </el-time-picker>
</template>

<script>
  const makeRange = (start, end) => {
    const result = []
    for (let i = start; i <= end; i++) {
      result.push(i)
    }
    return result
  }
  export default {
    data() {
      return {
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40)
      };
    },
    methods: {
      // e.g. allow 17:30:00 - 18:30:00
      disabledHours() {
        return makeRange(0, 16).concat(makeRange(19, 23))
      },
      disabledMinutes (hour) {
        if (hour === 17) {
          return makeRange(0, 29)
        }
        if (hour === 18) {
          return makeRange(31, 59)
        }
      },
      disabledSeconds(hour, minute) {
        if (hour === 18 && minute === 30) {
          return makeRange(1, 59)
        }
      },
    },
  }
</script>
```
:::

### Intervalle de temps libre

Vous pouvez également définir un intervalle libre.

:::demo Ajoutez l'attribut `is-range`. L'attribut `arrow-control` est aussi supporté dans ce mode.
```html
<template>
  <el-time-picker
    is-range
    v-model="value1"
    range-separator="To"
    start-placeholder="Horaire de début"
    end-placeholder="Horaire de fin">
  </el-time-picker>
  <el-time-picker
    is-range
    arrow-control
    v-model="value2"
    range-separator="To"
    start-placeholder="Horaire de début"
    end-placeholder="Horaire de fin">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>
```
:::

### Attributs

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model | La valeur liée. | Date | - | - |
| readonly | Si TimePicker est en lecture seule. | boolean | — | false |
| disabled | Si TimePicker est désactivé. | boolean | — | false |
| editable | Si le champ d'input est éditable. | boolean | — | true |
| clearable | Si un bouton d'effacement doit être affiché. | boolean | — | true |
| size | Taille du champ. | string | medium / small / mini | — |
| placeholder | Placeholder en mode non-intervalle. | string | — | — |
| start-placeholder | Placeholder de l'horaire de début en mode intervalle. | string | — | — |
| end-placeholder | Placeholder de l'horaire de fin en mode intervalle. | string | — | — |
| is-range | Si le mode intervalle est activé | boolean | — | false |
| arrow-control | Si les flèches directionnelles peuvent être utilisées | boolean | — | false |
| align | Alignement. | left / center / right | left |
| popper-class | Classe du menu du TimePicker. | string | — | — |
| range-separator | Séparateur d'intervalle. | string | - | '-' |
| format | format of the displayed value in the input box | string | see [date formats](#/en-US/component/date-picker#date-formats) | HH:mm:ss |
| default-value | Optionnel, date d'aujourd'hui par défaut. | `Date` pour le TimePicker, `string` pour le TimeSelect | Toute valeur acceptée par `new Date()` pour le TimePicker, une valeur sélectionnable pour TimeSelect. | — |
| name | Attribut `name` natif de l'input. | string | — | — |
| prefix-icon | Classe de l'icône de préfixe. | string | — | el-icon-time |
| clear-icon | Classe de l'icône d'effacement. | string | — | el-icon-circle-close |
| disabledHours | To specify the array of hours that cannot be selected | function | — | - |
| disabledMinutes | To specify the array of minutes that cannot be selected | function(selectedHour) | — | - |
| disabledSeconds | To specify the array of seconds that cannot be selected | function(selectedHour, selectedMinute) | — | - |

### Évènements

| Nom | Description | Paramètres |
|---------|--------|---------|
| change | Se déclenche quand l'utilisateur confirme la valeur. | La valeur confirmée. |
| blur | Se déclenche quand le composant perd le focus. | L'instance du composant. |
| focus | Se déclenche quand le composant a le focus. | L'instance du composant. |

### Méthodes

| Méthode | Description | Paramètres |
| ---- | ---- | ---- |
| focus | Met le focus sur le composant. | - |
