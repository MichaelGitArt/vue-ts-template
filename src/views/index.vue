<script setup lang="ts">

</script>

<template>
  <div>
    <div class="text-xl mb-2">
      Home
    </div>

    <div class="flex gap-4">
      <VBtn
        color="primary"
        to="/"
        disabled
      >
        Home

        <VIcon end>
          mdi-link
        </VIcon>
      </VBtn>

      <VBtn color="primary" to="/about">
        About

        <VIcon end>
          mdi-link
        </VIcon>
      </VBtn>
    </div>
  </div>
</template>
