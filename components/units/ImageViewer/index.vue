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
  height: 100%;
  padding: 5px;
  box-shadow: 1px 1px 10px $oc-gray-4;
  object-fit: contain;
}
</style>