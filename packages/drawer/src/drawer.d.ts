export declare type IDrawerDirection = 'ltr' | 'rtl' | 'ttb' | 'btt'

export declare interface IElDrawerProps {
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
  visible: boolean
  wrapperClosable: boolean
  withHeader: boolean
  lockScroll: boolean
  closeOnClickModal: boolean
}
