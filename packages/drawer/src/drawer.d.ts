import { Ref } from 'vue'
export declare type IDrawerDirection = 'ltr' | 'rtl' | 'ttb' | 'btt'

export declare interface IDrawerProps {
  appendToBody: boolean
  beforeClose: (any) => void
  customClass: string
  closeOnPressEscape: boolean
  destroyOnClose: boolean
  modal: boolean
  direction: IDrawerDirection
  modalAppendToBody: boolean
  showClose: boolean
  size: string
  title: string
  modelValue: boolean
  wrapperClosable: boolean
  withHeader: boolean
  lockScroll: boolean
  closeOnClickModal: boolean
}

// XXX fake a vue component for popup
export declare type IDrawerFakeComponentInst = {
  handleClose: () => void
  closeOnClickModal: IDrawerProps[ 'closeOnClickModal' ]
}

export declare type IDrawerPopupOption = {
  props: IDrawerWithPopupOption
  $el: Ref<HTMLElement>
  vVm: IDrawerFakeComponentInst
}

// XXX openModal needed, will be replaced?
export declare type IDrawerPopupModalOption = {
  zIndex?: number
  modalClass?: string
  modalFade?: boolean
}

export declare type IDrawerWithPopupOption = IDrawerProps & IDrawerPopupModalOption
