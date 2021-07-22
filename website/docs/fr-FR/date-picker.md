## DatePicker

Utilisez DatePicker pour les champs de dates.

### Entrez la date

L'unité de base du DatePicker est le jour.

:::demo L'unité est déterminée par l'attribut `type`. You can enable quick options via `shortcuts` property. L'état désactivé est contrôlé par `disabledDate` qui est une fonction.

```html
<template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Choississez un jour">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Picker avec raccourcis</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Choississez un jour"
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
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          },
        }, {
          text: 'A week ago',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          },
        }],
        value1: '',
        value2: '',
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
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
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

### Autres unités

Vous pouvez sélectionner une semaine, un mois, une année ou plusieurs dates en ajoutant des options grâce aux attributs.

:::demo

```html
<div class="container">
  <div class="block">
    <span class="demonstration">Semaine</span>
    <el-date-picker
      v-model="value1"
      type="week"
      format="[Week] ww"
      placeholder="Sélectionnez une semaine">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Mois</span>
    <el-date-picker
      v-model="value2"
      type="month"
      placeholder="Sélectionnez un mois">
    </el-date-picker>
  </div>
</div>
<div class="container">
  <div class="block">
    <span class="demonstration">Année</span>
    <el-date-picker
      v-model="value3"
      type="year"
      placeholder="Sélectionnez une année">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Dates</span>
    <el-date-picker
      type="dates"
      v-model="value4"
      placeholder="Sélectionnez une ou plusieurs dates">
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
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        value1: '',
        value2: '',
        value3: '',
        value4: '',
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

### Plage de dates

Vous pouvez sélectionner une plage de dates.

:::demo Lorsque ce mode est activé, les deux panneaux sont liés par défaut. Si vous souhaitez qu'ils changent de mois de manière indépendante, ajoutez l'attribut `unlink-panels`.

```html
<template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="à"
      start-placeholder="Date de début"
      end-placeholder="Date de fin">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Avec des options</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      unlink-panels
      range-separator="à"
      start-placeholder="Date de début"
      end-placeholder="Date de fin"
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
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          },
        }, {
          text: 'Last month',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          },
        }, {
          text: 'Last 3 months',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          },
        }],
        value1: '',
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
        value1: '',
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

### Plage de mois

Vous pouvez sélectionner une plage de mois.

:::demo Lorsque ce mode est activé, les panneaux gauche et droit sont liés par défaut. Si vous voulez que les deux panneaux switch indépendamment les années en cours, vous pouvez utiliser l'attribut `unlink-panels`.
```html
<template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value1"
      type="monthrange"
      range-separator="à"
      start-placeholder="Mois de début"
      end-placeholder="Mois de fin">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Avec options</span>
    <el-date-picker
      v-model="value2"
      type="monthrange"
      unlink-panels
      range-separator="à"
      start-placeholder="Mois de début"
      end-placeholder="Mois de fin"
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
          value: () => {
            const end = new Date()
            const start = new Date(new Date().getFullYear(), 0)
            return [start, end]
          },
        }, {
          text: 'Last 6 months',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 6)
            return [start, end]
          },
        }],
        value1: '',
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
            text: 'This month',
            value: [new Date(), new Date()],
          },
          {
            text: 'This year',
            value: () => {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              return [start, end];
            },
          },
          {
            text: 'Last 6 months',
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              return [start, end];
            },
          },
        ],
        value1: '',
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

### Valeur par défaut

Si l'utilisateur n'a pas sélectionné de date, vous pouvez montrer la date d'aujourd'hui par défaut. Utilisez `default-value` pour montrer une autre date. Sa valeur doit être parsable par `new Date()`.

Si le type est `daterange`, `default-value` configure la panneau de gauche.

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">Date</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Sélectionnez une date"
      :default-value="new Date(2010, 9, 1)">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Plage de dates</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      start-placeholder="Date de début"
      end-placeholder="Date de fin"
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
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const value1 = ref('');
      const value2 = ref('');

      return {
        value1,
        value2,
      };
    },
  });

</setup>
-->
```
:::

### Formats de date

Utilisez `format` pour contrôler l'affichage de la date dans le champ. Utilisez `value-format` pour contrôler le format de la variable stockée.

Par défaut, le composant accepte et émet un objet `Date`.

Check the list [here](https://day.js.org/docs/en/display/format#list-of-all-available-formats) of all available formats of Day.js.

:::warning
Attention à la capitalisation !
:::

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">Émet un objet Date</span>
    <div class="demonstration">Value: {{ value1 }}</div>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Sélectionnez une date"
      format="YYYY/MM/DD">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Utilise value-format</span>
    <div class="demonstration">Value：{{ value2 }}</div>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Sélectionnez une date"
      format="YYYY/MM/DD"
      value-format="YYYY-MM-DD">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Timestamp</span>
    <div class="demonstration">Value：{{ value3 }}</div>
    <el-date-picker
      v-model="value3"
      type="date"
      placeholder="Sélectionnez une date"
      format="YYYY/MM/DD"
      value-format="x">
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
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const value1 = ref('');
      const value2 = ref('');
      const value3 = ref('');

      return {
        value1,
        value2,
        value3,
      };
    },
  });

</setup>
-->
```
:::

### Horaire par défaut pour les dates de fin et de début

Lorsque vous choisissez une plage de dates, vous pouvez assigner l'horaire de départ et de fin pour chacune des dates.

:::demo By default, the time part of start date and end date are both `00:00:00`. Setting `default-time` can change their time respectively. It accepts an array of up to two Date objects. The first string sets the time for the start date, and the second for the end date.
```html
<template>
  <div class="block">
    <p>Valeur: {{ value }}</p>
    <el-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="Date de début"
      end-placeholder="Date de fin"
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
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const value = ref('');
      const defaultTime = ref([
        new Date(2000, 1, 1, 0, 0, 0),
        new Date(2000, 2, 1, 23, 59, 59),
      ]); // '00:00:00', '23:59:59'

      return {
        value,
        defaultTime,
      };
    },
  });

</setup>
-->
```
:::

### Localization

The default locale of is English, if you need to use other languages, please check [Internationalization](#/fr-FR/component/i18n)

Note, date time locale (month name, first day of the week ...) are also configed in localization.

### Attributs
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model | La valeur liée. | date(DatePicker) / array(DateRangePicker) | — | — |
| readonly | Si le DatePicker est en lecture seule. | boolean | — | false |
| disabled | Si le DatePicker est désactivé. | boolean | — | false |
| size | Taille du champs. | string | large/medium/small/mini  | large |
| editable | Si le champ est éditable. | boolean | — | true |
| clearable | Si la croix de reset doit apparaître. | boolean | — | true |
| placeholder | Le placeholder en mode normal. | string | — | — |
| start-placeholder | Le placeholder pour la date de début en mode plage de dates. | string | — | — |
| end-placeholder | Le placeholder pour la date de fin en mode plage de dates. | string | — | — |
| type | Type du picker. | string | year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange | date |
| format | Format d'affichage dans le champ. | string | Voir [formats de date](#/fr-FR/component/date-picker#formats-de-date). | YYYY-MM-DD |
| popper-class | Nom de classe pour le menu déroulant du DatePicker. | string | — | — |
| range-separator | Séparateur de plage de dates. | string | — | '-' |
| default-value | Date par défaut du calendrier, optionnelle. | Date | Tout ce qui est accepté par `new Date()` | — |
| default-time | optional, the time value to use when selecting date range | Date[] | Array with length 2, each item is a Date. The first item for the start date and then second item for the end date | — |
| value-format | Format de la variable stockée, optionnel. Si non spécifié, la valeur sera un objet Date. | string | Voir [formats de date](#/fr-FR/component/date-picker#formats-de-date). | — |
| name | Identique au `name` de l'input natif | string | — | — |
| unlink-panels | Rend indépendants les deux panneaux de plage de dates. | boolean | — | false |
| prefix-icon | Icône de préfixe. | string | — | el-icon-date |
| clear-icon | Icône de reset. | string | — | el-icon-circle-close |
| validate-event | Si la validation doit être déclenchée. | boolean | - | true |
| disabledDate | Une fonction qui détermine si une date est désactivée ou pas, avec cette date en paramètre. Doit retourner un booléen. | function | — | — |
| shortcuts | Un tableau d'objets pour configurer les raccourcis | object[{ text: string, value: date / function }] | — | — |

### Raccourcis
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | Titre du raccourci. | string | — | — |
| onClick | Callback se déclenchant quand le raccourci est cliqué, avec `vm` en paramètre. Vous pouvez changer la valeur du picker en émettant l'évènement `pick`. Exemple: `vm.$emit('pick', new Date())`| function | — | — |

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

### Slots
| Nom    | Description |
|---------|-------------|
| range-separator  | Séparateur d'intervalle personnalisé. |
