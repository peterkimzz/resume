<template>
  <div id="home">
    <vue-container>
      <vue-resume/>
    </vue-container>
  </div>
</template>

<script>
import VueContainer from '~/containers'
import VueResume from '~/components/heads/Resume'
export default {
  components: {
    VueContainer,
    VueResume
  }
}
</script>