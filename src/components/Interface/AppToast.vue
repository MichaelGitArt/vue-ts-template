<script lang="ts" setup>
import type { Handler } from '@vueuse/gesture'
import { useDrag } from '@vueuse/gesture'
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  message?: string
  progress?: number | string
  type: 'error' | 'info' | 'success' | 'warning'
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const onClose = () => {
  emit('close')
}

const attrs = useAttrs()

const classes = computed(() => [
  'a-toast',
  `a-toast--type-${props.type}`,
  attrs.class,
])

const alertRef = ref<HTMLElement>()

const dragHandler: Handler<'drag', PointerEvent> = ({ swipe }) => {
  if (swipe[0] === 1 || swipe[0] === -1 || swipe[1] === 1) {
    onClose()
  }
}

// Composable usage
useDrag(dragHandler, {
  domTarget: alertRef,
  swipeDistance: 20,
})
</script>

<template>
  <div ref="alertRef" class="w-full max-w-120 ml-auto mr-auto">
    <VAlert
      :class="classes"
      closable
      :color="type"
      density="compact"
      variant="flat"
    >
      <template #close>
        <VBtn
          color="white"
          size="42"
          title="Close"
          type="button"
          variant="tonal"
          @click="onClose"
        >
          <VIcon size="16">
            mdi-close-thick
          </VIcon>
        </VBtn>
      </template>
      <slot>
        {{ message }}
      </slot>
      <div
        v-if="progress"
        class="a-toast__progress"
        :style="{
          '--notify-progress': `${progress}%`,
        }"
      />
    </VAlert>
  </div>
</template>

<style lang="scss">
@reference "#tailwind";
.a-toast {
  border-radius: 12px;

  @apply
    w-full whitespace-pre-line relative
  ;

  &--type-warning {
    @apply
      font-medium
    ;
  }

  &__progress {
    @apply
      absolute bottom-0 left-0 right-0 h-1
    ;

    &:after {
      content: '';
      width: var(--notify-progress);

      @apply
        absolute top-0 left-0 h-full
        bg-white/70
      ;
    }
  }
}
</style>
