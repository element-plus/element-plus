## DateTimePicker

Sélectionnez une date et une heure dans un seul picker.

:::tip
DateTimePicker est dérivé de DatePicker et TimePicker. Pour plus d'informations  attributs, vous pouvez vous référer à DatePicker et TimePicker.
:::

### Date et horaire

:::demo Vous pouvez sélectionner une date et un horaire en un seul picker en réglant `type` sur `datetime`. La manière d'utiliser des raccourcis est la même que pour DatePicker.

```html
<template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Selectionnez date et horaire">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Avec raccourcis</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="Selectionnez date et horaire"
      :shortcuts="shortcuts">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Avec horaire par défaut</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="Selectionnez date et horaire"
      :default-time="defaultTime">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'Aujourd\'hui',
          value: new Date(),
        }, {
          text: 'Hier',
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date
          },
        }, {
          text: 'Il y a une semaine',
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
            text: "Aujourd'hui",
            value: new Date(),
          },
          {
            text: 'Hier',
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
          },
          {
            text: 'Il y a une semaine',
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

### Plage de dates et d'horaires

:::demo Vous pouvez sélectionner des plages en configurant `type` sur `datetimerange`.

```html
<template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="à"
      start-placeholder="Date de début"
      end-placeholder="Date de fin">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Avec raccourcis</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :shortcuts="shortcuts"
      range-separator="à"
      start-placeholder="Date de début"
      end-placeholder="Date de fin">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'La semaine passée',
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end]
          }
        }, {
          text: 'Le mois dernier',
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end]
          }
        }, {
          text: 'Les 2 derniers mois',
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
            text: 'La semaine passée',
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            },
          },
          {
            text: 'Le mois dernier',
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            },
          },
          {
            text: 'Les 2 derniers mois',
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

### Horaire par défaut pour les plages de dates

:::demo Lorsque vous sélectionnez une plage de dates dans le panneau de date avec le type `datetimerange`, `00:00:00` sera utilisé comme horaire par défaut pour les dates de début et de fin. Vous pouvez contrôler cette valeur avec l'attribut `default-time`. Il accepte un tableau de une ou deux chaînes de caractères. La première indique l'horaire de la date de début, la deuxième celui de la date de fin.
```html
<template>
  <div class="block">
    <span class="demonstration">Heure de la date de début 12:00:00</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="Date de début"
      end-placeholder="Date de fin"
      :default-time="defaultTime1">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Heure de la date de début 12:00:00, heure de la date de fin 08:00:00</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      start-placeholder="Date de début"
      end-placeholder="Date de fin"
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

### Attributs
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model | La valeur liée. | date(DateTimePicker) / array(DateTimeRangePicker) | — | — |
| readonly | Si le DatePicker est en lecture seule. | boolean | — | false |
| disabled | Si le DatePicker est désactivé. | boolean | — | false |
| editable | Si le champ est éditable. | boolean | — | true |
| clearable | Si la croix de reset doit apparaître. | boolean | — | true |
|size | Taille du champ. | string | large/medium/small/mini  | large |
| placeholder | Le placeholder en mode normal. | string | — | — |
| start-placeholder | Le placeholder de la date de début en mode plage de dates. | string | — | — |
| end-placeholder | Le placeholder de la date de fin en mode plage de dates. | string | — | — |
| time-arrow-control | Si l'horaire peut être sélectionné en utilisant les flèches de direction. | boolean | — | false |
| type | Type du picker. | string | year/month/date/datetime/ week/datetimerange/daterange | date |
| format | Format d'affichage de la date dans le champ. | string | Voir [formats de date](#/fr-FR/component/date-picker#formats-de-date) | YYYY-MM-DD HH:mm:ss |
| popper-class | Nom de classe pour le menu déroulant du DateTimePicker. | string | — | — |
| range-separator | Séparateur de plage. | string | - | '-' |
| default-value | Date par défaut du calendrier, optionnelle. | Date | N'importe quelle valeur acceptée par `new Date()` | — |
| default-time | the default time value after picking a date | non-range: Date / range: Date[] | non-range: a Date object, range: array of two Date objects, and the first item is for the start date and second for the end date. Time `00:00:00` will be used if not specified | — |
| name | Identique au `name` de l'input natif | string | — | — |
| unlink-panels | Rend indépendants les deux panneaux de plage de dates | boolean | — | false |
| prefix-icon | Icône de préfixe. | string | — | el-icon-date |
| clear-icon | Icône de reset | string | — | el-icon-circle-close |
| shortcuts | Un tableau d'objets pour configurer les raccourcis | object[{ text: string, value: date / function }] | — | — |
| disabledDate | Une fonction déterminant si une date est désactivée avec cette date en paramètre. Retourne un Boolean | function | — | — |
| cellClassName | set custom className | Function(Date) | — | — |

### Évènements
| Nom | Description | Paramètres |
|---------|--------|---------|
| change | Se déclenche quand l'utilisateur confirme la valeur | component's binding value |
| blur | Se déclenche quand le champ perds le focus. | component instance |
| focus | Se déclenche quand le champ a le focus. | component instance |

### Méthodes
| Méthode | Description | Paramètres |
|------|--------|-------|
| focus | Focus sur le champ. | — |
