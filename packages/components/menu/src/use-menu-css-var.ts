import useMenuColor from './use-menu-color'

export const useMenuCssVar = (props) => {
  return {
    '--el-menu-text-color': props.textColor || '',
    '--el-menu-hover-text-color': props.textColor || '',
    '--el-menu-background-color': props.backgroundColor || '',
    '--el-menu-hover-background-color': useMenuColor(props).value || '',
    '--el-menu-active-color': props.activeTextColor || '',
  }
}
