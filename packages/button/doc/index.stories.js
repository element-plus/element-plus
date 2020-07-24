import ElButton from '../index';

export default {
  title: 'Button',
};

export const NormalButton = () => {
  return { template: '<el-button>With Text</el-button>', installer: ElButton };
};
export const ButtonTwo = () => {
  return { template: '<el-button>button two</el-button>', installer: ElButton };
};
