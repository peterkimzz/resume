<template>
  <div class="image-viewer">
    <img
      :src="src"
      :alt="alt"/>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  border-radius: 40%;
  width: 100%;
}
</style>