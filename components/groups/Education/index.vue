<template>
  <vue-title-container
    sub-title="Education"
    title="학력">
    <div>
      <vue-definition
        block
        sub-title="2012년 03월 - 2018년 03월"
        title="가천대학교 전자공학과"
        src="/imgs/gachon_logo.png">
        전자공학을 4학기 다녔고, 이후 컴퓨터공학과로 전과했지만 1학기도 듣지 않고 자퇴했습니다.
      </vue-definition>
    </div>
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