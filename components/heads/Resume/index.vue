<template>
  <div class="resume">
    <vue-resume-title/>
    <vue-profile/>
    <vue-skills/>
    <vue-experiences/>
    <vue-projects/>
    <vue-education/>
    <vue-awards/>
    <vue-activities/>
    <vue-languages/>
  </div>
</template>

<script>
import VueResumeTitle from '~/components/groups/ResumeTitle'
import VueProfile from '~/components/groups/Profile'
import VueSkills from '~/components/groups/Skills'
import VueExperiences from '~/components/groups/Experiences'
import VueProjects from '~/components/groups/Projects'
import VueActivities from '~/components/groups/Activities'
import VueEducation from '~/components/groups/Education'
import VueAwards from '~/components/groups/Awards'
import VueLanguages from '~/components/groups/Languages'
export default {
  components: {
    VueResumeTitle,
    VueProfile,
    VueSkills,
    VueExperiences,
    VueProjects,
    VueActivities,
    VueEducation,
    VueAwards,
    VueLanguages
  }
}
</script>