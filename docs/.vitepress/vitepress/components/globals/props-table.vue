<script setup lang="ts">
import { useLocale } from '../../composables/locale'
import tableI18n from '../../../i18n/component/table.json'
import FunctionApi from './vp-api-function.vue'
import EnumApi from './vp-api-enum.vue'
import StringApi from './vp-api-string.vue'
import BoolApi from './vp-api-bool.vue'
import NumberApi from './vp-api-number.vue'

interface FunctionTypeValues {
  params: Array<[string, string]>
  returns: string
}

type EnumTypeValues = Array<string | boolean>

interface PropDefs {
  description: string
  name: string
  required?: boolean
  default: string
  typeSimple?: 'function' | 'enum'
  type: string | FunctionTypeValues | EnumTypeValues
}

defineProps({
  data: Array<PropDefs>,
})

const SYNTHETIC_API_COMP_MAP = {
  function: FunctionApi,
  enum: EnumApi,
}

const PRIMITIVE_API_COMP_MAP = {
  string: StringApi,
  boolean: BoolApi,
  number: NumberApi,
}

const tableLocale = useLocale(tableI18n)
</script>

<template>
  <div class="vp-table">
    <table>
      <thead>
        <tr>
          <th>
            {{ tableLocale['name'] }}
          </th>
          <th>
            {{ tableLocale['description'] }}
          </th>
          <th>
            {{ tableLocale['type'] }}
          </th>
          <th>
            {{ tableLocale['default'] }}
          </th>
        </tr>
      </thead>

      <tbody>
        <template
          v-for="{
            name,
            type,
            typeSimple,
            required,
            default: defaultValue,
            description,
          } in data"
          :key="name"
        >
          <tr>
            <td class="props-table-api-name">
              <code>
                {{ name }}
                {{ required ? '*' : null }}
              </code>
            </td>
            <td>
              {{ description }}
            </td>
            <td>
              <template v-if="typeSimple">
                <component
                  :is="SYNTHETIC_API_COMP_MAP[typeSimple]"
                  v-bind="type"
                />
              </template>
              <template v-else>
                <component :is="PRIMITIVE_API_COMP_MAP[type as string]" />
              </template>
            </td>
            <td>
              <code v-if="defaultValue">{{ defaultValue }}</code>
              <span v-else> — </span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
