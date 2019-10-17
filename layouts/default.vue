<template>
  <div id="default__layout">

    <div>
      <nuxt />
    </div>
    <vue-footer/>
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