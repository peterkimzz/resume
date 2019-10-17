<template>
  <div id="home">
    <vue-container>
      <header>
        <span>Peter Donghyun Kim</span>
        <h1>김동현</h1>
      </header>

      <main>
        <vue-title-container
          sub-title=""
          title="asd">

        </vue-title-container>
      </main>
    </vue-container>
  </div>
</template>

<script>
import VueContainer from '~/containers'
import VueTitleContainer from '~/containers/Title'
export default {
  components: {
    VueContainer,
    VueTitleContainer
  }
}
</script>

<style lang="scss" scoped>
#home {
  padding-top: 30px;
  padding-bottom: 100px;
}

h1 {
  color: $oc-black;
}
</style>