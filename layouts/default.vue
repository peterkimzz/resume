<template>
  <div id="default__layout">
    <main>
      <nuxt/>
    </main>
    <vue-container>
      <vue-footer/>
    </vue-container>
  </div>
</template>

<script>
import VueContainer from '~/containers'
import VueFooter from '~/components/groups/Footer'
export default {
  components: {
    VueContainer,
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