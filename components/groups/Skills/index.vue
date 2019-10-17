<template>
  <vue-title-container
    sub-title="Skills"
    title="기술">
    <div>
      <vue-definition
        sub-title="Front-end"
        title="프론트엔드"
        :items="frontend">
      </vue-definition>
      <vue-definition
        sub-title="Back-end"
        title="백엔드"
        :items="backend">
      </vue-definition>
      <vue-definition
        sub-title="Database"
        title="데이터베이스"
        :items="database">
      </vue-definition>
      <vue-definition
        align="flex-start"
        sub-title="ETC"
        title="기타"
        :items="etc"/>
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
  },
  data() {
    return {
      frontend: ['Vue.js (Nuxt.js)'],
      backend: ['Node.js'],
      database: ['MySQL'],
      etc: [
        'AWS (EC2, RDS, S3, Route53, Load Balancer, CodeCommit)',
        'SSR',
        'SEO',
        'Nginx',
        'ElasticSearch',
        'Swift',
        'Objective-C',
        'React Native',
        'Firebase'
      ]
    }
  }
}
</script>