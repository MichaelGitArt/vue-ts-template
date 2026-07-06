import type { App } from 'vue'
import { gitartDialogPlugin } from 'gitart-manage-vue-dialog'
import { notifyPlugin } from 'gitart-vue-notify'
import { getActivePinia } from 'pinia'
import 'gitart-vue-notify/dist/style.css'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    $dialog: any
    $notify: any
  }
}

export default {
  install(app: App) {
    app.use(notifyPlugin, {
      defaults: {
        position: 'top',
        duration: 3000,
      },
    })

    app.use(gitartDialogPlugin)

    const pinia = getActivePinia()

    if (!pinia)
      throw new Error('[gitart plugin] Pinia must be installed before this plugin.')

    pinia.use((context) => {
      return {
        $dialog: context.app.config.globalProperties.$dialog,
        $notify: context.app.config.globalProperties.$notify,
      }
    })
  },
}
