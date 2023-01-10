<template>
  <div class="modal" id="bulma-modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <h1>Hello</h1>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal()"></button>
  </div>
</template>


<script>
export default {
  setup() {
    return {
      closeModal() {
        let modal = document.getElementById('bulma-modal')
        modal.classList.remove('is-active')
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>