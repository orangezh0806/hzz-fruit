<template>
  <div class="c-loading">
    <img :src="img">
    {{text}}
  </div>
</template>

<script>
import icon from '../assets/icons/loading.svg'

export default {
  name: 'loading',
  data () {
    return {}
  },
  props: {
    img: {
      default: icon
    },
    text: {
      type: String,
      default: '加载中...'
    }
  }
}
</script>

<!--todo 样式-->
<style lang="less" scoped>
  .c-loading {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    img {
      width: 30px;
      height: 30px;
    }
  }
</style>
