<template>
  <footer>
    <div class="divider"/>
    <vue-definition
      sub-title="Last updated"
      title="마지막 수정일">
      2019년 10월 17일
    </vue-definition>
  </footer>
</template>

<script>
import VueDefinition from '~/components/units/Definition'
export default {
  components: {
    VueDefinition
  }
}
</script>

<style lang="scss" scoped>
.divider {
  background-color: $oc-gray-3;
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
}

footer {
  padding-bottom: 20px;
}
</style>