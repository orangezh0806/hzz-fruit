<template>
  <Row class="category-tags" v-if="tags">
    <van-col class="category-tag"
             span="6"
             v-for="tag in tags" :key="tag.name"
             @click.native="tagClick(tag)">
      <div class="tag-icon">
        <img :src="tag.icon">
      </div>
      <div class="tag-name">{{tag.name}}</div>
    </van-col>
  </Row>
</template>

<script>
import {Row, Col} from 'vant'

export default {
  name: 'tags',
  props: ['tags'],
  components: {
    Row, VanCol: Col
  },
  methods: {
    tagClick (tag) {
      if (tag.name === '全部') this.$router.push({name: 'categoryAll'})
      else this.$emit('tag', tag)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/css/common";

  .category-tags {
    display: flex;
    flex-flow: row wrap;
    font-size: 14px;
    &:before {
      .c-border(top)
    }
    &:after {
      .c-border(bottom)
    }
    .category-tag {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      padding: 1em 0;
      color: @color-label;
      .tag-icon {
        height: 3em;
        width: 3em;
        margin-bottom: .5em;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
</style>
