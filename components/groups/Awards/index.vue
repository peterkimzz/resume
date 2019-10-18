<template>
  <vue-title-container
    sub-title="Awards"
    title="수상">
    <div>
      <vue-definition
        block
        sub-title="2017년 4월 - 6월"
        title="Y Combinator Startup School"
        src="/imgs/startup_school_logo.png">
        미국 엑셀러레이터 Y Combinator의 Startup School 1기 10주 과정을 성공적으로 수료했습니다.
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