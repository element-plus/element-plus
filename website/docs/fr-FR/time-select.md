## TimeSelect

Utiliser TimeSelect pour sélectionner un horaire.

### Sélection d'horaire fixe

Vous pouvez fournir une liste d'horaires fixés pour que l'utilisateur en choisisse un.

:::demo Utilisez `el-time-select` puis assignez un horaire de début, de fin et un pas grâce aux propriétés `start`, `end` et `step` de l'attribut.
```html
<el-time-select
  v-model="value"
  start='08:30'
  step='00:15'
  end='18:30'
  placeholder="Choisissez un horaire">
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

### Intervalle de temps fixe

Vous pouvez définir un intervalle de temps. Si l'horaire de début est sélectionné en premier, certains horaires de fins seront désactivés s'ils ont lieu avant l'horaire de début.

:::demo
```html
<template>
  <el-time-select
    placeholder="Horaire de début"
    v-model="startTime"
    start='08:30'
  step='00:15'
  end='18:30'>
  </el-time-select>
  <el-time-select
    placeholder="Horaire de fin"
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

### Attributs

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model | La valeur liée. | string | — | — |
| disabled | Si TimeSelect est désactivé. | boolean | — | false |
| editable | Si le champ d'input est éditable. | boolean | — | true |
| clearable | Si un bouton d'effacement doit être affiché. | boolean | — | true |
| size | Taille du champ. | string | medium / small / mini | — |
| placeholder | Placeholder en mode non-intervalle. | string | — | — |
| name | Attribut `name` natif de l'input. | string | — | — |
| prefix-icon | Classe de l'icône de préfixe. | string | — | el-icon-time |
| clear-icon | Classe de l'icône d'effacement. | string | — | el-icon-circle-close |
| start | Horaire de début. | string | — | 09:00 |
| end | Horaire de fin. | string | — | 18:00 |
| step | Intervalle entre les horaires. | string | — | 00:30 |
| minTime | Horaire minimum, n'importe quel horaire avant celui-ci sera désactivé. | string | — | 00:00 |
| maxTime | Horaire maximum, n'importe quel horaire après celui-ci sera désactivé. | string | — | — |


### Évènements

| Nom | Description | Paramètres |
|---------|--------|---------|
| change | Se déclenche quand l'utilisateur confirme la valeur. | La valeur confirmée. |
| blur | Se déclenche quand le composant perd le focus. | L'instance du composant. |
| focus | Se déclenche quand le composant a le focus. | L'instance du composant. |

### Méthodes

| Méthode | Description | Paramètres |
| ---- | ---- | ---- |
| focus | Met le focus sur le composant. | — |
| blur | Enlève le focus sur le composant. | — |
