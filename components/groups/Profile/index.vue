<template>
  <vue-title-container
    sub-title="Profile"
    title="프로필">
    <div>
      <vue-image-viewer
        src="/imgs/profile_image.jpg"
        style="width: 100px; margin-bottom: 20px;"/>
      <vue-definition
        sub-title="name"
        title="이름"
        font-size="small">김동현 (Peter Donghyun Kim)</vue-definition>
      <vue-definition
        sub-title="Birthday"
        title="생년월일">1993년 2월 25일</vue-definition>
      <vue-definition
        sub-title="Phone"
        title="연락처">
        <a 
          href="tel:+82-10-4273-5480"
          target="_blank">+82-10-4273-5480</a>
      </vue-definition>
      <vue-definition
        sub-title="Email"
        title="이메일">
        <a 
          href="mailto:peterkimzz69@gmail.com"
          target="_blank">peterkimzz69@gmail.com</a>
      </vue-definition>
      <vue-definition
        sub-title="SNS"
        title="소셜 네트워크"
        class="sns-container">
        <a
          href="https://github.com/peterkimzz"
          target="_blank"><i class="fab fa-github"></i></a>
        <a
          href="https://facebook.com/peterkimzz"
          target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a
          href="https://www.youtube.com/channel/UC8nQ5IesFcN1IrtgpQEiAvw"
          target="_blank"><i class="fab fa-youtube"></i></a>
        <a
          href="https://medium.com/@peterkimzz"
          target="_blank"><i class="fab fa-medium-m"></i></a>
      </vue-definition>
      <!-- <br> -->
      <vue-definition
        block
        align="flex-start"
        sub-title="Intro"
        title="소개">
        <div>
          안녕하세요, 소프트웨어 개발자 김동현입니다.<br><br>
          저는 플랫폼 개발에 자신있습니다. 그리고 저의 최대 강점은 개발 속도가 빠르다는 것입니다. 처음부터 지금까지 소규모 인원의 스타트업에서만 개발자로 일을 해왔기 때문에 누구보다 빠르게 MVP를 만들어내는 법을 잘 알고 있습니다.<br><br>
          보통 개발이 빠르면 유지보수하기 어려운 코드를 작성할거라고 생각십니다. 하지만 제가 개발이 빠른 이유는 Vue.js와 Node.js 프레임워크를 오랫동안 사용했기 때문입니다. 결코 유지보수가 어려운 코드는 작성하지 않습니다.<br><br>
          또한 스스로 웹 디자인에 대한 감각이 있다고 생각해서 프론트엔드 개발을 좋아합니다. 웹의 장점은 프론트엔드에 대한 소스코드가 개방되어 있다는 점을 이용해 다른 웹사이트의 디자인을 참고하여 해당 서비스에게 맞는 새로운 디자인을 잘 창조해냅니다.<br><br>
              
        </div>
      </vue-definition>
    </div>
  </vue-title-container>
</template>

<script>
import VueTitleContainer from '~/containers/Title'
import VueImageViewer from '~/components/units/ImageViewer'
import VueDefinition from '~/components/units/Definition'
export default {
  components: {
    VueTitleContainer,
    VueImageViewer,
    VueDefinition
  }
}
</script>

<style lang="scss" scoped>
.sns-container {
  a {
    color: #333;
    display: inline-block;
    margin-bottom: 0;
    margin-top: 0;
    margin-left: 0;
    margin-right: 8px;
    transition: 0.2s;

    &:hover {
      color: $--color-primary;
    }
  }
}
</style>