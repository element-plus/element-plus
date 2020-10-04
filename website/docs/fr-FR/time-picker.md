## TimePicker

Utiliser TimePicker pour sélectionner un horaire.

### Sélection d'horaire libre

Vous pouvez aussi laisser l'utilisateur choisir librement un horaire.

:::demo Utilisez `el-time-picker` puis l'attribut `picker-options` et sa propriété `selectableRange` pour déterminer la tranche horaire disponible. Par défaut, vous pouvez utiliser la molette de votre souris, ou les flèches directionnelles si l'attribut `arrow-control` est présent.

```html
<template>
  <el-time-picker
    v-model="value1"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Horaire libre">
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Horaire libre">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40)
      };
    }
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
| value / v-model | La valeur liée. | date(TimePicker) / string(TimeSelect) | - | - |
| readonly | Si TimePicker est en lecture seule. | boolean | — | false |
| disabled | Si TimePicker est désactivé. | boolean | — | false |
| editable | Si le champ d'input est éditable. | boolean | — | true |
| clearable | Si un bouton d'effacement doit être affiché. | boolean | — | true |
| size | Taille du champ. | string | medium / small / mini | — |
| placeholder | Placeholder en mode non-intervalle. | string | — | — |
| start-placeholder | Placeholder de l'horaire de début en mode intervalle. | string | — | — |
| end-placeholder | Placeholder de l'horaire de fin en mode intervalle. | string | — | — |
| is-range | Si le mode intervalle est activé, marche avec `<el-time-picker>`. | boolean | — | false |
| arrow-control | Si les flèches directionnelles peuvent être utilisées, marche avec `<el-time-picker>`. | boolean | — | false |
| align | Alignement. | left / center / right | left |
| popper-class | Classe du menu du TimePicker. | string | — | — |
| picker-options | Options additionnelles, voir la table ci-dessous. | object | — | {} |
| range-separator | Séparateur d'intervalle. | string | - | '-' |
| default-value | Optionnel, date d'aujourd'hui par défaut. | `Date` pour le TimePicker, `string` pour le TimeSelect | Toute valeur acceptée par `new Date()` pour le TimePicker, une valeur sélectionnable pour TimeSelect. | — |
| value-format | Optionnel, uniquement pour TimePicker, format de la valeur. Si non spécifié, la valeur sera un objet `Date`. | string | Voir [date formats](#/en-US/component/date-picker#date-formats) | — |
| name | Attribut `name` natif de l'input. | string | — | — |
| prefix-icon | Classe de l'icône de préfixe. | string | — | el-icon-time |
| clear-icon | Classe de l'icône d'effacement. | string | — | el-icon-circle-close |

### Options de TimePicker

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| selectableRange | Intervalle de temps disponible, e.g.`'18:30:00 - 20:30:00'` ou ` ['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | string / array | — | — |
| format | Format du sélecteur. | string | hour `HH`, minute `mm`, second `ss`, AM/PM `A` | HH:mm:ss |

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
