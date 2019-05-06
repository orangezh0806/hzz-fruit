<template>
  <div class="home-special-header">
    <div class="home-special-header-img">
      <slot name="img" :class="{error: imgError || !img}">
        <img v-if="!(imgError || !img)" :src="img" @error="imgError = true">
        <span v-else class="fa fa-image"></span>
      </slot>
    </div>
    <div class="home-special-header-content">
      <div class="home-special-header-info">
        <div class="home-special-header-title"><slot name="title">{{title}}</slot></div>
        <div class="home-special-header-desc"><slot name="desc">{{desc}}</slot></div>
      </div>
      <div class="home-special-header-price"><slot name="price">￥{{price}}</slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-card-v-simple',
  props: ['img', 'title', 'desc', 'price'],
  data () {
    return {
      imgError: false
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/css/variables";

  .home-special-header {
    .home-special-header-img {
      width: 100%;
      height: 25vh;
      img {
        width: 100%;
        height: 100%;
      }
      &.error {
        background-color: rgba(228, 228, 228, 1);
        color: white;
        align-items: center;
        justify-content: center;
        .fa {
          display: inline-block;
          width: 8vh;
          height: 8vh;
          font-size: 2em;
        }
      }
    }
    .home-special-header-content {
      display: flex;
      flex-flow: row nowrap;
      font-size: 14px;
      padding: 1em;
      .home-special-header-info {
        flex: 1;
        text-align: left;
        .home-special-header-title {
          color: @color-title;
          margin-bottom: .5em;
        }
        .home-special-header-desc {
          color: @color-label-light;
          font-size: 12px;
        }
      }
      .home-special-header-price {
        padding-left: 2em;
        color: @color-private;
      }
    }
  }
</style>
