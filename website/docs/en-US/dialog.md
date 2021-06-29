## Dialog

Informs users while preserving the current page state.

### Basic usage

Dialog pops up a dialog box, and it's quite customizable.

:::demo Set `model-value / v-model` attribute with a `Boolean`, and Dialog shows when it is `true`. The Dialog has two parts: `body` and `footer`, and the latter requires a `slot` named `footer`. The optional `title` attribute (empty by default) is for defining a title. Finally, this example demonstrates how `before-close` is used.

```html
<el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>

<el-dialog
  title="Tips"
  v-model="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>This is a message</span>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
    </span>
  </template>
</el-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
            this.dialogVisible = false
          })
          .catch(_ => {});
      }
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';
  import { ElMessageBox } from 'element-plus';

  export default defineComponent({
    setup() {
      const dialogVisible = ref(false);
      
      const handleClose = (done) => {
        ElMessageBox
          .confirm('Are you sure to close this dialog?')
          .then((_) => {
            done();
          })
          .catch((_) => {});
      };
      return {
        dialogVisible,
        handleClose,
      };
    },
  });

</setup>
-->
```
:::

:::tip
`before-close` only works when user clicks the close icon or the backdrop. If you have buttons that close the Dialog in the `footer` named slot, you can add what you would do with `before-close` in the buttons' click event handler.
:::

### Customizations

The content of Dialog can be anything, even a table or a form. This example shows how to use Element Plus Table and Form with Dialog。

:::demo

```html
<el-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</el-button>

<el-dialog title="Shipping address" v-model="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="Date" width="150"></el-table-column>
    <el-table-column property="name" label="Name" width="200"></el-table-column>
    <el-table-column property="address" label="Address"></el-table-column>
  </el-table>
</el-dialog>

<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</el-button>

<el-dialog title="Shipping address" v-model="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="Promotion name" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Zones" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="Please select a zone">
        <el-option label="Zone No.1" value="shanghai"></el-option>
        <el-option label="Zone No.2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
    </span>
  </template>
</el-dialog>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
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
        gridData: [
          {
            date: '2016-05-02',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
          {
            date: '2016-05-04',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
          {
            date: '2016-05-01',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
          {
            date: '2016-05-03',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
        ],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        formLabelWidth: '120px',
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

### Nested Dialog
If a Dialog is nested in another Dialog, `append-to-body` is required.
:::demo Normally we do not recommend using nested Dialog. If you need multiple Dialogs rendered on the page, you can simply flat them so that they're siblings to each other. If you must nest a Dialog inside another Dialog, set `append-to-body` of the nested Dialog to true, and it will append to body instead of its parent node, so both Dialogs can be correctly rendered.
```html
<template>
  <el-button type="text" @click="outerVisible = true">open the outer Dialog</el-button>

  <el-dialog title="Outer Dialog" v-model="outerVisible">
    <template #default>
      <el-dialog
          width="30%"
          title="Inner Dialog"
          v-model="innerVisible"
          append-to-body>
      </el-dialog>
    </template>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="outerVisible = false">Cancel</el-button>
        <el-button type="primary" @click="innerVisible = true">open the inner Dialog</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        outerVisible: ref(false),
        innerVisible: ref(false),
      };
    },
  });

</setup>
-->
```
:::

### Centered content
Dialog's content can be centered.

:::demo Setting `center` to `true` will center dialog's header and footer horizontally. `center` only affects Dialog's header and footer. The body of Dialog can be anything, so sometimes it may not look good when centered. You need to write some CSS if you wish to center the body as well.

```html
<template>
  <el-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</el-button>

  <el-dialog
    title="Warning"
    v-model="centerDialogVisible"
    width="30%"
    center>
    <span>It should be noted that the content will not be aligned in center by default</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        centerDialogVisible: ref(false),
      };
    },
  });

</setup>
-->
```
:::

:::tip
The content of Dialog is lazily rendered, which means the default slot is not rendered onto the DOM until it is firstly opened. Therefore, if you need to perform a DOM manipulation or access a component using `ref`, do it in the `open` event callback.
:::

### Destroy on Close
When this is feature is enabled, the content under default slot will be destroyed with a `v-if` directive. Enable this when you have perf concerns.

:::demo Note that by enabling this feature, the content will not be rendered before `transition.beforeEnter` dispatched, there will only be `overlay` `header(if any)` `footer(if any)`.

```html
<el-button type="text" @click="centerDialogVisible = true">Click to open Dialog</el-button>

<el-dialog
  title="Notice"
  v-model="centerDialogVisible"
  width="30%"
  destroy-on-close
  center>
  <span>Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered</span>
  <div>
    <strong>Extra content (Not rendered)</strong>
  </div>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="centerDialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
    </span>
  </template>

</el-dialog>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        centerDialogVisible: ref(false),
      };
    },
  });

</setup>
-->

```
:::tip
When using `modal` = false, please make sure that `append-to-body` was set to **true**, because `Dialog` was positioned by `position: relative`, when `modal` gets removed, `Dialog` will position itself based on the current position in the DOM, instead of `Document.Body`, thus the style will be messed up.
:::

### Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model   | visibility of Dialog | boolean | — | — |
| title     | title of Dialog. Can also be passed with a named slot (see the following table) | string    | — | — |
| width     | width of Dialog | string / number    | — | 50% |
| fullscreen     | whether the Dialog takes up full screen | boolean    | — | false |
| top      | value for `margin-top` of Dialog CSS | string    | — | 15vh |
| modal     | whether a mask is displayed | boolean   | — | true |
| append-to-body     | whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true` | boolean   | — | false |
| lock-scroll     | whether scroll of body is disabled while Dialog is displayed | boolean   | — | true |
| custom-class      | custom class names for Dialog | string    | — | — |
| open-delay        | Time(milliseconds) before open | number    | — | 0 |
| close-delay       | Time(milliseconds) before close | number    | — | 0 |
| close-on-click-modal | whether the Dialog can be closed by clicking the mask | boolean    | — | true |
| close-on-press-escape | whether the Dialog can be closed by pressing ESC | boolean    | — | true |
| show-close | whether to show a close button | boolean    | — | true |
| before-close | callback before Dialog closes, and it will prevent Dialog from closing | function(done)，done is used to close the Dialog | — | — |
| center | whether to align the header and footer in center | boolean | — | false |
| destroy-on-close | Destroy elements in Dialog when closed   | boolean | — | false |

### Slots

| Name | Description |
|------|--------|
| — | content of Dialog |
| title | content of the Dialog title |
| footer | content of the Dialog footer |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| open | triggers when the Dialog opens | — |
| opened | triggers when the Dialog opening animation ends | — |
| close | triggers when the Dialog closes | — |
| closed | triggers when the Dialog closing animation ends | — |
