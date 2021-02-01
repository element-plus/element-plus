## Calendrier

Affiche un calendrier.

### Usage basique

:::demo Réglez `value` pour spécifier le mois à afficher. Si `value` n'est pas spécifiée, le mois actuel sera affiché. `value` supporte le two-way binding.
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
```
:::

### Contenu personnalisé

:::demo Personnalisez le contenu du calendrier en utilisant le `scoped-slot` appelé `dateCell`. Dans ce `scoped-slot` vous aurez accès au paramètres date (date de la cellule courante), data (incluant les attributs type, isSelected et day). Pour plus d'informations, référez-vous à la documentation ci-dessous.
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

### Intervalle

:::demo Utilisez l'attribut `range` pour afficher un intervalle particulier. Le début doit être un lundi et la fin un dimanche, l'intervalle ne pouvant excéder deux mois.
```html
<el-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]">
</el-calendar>
```
:::

### Localization

The default locale of is English, if you need to use other languages, please check [Internationalization](#/fr-FR/component/i18n)

Note, date time locale (month name, first day of the week ...) are also configed in localization.

### Attributs

| Attribut          | Description   | Type      | Valeurs acceptées     | Défaut   |
|------------------ |-------------- |---------- |---------------------- |--------- |
| model-value / v-model   | Valeur liée.  | Date | —            | —        |
| range             | Intervalle de dates, début et fin inclus. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months. | [Date]Array     | —           | —      |

### Slot dateCell

| Attribut       | Description   | Type      | Valeurs acceptées       | Défaut  |
|-----------------|-------------- |---------- |---------------------- |--------- |
| data            | { type, isSelected, day, date }. `type` indique le mois de la date courante, les valeurs prev-month, current-month et next-month pouvant être utilisées; `isSelected` indique si la date est sélectionnée; `day` est la date formattée en YYYY-MM-DD; `date` est la date de la cellule courante.    | Object      | —           | —      |
