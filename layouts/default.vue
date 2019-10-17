<template>
  <div id="default__layout">
    <main>
      <nuxt />
    </main>
    <!-- <vue-footer/> -->
  </div>
</template>

<script>
import VueFooter from '~/components/groups/Footer'
export default {
  components: {
    VueFooter
  }
}
</script>

<style lang="scss" scoped>
main {
  padding-top: 60px;
  padding-bottom: 100px;
}
</style>