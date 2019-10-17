<template>
  <vue-title-container
    sub-title="Profile"
    title="프로필">
    <div>
      <vue-image-viewer
        src="/imgs/profile_image.jpg"
        style="width: 100px;"/>
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
          href="https://facebook.com/peterkimzz"
          target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a
          href="https://www.youtube.com/channel/UC8nQ5IesFcN1IrtgpQEiAvw"
          target="_blank"><i class="fab fa-youtube"></i></a>
        <a
          href="https://medium.com/@peterkimzz"
          target="_blank"><i class="fab fa-medium-m"></i></a>
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
    display: inline-block;
    margin-bottom: 0;
    margin-top: 0;
    margin-left: 0;
    margin-right: 8px;
  }
}
</style>