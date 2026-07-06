<script setup lang="ts">
import ExampleDialog from '@/components/Interface/ExampleDialog.vue'

const notify = useNotify()
const dialog = useGDialog()

function showNotification() {
  notify.success('This is a notification powered by gitart-vue-notify!')
}

function openDialog() {
  dialog.addDialog(ExampleDialog)
}
</script>

<template>
  <div>
    <div class="text-xl mb-2">
      Home
    </div>

    <div class="flex gap-4 mb-6">
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

    <div class="flex gap-4">
      <VBtn color="secondary" @click="showNotification">
        Show Notification
      </VBtn>

      <VBtn color="secondary" @click="openDialog">
        Open Dialog
      </VBtn>
    </div>
  </div>
</template>
