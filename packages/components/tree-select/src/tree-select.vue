<script lang="ts">
import { computed, defineComponent, h, onMounted, reactive, ref } from 'vue'
import { pick } from 'lodash-unified'
import ElSelect from '@element-plus/components/select'
import ElTree from '@element-plus/components/tree'
import { useSelect } from './select'
import { useTree } from './tree'

export default defineComponent({
  name: 'ElTreeSelect',
  props: {
    ...ElSelect.props,
    ...ElTree.props,
  },
  setup(props, context) {
    const { slots, expose } = context

    const select = ref<InstanceType<typeof ElSelect>>()
    const tree = ref<InstanceType<typeof ElTree>>()

    const key = computed(() => props.valueKey || props.nodeKey || 'value')

    const selectProps = useSelect(props, context, { select, tree, key })
    const treeProps = useTree(props, context, { select, tree, key })

    // expose ElTree/ElSelect methods
    const methods = reactive({})
    expose(methods)
    onMounted(() => {
      Object.assign(methods, {
        ...pick(tree.value, [
          'filter',
          'updateKeyChildren',
          'getCheckedNodes',
          'setCheckedNodes',
          'getCheckedKeys',
          'setCheckedKeys',
          'setChecked',
          'getHalfCheckedNodes',
          'getHalfCheckedKeys',
          'getCurrentKey',
          'getCurrentNode',
          'setCurrentKey',
          'setCurrentNode',
          'getNode',
          'remove',
          'append',
          'insertBefore',
          'insertAfter',
        ]),
        ...pick(select.value, ['focus', 'blur']),
      })
    })

    return () =>
      h(
        ElSelect,
        reactive({
          ...selectProps,
          ref: (ref) => (select.value = ref),
        }),
        {
          ...slots,
          default: () =>
            h(
              ElTree,
              reactive({
                ...treeProps,
                ref: (ref) => (tree.value = ref),
              })
            ),
        }
      )
  },
})
</script>
