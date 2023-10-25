<script setup lang="ts">
definePage({
  meta: {
    layout: 'empty',
  },
})
</script>

<template>
  <div>
    <div class="text-xl mb-2">
      About
    </div>

    <div class="flex gap-4">
      <VBtn color="primary" to="/">
        Home

        <VIcon end>
          mdi-link
        </VIcon>
      </VBtn>

      <VBtn
        color="primary"
        to="/about"
        disabled
      >
        About

        <VIcon end>
          mdi-link
        </VIcon>
      </VBtn>
    </div>
  </div>
</template>
