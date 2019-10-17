<template>
  <dl>
    <dt>
      <div class="sub-title">{{ subTitle }}</div>
      <div class="title">{{ title }}</div>
    </dt>
    <dd><slot/></dd>
  </dl>
</template>

<script>
export default {
  props: {
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
dl {
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  margin-bottom: 0;
}

dt {
  margin-right: 10px;
  min-width: 104px;

  @media (min-width: 1128px) {
    min-width: 140px;
  }
}

dd {
  margin: 0;
  flex: 1;
  color: $oc-gray-8;
  font-size: 15px;

  @media (min-width: 1128px) {
    font-size: 18px;
  }
}

.sub-title {
  margin: 0;
  font-weight: normal;
  color: $oc-gray-6;
  font-size: 12px;
  text-transform: uppercase;
}

.title {
  margin: 0;
  font-size: 15px;
  color: $oc-gray-8;

  @media (min-width: 1128px) {
    font-size: 18px;
  }
  font-weight: bold;
}
</style>