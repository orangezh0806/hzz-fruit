<template>
  <div id="app" class="app">
    <!-- todo 此处的header 和 下面的navbar后面去掉一个 -->
    <div class="app-header" v-show="$route.name !== 'home'" :class="{isRelative: $route.name !== 'home'}">
      {{$route.meta.title}}
      <div class="app-header-icons">
        <span class="fa fa-search"></span>
        <span class="fa fa-bell c-badge-dot"></span>
      </div>
    </div>
    <div class="app-content" v-show="!isChildShow">
      <transition name="main">
        <router-view></router-view>
      </transition>
    </div>
    <!-- todo 此处的tabbar 和下面的去掉一个， 后面再优化即可-->
    <tabbar class="app-footer app-navigator" v-model="active" active-color="#1ABC9C">
      <tabbar-item @click="$router.replace('/home')">
        <span>首页</span>
        <span slot="icon" slot-scope="props" class="fa fa-home"></span>
      </tabbar-item>
      <tabbar-item @click="$router.replace('/category')">
        <span>分类</span>
        <span slot="icon" slot-scope="props" class="fa fa-th-large"></span>
      </tabbar-item>
      <tabbar-item info="5">
        <span>购物车</span>
        <span slot="icon" slot-scope="props" class="fa fa-star"></span>
      </tabbar-item>
      <tabbar-item dot>
        <span>我的</span>
        <span slot="icon" slot-scope="props" class="fa fa-user"></span>
      </tabbar-item>
    </tabbar>
    <div class="customer-service">
      <span class="fa fa-commenting"></span>
      <span>在线咨询</span>
    </div>
    <div class="app-child" v-show="isChildShow">
      <nav-bar class="app-child-nav"
               :title="$route.meta.title"
               left-arrow
               @click-left="$router.back()">
        <div slot="title" v-if="isFreshOrPreview">
          <div class="app-child-name-btn-group">
            <span :class="{active: $route.name === 'fresh'}" @click="$router.replace({name: 'fresh'})">新品</span>
            <span :class="{active: $route.name === 'preview'}" @click="$router.replace({name: 'preview'})">预购</span>
          </div>
        </div>
        <span v-if="$route.name === 'categoryClothes'" slot="right" class="fa fa-list-ul" @click="bus.$emit('clothesToggle')"></span>
        <span v-else class="fa fa-share-square-o" slot="right" v-show="$route.meta.isShareShow"></span>
      </nav-bar>
      <div class="app-child-content">
        <router-view name="child"></router-view>
      </div>
      <tabbar class="app-footer app-navigator" v-model="active" active-color="#1ABC9C">
        <tabbar-item @click="$router.replace('/home')">
          <span>首页</span>
          <span slot="icon" slot-scope="props" class="fa fa-home"></span>
        </tabbar-item>
        <tabbar-item @click="$router.replace('/category')">
          <span>分类</span>
          <span slot="icon" slot-scope="props" class="fa fa-th-large"></span>
        </tabbar-item>
        <tabbar-item info="5">
          <span>购物车</span>
          <span slot="icon" slot-scope="props" class="fa fa-star"></span>
        </tabbar-item>
        <tabbar-item dot>
          <span>我的</span>
          <span slot="icon" slot-scope="props" class="fa fa-user"></span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
import {Icon, Tabbar, TabbarItem, NavBar, Button} from 'vant'
import loading from './components/loading'
import bus from './event-bus'

// todo navbar 还有部分未添加
const navBar = {
  'home': 0,
  'category': 1
}
export default {
  name: 'app',
  data () {
    return {
      active: 0,
      childNavTitle: '',
      isLoadingShow: false,
      bus
    }
  },
  computed: {
    isChildShow () {
      return this.$route.fullPath.split('/').length > 2
    },
    isFreshOrPreview () {
      return ['fresh', 'preview'].indexOf(this.$route.name) > -1
    }
  },
  components: {
    Icon, Tabbar, TabbarItem, NavBar, VanButton: Button, loading
  },
  methods: {
    activeCheck () {
      if (navBar.hasOwnProperty(this.$route.fullPath.substring(1))) this.active = navBar[this.$route.fullPath.substring(1)]
    }
  },
  mounted () {
    this.activeCheck()
  },
  watch: {
    $route (route) {
      this.activeCheck()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../src/assets/css/variables";
  @import "../src/assets/css/common";

  .app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    font-size: 14px;
    background-color: @color-background;
    overflow: hidden;
    .app-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      font-weight: 700;
      font-style: normal;
      font-size: 16px;
      color: #999999;
      line-height: 3rem;
      align-items: center;
      justify-content: center;
      z-index: 2;
      background-color: rgba(255, 255, 255, .8);
      &:before {
        .c-border(bottom)
      }
      &.isRelative {
        position: relative;
        background-color: @color-background;
      }
      .app-header-icons {
        justify-self: flex-end;
        color: @color-private;
        position: fixed;
        right: 0;
        top: 0;
        span {
          position: relative;
          display: inline-block;
          padding: .5em;
        }
      }
    }
    .app-content {
      flex: 1;
      overflow: hidden;
    }
    .app-footer {
      position: relative !important;
    }
    .customer-service {
      position: fixed;
      z-index: 99;
      bottom: 60px;
      right: 1em;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      color: @color-private;
      .fa {
        font-size: 1.5em;
      }
    }
    .app-child {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      flex-flow: column nowrap;
      z-index: 2;
      background-color: @color-background;
      .app-child-nav {
        color: @color-private;
        background-color: @color-background;
        .app-child-name-btn-group {
          border: 1px solid @color-private;
          border-radius: 4px;
          display: inline-block;
          font-size: 0;
          line-height: 2em;
          span {
            display: inline-block;
            font-weight: 700;
            font-style: normal;
            font-size: 16px;
            line-height: 1em;
            padding: .5em 1em;
            &.active {
              background-color: @color-private;
              color: @color-white;
            }
          }
        }
        .van-nav-bar__title {
          font-weight: 700;
          font-style: normal;
          font-size: 16px;
          color: #999999;
        }
        i {
          color: @color-private;
          font-size: 18px;
        }
        .fa {
          font-size: 18px;
          color: @color-private;
        }
      }
      .app-child-content {
        flex: 1;
        overflow: hidden;
      }
    }
  }

</style>
