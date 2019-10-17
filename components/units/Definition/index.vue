<template>
  <dl
    :style="[
      { 'align-items': alignItems }
    ]">
    <dt>
      <div class="sub-title">{{ subTitle }}</div>
      <div class="title">{{ title }}</div>
    </dt>
    <dd v-if="$slots.default">
      <slot/>
    </dd>
    <dd v-if="items.length">
      <ul>
        <li 
          v-for="(item, index) in items"
          :key="item + index">{{ item }}</li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    align: {
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
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    alignItems() {
      if (this.align) return this.align

      return this.items.length ? 'flex-start' : 'flex-end'
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
  color: $oc-gray-7;
  font-weight: bold;

  @media (min-width: 1128px) {
    font-size: 18px;
  }
}

ul {
  margin: 0;
  padding: 0;
}

li {
  font-size: 15px;
  margin-bottom: 6px;
  list-style: circle;
  @media (min-width: 1128px) {
    font-size: 18px;
  }
}
</style>