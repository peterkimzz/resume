<template>
  <footer>
    <vue-divider/>
    <vue-definition
      sub-title="Last updated"
      title="마지막 수정일">
      2019년 10월 17일
    </vue-definition>
  </footer>
</template>

<script>
import VueDivider from '~/components/units/Divider'
import VueDefinition from '~/components/units/Definition'
export default {
  components: {
    VueDivider,
    VueDefinition
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding-bottom: 20px;
}
</style>