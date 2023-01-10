<template>
  <button class="button is-primary" @click="toggleModal()">Modal</button>
</template>


<script>
  export default {
    setup() {
      return {
        toggleModal() {
          let modal = document.getElementById('bulma-modal')
          modal.classList.add('is-active')
        }
      }
    }
  }
</script>


<style lang="scss" scoped>

</style>