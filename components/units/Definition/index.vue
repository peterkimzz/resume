<template>
  <dl
    :class="[
      { [display]: display },
      { [alignItems]: alignItems }
    ]">
    <dt>
      <vue-image-viewer
        v-if="src"
        :src="src"
        style="width: 60px; height: 60px; margin-bottom: 10px;"/>
      <div class="sub-title">{{ subTitle }}</div>
      <div class="title">{{ title }}</div>
    </dt>
    <dd 
      v-if="$slots.default">
      <slot/>
    </dd>
    <dd v-if="items.length">
      <ul>
        <li 
          v-for="(item, index) in items"
          :key="item + index">
          <span style="margin-right: 3px;">•</span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
import VueImageViewer from '~/components/units/ImageViewer'
export default {
  components: {
    VueImageViewer
  },
  props: {
    flex: {
      type: Boolean,
      default: true
    },
    block: {
      type: Boolean,
      default: false
    },
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
    src: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    display() {
      if (this.block) return 'block'

      if (this.flex) return 'flex'

      return 'flex'
    },
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
  margin-top: 0;
  margin-bottom: 20px;

  &.block {
    display: block;
    margin-bottom: 50px;

    dd {
      margin-top: 6px;
    }
  }

  &.flex-start {
    align-items: flex-start;
  }
}

dt {
  margin-right: 20px;
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
  line-height: 1.8;

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
  margin-top: -5px;
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
  margin-bottom: 20px;
  list-style: none;

  @media (min-width: 1128px) {
    font-size: 18px;
  }
}
</style>