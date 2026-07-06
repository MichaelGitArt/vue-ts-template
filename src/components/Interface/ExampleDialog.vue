<script setup lang="ts">
const modelValue = defineModel<boolean>({ required: true })

const onClose = () => {
  modelValue.value = false
}
</script>

<template>
  <VDialog v-model="modelValue" width="400">
    <VCard class="pa-6">
      <h3 class="text-lg font-semibold mb-2 text-slate-800">
        Example Dialog
      </h3>
      <p class="text-sm text-slate-600 mb-4">
        This is an overlay dialog powered by Vuetify and gitart-manage-vue-dialog!
      </p>
      <div class="d-flex justify-end">
        <VBtn color="primary" @click="onClose">
          Close
        </VBtn>
      </div>
    </VCard>
  </VDialog>
</template>
