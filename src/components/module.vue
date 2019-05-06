<template>
  <div class="home-module">
    <div class="home-module-header">
      <span class="home-module-header-label"><slot name="title">{{title}}</slot></span>
      <span class="home-module-header-more" @click="$emit('more')">
        <slot name="more">
          {{more}}
          <span class="fa" :class="[fa]"></span>
        </slot>
        </span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'module',
  props: {
    fa: {
      default: 'fa-arrow-circle-o-right'
    },
    title: {
      type: String
    },
    more: {
      default: '更多'
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/css/variables";
  @import "../assets/css/common";

  .home-module {
    position: relative;
    margin-top: 1.5em;
    padding: 1em;
    padding-top: 0;
    background-color: @color-white;
    &:before {
      .c-border(top)
    }
    &:after {
      .c-border(bottom)
    }
    .home-module-header {
      display: flex;
      justify-content: space-between;
      padding: 1em 0;
      .home-module-header-label {
        font-size: 16px;
        color: @color-title;
      }
      .home-module-header-more {
        color: @color-label-light;
        font-size: .9em;
      }
    }
  }
</style>
