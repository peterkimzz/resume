<template>
  <vue-title-container
    sub-title="Activities"
    title="활동">
    <div>
      <vue-definition
        block
        sub-title="YouTube Channel"
        title="유튜브 채널">
        코딩 강의 및 취미 생활을 촬영하고 편집해서 종종 업로드 하고 있습니다.
      </vue-definition>
      <vue-definition
        block
        sub-title="Talling"
        title="탈잉"
        href="https://taling.me/Talent/Detail/17455">
        코딩, 프로그래밍 기술에 대한 소규모 오프라인 강의를 진행 중입니다.
      </vue-definition>
      <!-- <vue-definition
        block
        sub-title="class101"
        title="클래스101">
        코딩, 프로그래밍 기술에 대한 온라인 강의를 준비 중입니다.
      </vue-definition> -->
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