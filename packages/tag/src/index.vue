<template>
    <span
        v-if="!disableTransitions"
        :class="classes"
        :style="{ backgroundColor: color }"
        @click="handleClick"
    >
        <slot />
        <i
            v-if="closable"
            class="el-tag__close el-icon-close"
            @click="handleClose"
        ></i>
    </span>
    <transition v-else name="el-zoom-in-center">
        <span
            :class="classes"
            :style="{ backgroundColor: color }"
            @click="handleClick"
        >
            <slot />
            <i
                v-if="closable"
                class="el-tag__close el-icon-close"
                @click="handleClose"
            ></i>
        </span>
    </transition>
</template>

<script lang='ts'>
import { h, computed } from 'vue';
const ELEMENT: {
  size?: number;
} = {}

export default {
    name: "ElTag",
    props: {
        text: String,
        closable: Boolean,
        type: String,
        hit: Boolean,
        disableTransitions: Boolean,
        color: String,
        size: String,
        effect: {
            type: String,
            default: 'light',
            validator: (val: string): boolean => {
                return ['dark', 'light', 'plain'].indexOf(val) !== -1;
            }
        },
    },
    setup(props, ctx) {
        // computed
        const tagSize = computed(() => {
            // todo ctx.$ELEMENT
            return props.size || (ELEMENT || {}).size
        })

        const classes = computed(() => {
            const { type, hit, effect } = props;
            return [
                "el-tag",
                type ? `el-tag--${type}` : "",
                tagSize ? `el-tag--${tagSize}` : "",
                effect ? `el-tag--${effect}` : "",
                hit && "is-hit",
            ]
        })

        // methods
        const handleClose = (event) => {
            event.stopPropagation();
            ctx.emit('close', event);
        }

        const handleClick = (event) => {
            ctx.emit('close', event);
        }

        return {
            tagSize,
            classes,
            handleClose,
            handleClick,
        }
    },
};
</script>
