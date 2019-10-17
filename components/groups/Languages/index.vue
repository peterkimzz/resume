<template>
  <vue-title-container
    sub-title="Languages"
    title="언어">
    <vue-definition
      sub-title="English"
      title="영어">기초 회화</vue-definition>
  </vue-title-container>
</template>

<script>
import VueTitleContainer from '~/containers/Title'
import VueDefinition from '~/components/units/Definition'
export default {
  components: {
    VueTitleContainer,
    VueDefinition
  }
}
</script>