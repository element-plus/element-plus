import { configure } from "@storybook/html";
import { createApp } from "vue";
import ElButton from "@element-plus/button";

const app = createApp();

ElButton(app);
console.log(app);
console.log(require.context("../packages", true, /\.stories\.js$/));
configure(
  require.context("../packages", true, /\.stories\.js$/),
  module,
  "vue"
);
