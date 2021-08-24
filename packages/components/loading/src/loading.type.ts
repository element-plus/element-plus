import type { Ref, VNode } from 'vue'

export type ILoadingOptions = {
    parent?: ILoadingParentElement
    background?: string
    svg?: string
    svgViewBox?: string
    spinner?: boolean | string
    text?: string
    fullscreen?: boolean
    body?: boolean
    lock?: boolean
    customClass?: string
    visible?: boolean
    target?: string | HTMLElement
}

export type ILoadingInstance = {
    parent?: Ref<ILoadingParentElement>
    background?: Ref<string>
    spinner?: Ref<boolean | string>
    text?: Ref<string>
    fullscreen?: Ref<boolean>
    body?: Ref<boolean>
    lock?: Ref<boolean>
    customClass?: Ref<string>
    visible?: Ref<boolean>
    target?: Ref<string | HTMLElement>
    originalPosition?: Ref<string>
    originalOverflow?: Ref<string>
    setText: (text: string) => void
    close: () => void
    handleAfterLeave: () => void
    vm: VNode
    $el: HTMLElement
}

export type ILoadingGlobalConfig = {
    fullscreenLoading: ILoadingInstance
}

export type ILoadingCreateComponentParams = {
    options: ILoadingOptions
    globalLoadingOption: ILoadingGlobalConfig
}

export interface ILoadingParentElement extends HTMLElement {
    vLoadingAddClassList?: () => void
}
