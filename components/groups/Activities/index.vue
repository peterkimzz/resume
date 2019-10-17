<template>
  <vue-title-container
    sub-title="Activities"
    title="활동">
    <div>
      <vue-definition
        align="flex-start"
        sub-title="YouTube Channel"
        title="유튜브 채널">
        코딩 강의 및 관심사에 대해 직접 동영상 촬영/편집해서 가끔 업로드 하고 있습니다.
      </vue-definition>
      <vue-definition
        sub-title="class101"
        title="클래스101">
        주로 다루는 코딩, 프로그래밍 기술에 대한 온라인 강의를 할 예정입니다.
      </vue-definition>
      <vue-definition
        sub-title="Talling"
        title="탈잉">
        주로 다루는 코딩, 프로그래밍 기술에 대한 소규모 오프라인 강의를 할 예정입니다.
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