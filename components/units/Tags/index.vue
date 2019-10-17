<template>
  <div 
    v-if="data.length"
    class="tags">
    <span 
      class="tag"
      v-for="(item, index) in data"
      :key="item + index">{{ item }}</span>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  margin-top: 2px;
}

.tag {
  font-size: 13px;
  margin-right: 6px;
  padding: 3px 7px;
  border-radius: 4px;
  background-color: $oc-gray-6;
  color: $oc-gray-2;

  &:last-child {
    margin-right: 0;
  }
}
</style>