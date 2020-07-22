import { createApp } from "vue";
import ElButton from "../src/index.vue";
const app = createApp(ElButton);
export default {
  title: "Button",
};

export const NormalButton = () => {
  () => app.mount("#root");
  return "<el-button>with text</el-button>";
};
export const ButtonTwo = () => "<el-button>button two</el-button>";
