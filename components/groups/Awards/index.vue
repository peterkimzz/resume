<template>
  <vue-title-container
    sub-title="Awards"
    title="수상">
    <div>
      <vue-definition
        block
        verified
        sub-title="2017년 4월 - 6월"
        title="Y Combinator Startup School"
        src="/imgs/startup_school_logo.png"
        href="https://www.credential.net/4mnpykcw/sso?code=1993">
        미국 엑셀러레이터 Y Combinator의 Startup School 1기 10주 과정을 성공적으로 수료했습니다. 이 때 지원했던 프로젝트는 "Hoopee" 모바일 앱이었습니다.
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