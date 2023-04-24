import { defineComponent, ref, toRef } from 'vue'
import Input from '@element-plus/components/input'
import Button from '@element-plus/components/button'
import Form from '../src/form.vue'
import FormItem from '../src/form-item.vue'

interface DomainItem {
  key: number
  value: string
}

const DynamicDomainForm = defineComponent({
  props: {
    onSuccess: Function,
    onError: Function,
    onSubmit: Function,
    model: Object,
  },
  setup(props, { slots }) {
    const propsModel = toRef(props, 'model')
    const model = ref({
      domains: [
        {
          key: 1,
          value: '',
        },
      ],
    })

    const formRef = ref<InstanceType<typeof Form>>()

    const removeDomain = (item: DomainItem) => {
      const index = model.value.domains.indexOf(item)
      if (index !== -1) {
        model.value.domains.splice(index, 1)
      }
    }

    const addDomain = () => {
      model.value.domains.push({
        key: Date.now(),
        value: '',
      })
    }

    const submitForm = async () => {
      if (!formRef.value) return
      try {
        const validate = props.onSubmit
          ? formRef.value.validate(props.onSubmit as any)
          : formRef.value.validate()

        await validate
        props.onSuccess?.()
      } catch (e) {
        props.onError?.(e)
      }
    }

    return () => (
      <Form
        ref={formRef}
        model={{ ...model.value, ...(propsModel.value || {}) }}
      >
        {model.value.domains.map((domain, index) => {
          return (
            <FormItem
              class="domain-item"
              key={domain.key}
              label={`Domain${index}`}
              prop={`domains.${index}.value`}
              rules={{
                required: true,
                message: 'domain can not be null',
                trigger: 'blur',
              }}
            >
              <Input v-model={domain.value} />
              <Button
                class={`delete-domain ${index}`}
                onClick={(e) => {
                  e.preventDefault()
                  removeDomain(domain)
                }}
              >
                Delete
              </Button>
            </FormItem>
          )
        })}
        {slots.default?.()}

        <FormItem>
          <Button class="submit" type="primary" onClick={submitForm}>
            Submit
          </Button>
          <Button class="add-domain" onClick={addDomain}>
            New domain
          </Button>
        </FormItem>
      </Form>
    )
  },
})

export default DynamicDomainForm

export const formatDomainError = (count: number) => {
  return Array.from({ length: count }).reduce((prev: any, _, idx) => {
    const key = `domains.${idx}.value`
    return {
      ...prev,
      [key]: [
        {
          field: key,
          fieldValue: '',
          message: 'domain can not be null',
        },
      ],
    }
  }, {})
}
