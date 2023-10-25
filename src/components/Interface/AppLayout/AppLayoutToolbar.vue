<template>
  <VAppBar density="compact">
    <VContainer class="flex items-center py-0">
      <VToolbarTitle>
        <RouterLink to="/">
          Gitart
        </RouterLink>
      </VToolbarTitle>

      <VMenu>
        <template #activator="{ props }">
          <VBtn
            density="comfortable"
            icon
            v-bind="props"
          >
            <VIcon>
              mdi-menu
            </VIcon>
          </VBtn>
        </template>

        <VCard width="200">
          <VList>
            <VListItem to="/about">
              About
            </VListItem>
          </VList>
        </VCard>
      </VMenu>
    </VContainer>
  </VAppBar>
</template>
