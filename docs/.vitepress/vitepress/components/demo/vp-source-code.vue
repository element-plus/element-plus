<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { computeFoldRegions } from './code-fold'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
})

const decoded = computed(() => {
  return decodeURIComponent(props.source)
})

const sourceRef = ref<HTMLElement>()

const CHEVRON_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'

const setupFolding = () => {
  const container = sourceRef.value
  const code = container?.querySelector('pre > code')
  if (!container || !code) return

  container.classList.remove('has-fold')

  // Turn every `.line` span into a block-level row and drop the `\n`
  // separator text nodes, so rows can be hidden without leaving blank lines.
  const lineEls: HTMLElement[] = []
  for (const node of Array.from(code.childNodes)) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (/^\s*$/.test(node.textContent ?? '')) node.remove()
    } else if (node instanceof HTMLElement && node.classList.contains('line')) {
      node.classList.add('code-line')
      lineEls.push(node)
    }
  }

  const regions = computeFoldRegions(lineEls.map((el) => el.textContent ?? ''))
  if (!regions.length) return

  container.classList.add('has-fold')

  // Reference-count how many folded regions cover each line, so that
  // unfolding an outer region keeps inner regions collapsed.
  const foldDepths = new Map<HTMLElement, number>()
  const setCovered = (els: HTMLElement[], folded: boolean) => {
    for (const el of els) {
      const depth = (foldDepths.get(el) ?? 0) + (folded ? 1 : -1)
      foldDepths.set(el, depth)
      el.style.display = depth > 0 ? 'none' : ''
    }
  }

  for (const { start, end } of regions) {
    const startEl = lineEls[start]
    const hiddenEls = lineEls.slice(start + 1, end + 1)

    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'code-fold-btn'
    btn.setAttribute('aria-expanded', 'true')
    btn.setAttribute('aria-label', 'Fold code region')
    btn.innerHTML = CHEVRON_SVG
    startEl.appendChild(btn)

    const toggle = () => {
      const folded = startEl.classList.toggle('folded')
      btn.setAttribute('aria-expanded', String(!folded))
      btn.setAttribute(
        'aria-label',
        folded ? 'Unfold code region' : 'Fold code region'
      )
      setCovered(hiddenEls, folded)
      if (folded) {
        const placeholder = document.createElement('span')
        placeholder.className = 'code-fold-placeholder'
        placeholder.textContent = '⋯'
        placeholder.title = `${hiddenEls.length} lines`
        placeholder.addEventListener('click', toggle)
        startEl.appendChild(placeholder)
      } else {
        startEl.querySelector('.code-fold-placeholder')?.remove()
      }
    }
    btn.addEventListener('click', toggle)
  }
}

onMounted(setupFolding)
watch(decoded, async () => {
  await nextTick()
  setupFolding()
})
</script>

<template>
  <div v-show="visible" class="example-source-wrapper">
    <div ref="sourceRef" class="example-source" v-html="decoded" />
  </div>
</template>

<style scoped lang="scss">
:deep(.language-vue) {
  margin: 0 !important;
  border-radius: 0 !important;
}

:deep(.code-line) {
  display: block;
  position: relative;
}

.has-fold {
  :deep(.code-fold-btn) {
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--el-text-color-secondary);
    opacity: 0;
    transition: opacity 0.2s;

    svg {
      transition: transform 0.2s;
    }

    &:hover {
      color: var(--el-text-color-primary);
    }

    &:focus-visible {
      opacity: 1;
      outline: 1px solid var(--el-color-primary);
      border-radius: 2px;
    }
  }

  &:hover :deep(.code-fold-btn),
  :deep(.folded) .code-fold-btn {
    opacity: 1;
  }

  :deep(.folded) {
    .code-fold-btn svg {
      transform: rotate(-90deg);
    }
  }

  :deep(.code-fold-placeholder) {
    display: inline-block;
    margin-left: 6px;
    padding: 0 6px;
    border-radius: 4px;
    background-color: var(--el-fill-color);
    color: var(--el-text-color-secondary);
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: var(--el-fill-color-dark);
      color: var(--el-text-color-primary);
    }
  }
}
</style>
