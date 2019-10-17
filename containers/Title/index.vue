<template>
  <div 
    class="title-container">
    <div class="title__flex-container">
      <div>
        <h4 
          v-if="subTitle"
          :class="[{ [fontSize]: fontSize }]">{{ subTitle }}</h4>
        <h2
          :class="[{ [fontSize]: fontSize }]">{{ title }}</h2>
      </div>
      <div>
        <i 
          v-if="arrow"
          class="fa fa-arrow-right"/>
      </div>
    </div>
    <div 
      v-if="$slots.default"
      class="title__main">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arrow: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.title-container {
  margin-bottom: 150px;
}

h4 {
  margin: 0;
  font-weight: normal;
  color: $oc-gray-7;
  font-size: 16px;
  text-transform: uppercase;

  &.small {
    font-size: 12px;
  }
}

h2 {
  margin: 0;
  font-size: 30px;

  &.small {
    font-size: 18px;
  }
}

.title__flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title__main {
  margin-top: 30px;
}
</style>