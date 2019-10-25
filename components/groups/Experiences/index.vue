<template>
  <vue-title-container
    sub-title="Experiences"
    title="경력">
    <div>
      <vue-definition
        block
        sub-title="2019년 4월 - 현재"
        title="프리랜서 / 개발 & 웹 디자인">
        지인 부탁, 위시켓 그리고 프리모아를 통해 주로 플랫폼 개발 외주를 진행하고 있습니다.
      </vue-definition>
      <vue-definition
        block
        sub-title="2018년 8월 - 2019년 3월"
        title="(주)강남엄마 / PM">
        입사 했을 당시 기존 개발자들이 모두 나간 상태였고, Ruby on Rails로 되어있던 프로젝트를 당시 가장 핫한 프레임워크인 Vue.js로 테크 스택을 변경할 것을 제안드렸고 혼자 웹사이트와 API서버를 첫 한 달 동안 개발해서 성공적으로 리뉴얼을 마쳤습니다.<br><br>
        이후 총 3명의 개발자를 직접 채용했고 점점 커지는 프로젝트를 관리해야 했기 때문에 자연스럽게 PM 역할을 맡았습니다.<br><br>
        웹 개발 뿐만 아니라 디자인과 기획도 주도적으로 진행했으며, 입사 당시 MAU 3-4만이었던 트래픽이 퇴사 직전에는 약 8만 정도로 상승했습니다.<br>
        이후 회사 경영난으로 퇴사하게 되었습니다.
      </vue-definition>
      <vue-definition
        block
        sub-title="2017년 2월 - 2018년 7월"
        title="Zerobase Software Inc. / 공동 창업, CTO">
        약 1년 반동안 총 3개의 프로젝트인 "Hoopee", "Picon" 그리고 "Factoryhunt"를 진행했습니다. <br><br>이 때 "Hoopee"를 메인 프로젝트로 미국 엑셀러레이터인 "Y Combinator Startup School" 1기에 합격해 10주 동안 성공적으로 교육을 수료했습니다.<br><br>총 2번의 Y Combinator 메인 배치에 지원했고, 서류 합격 후 온라인 인터뷰에서 아쉽게 탈락했고 프로그램과는 별개로 프로젝트의 수익성이 오랫동안 이루어지지않아 지분을 모두 정리 후 퇴사하게 되었습니다.
      </vue-definition>
      <vue-definition
        block
        sub-title="2016년 3월 - 2016년 11월"
        title="inActive Inc. / 1인 창업">
        모바일 게임 개발사를 운영하고 싶어 처음으로 만들었던 법인입니다. 런칭 이후 게임 운영과 유지/보수를 진행하다 혼자서 1인 개발사를 운영하는 것은 지금 당장은 무리라고 판단하고 법인을 휴업으로 전환했습니다.
      </vue-definition>
    </div>
  </vue-title-container>
</template>

<script>
// containers
import VueTitleContainer from '~/containers/Title'
// units
import VueDefinition from '~/components/units/Definition'
export default {
  components: {
    VueTitleContainer,
    VueDefinition
  }
}
</script>