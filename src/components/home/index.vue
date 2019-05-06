<template>
  <div class="home" @scroll="scrollHandle">
    <div class="home-header">
      <div class="home-header-info">
        <span>水果配送<span class="fa fa-map-marker">定位中...</span></span>
        <img src="../../assets/icons/QR-code.svg">
      </div>
      <div id="home-header-search-container">
        <field class="home-header-search" :class="{fixed: isFixed}" v-model="keyword" placeholder="搜索"/>
        <!--<span class="fa fa-search">搜索</span>-->
      </div>
    </div>
    <swipe class="home-swiper" :autoplay="3000" indicator-color="white" style="height: 30vh">
      <swipe-item class="home-swiper-item" v-for="(image, index) in images" :key="index">
        <img :src="image">
      </swipe-item>
    </swipe>
    <div class="c-border-bottom">
      <row>
        <van-col class="home-category" span="6">
          <span class="fa fa-th-large"></span>
          <span>分类1</span>
        </van-col>
        <van-col class="home-category" span="6">
          <img src="../../assets/icons/home/category-2.png" alt="">
          <span>分类2</span>
        </van-col>
        <van-col class="home-category" span="6">
          <span class="fa fa-gift" style="font-size: 1.6em"></span>
          <span>抢购</span>
        </van-col>
        <van-col class="home-category" span="6">
          <img src="../../assets/icons/home/category-4.png" alt="">
          <span>特价</span>
        </van-col>
      </row>
      <row>
        <van-col class="home-category" span="6">
          <span class="fa fa-th-large"></span>
          <span>礼券</span>
        </van-col>
        <van-col class="home-category" span="6">
          <span class="fa fa-th-large"></span>
          <span>充值</span>
        </van-col>
        <van-col class="home-category" span="6">
          <span class="fa fa-th-large"></span>
          <span>预留1</span>
        </van-col>
        <van-col class="home-category" span="6">
          <span class="fa fa-th-large"></span>
          <span>预留2</span>
        </van-col>
      </row>
    </div>
    <!-- 本周果蔬篮 -->
    <div class="home-week-fruit home-module">
      <div class="home-module-header">
        <span class="home-module-header-label">本周果蔬篮</span>
        <span class="home-module-header-more">
          更多推荐
          <span class="fa fa-arrow-circle-o-right"></span>
        </span>
      </div>
      <row class="home-week-fruit-content home-module-content" gutter="16">
        <van-col class="fruit-item" span="12" v-for="item in weekFruit" :key="item.name">
          <div class="fruit-item-name">{{item.name}}</div>
          <div class="fruit-item-price">{{item.price}}元起</div>
          <img class="fruit-item-img" :src="item.image"/>
        </van-col>
      </row>
    </div>
    <!-- 限时抢购 -->
    <div class="home-shop-limit home-module">
      <div class="home-module-header">
        <span class="home-module-header-label">限时抢购</span>
        <span class="home-module-header-more" @click="$router.push({name: 'spike'})">
          更多推荐
          <span class="fa fa-arrow-circle-o-right"></span>
        </span>
      </div>
      <div class="home-shop-limit-timer">
        距本场结束 <span>{{discountTime}}</span>
      </div>
      <div class="home-shop-limit-list">
        <div v-for="(item,index) in discountList" :key="index">
          <product-card
            class="home-shop-limit-card"
            :origin-label="item.originLabel"
            :origin-price="item.originPrice"
            :discount-label="item.discountLabel"
            :discount-price="item.discountPrice"
            :desc="item.desc"
            :title="item.title"
            :isDiscount="item.isDiscount"
            :img="item.img"
          >
            <div class="home-shop-limit-card-footer">
              <div class="left-bar">仅剩10件</div>
              <van-button type="primary" size="small">马上抢</van-button>
            </div>
          </product-card>
          <div v-if="index < discountList.length -1" class="c-split-inline"></div>
        </div>
      </div>
    </div>
    <!-- 打折专区 -->
    <div class="home-discount home-module">
      <div class="home-module-header">
        <span class="home-module-header-label">打折专区</span>
        <span class="home-module-header-more">
          更多好物
          <span class="fa fa-arrow-circle-o-right"></span>
        </span>
      </div>
      <row class="home-discount-list" gutter="16">
        <van-col class="home-discount-item" span="12" v-for="(item,index) in discountList" :key="index">
          <product-card-v
            :origin-label="item.originLabel"
            :origin-price="item.originPrice"
            :discount-label="item.discountLabel"
            :discount-price="item.discountPrice"
            :desc="item.desc"
            :title="item.title"
            :isDiscount="item.isDiscount"
            :img="item.img"
          >
          </product-card-v>
        </van-col>
      </row>
    </div>
    <!-- 新鲜好物 -->
    <div class="home-fresh home-module">
      <div class="home-module-header">
        <span class="home-module-header-label">新鲜好物</span>
        <span class="home-module-header-more" @click="$router.push({name: 'fresh'})">
          更多好物
          <span class="fa fa-arrow-circle-o-right"></span>
        </span>
      </div>
      <div class="home-fresh-list">
        <product-card-v class="home-fresh-item" v-for="(item, index) in discountList" :key="index"
                        :desc="item.desc"
                        :title="item.title"
                        :price="29"
                        :img="item.img"
                        :isDiscount="false"
                        :isOriginInImg="false"
        />

      </div>
    </div>
    <!-- 人气推荐 -->
    <div class="home-hot home-module">
      <div class="home-module-header">
        <span class="home-module-header-label">人气推荐</span>
        <span class="home-module-header-more" @click="$router.push({name: 'hot'})">
          更多推荐
          <span class="fa fa-arrow-circle-o-right"></span>
        </span>
      </div>
      <div class="home-hot-list">
        <div v-for="(item,index) in discountList" :key="index">
          <product-card
            class="home-hot-card"
            :desc="item.desc"
            :title="item.title"
            :price="69"
            :img="item.img"
          >
            <div class="home-hot-card-price" slot="price">
              <span>￥{{item.price || item.discountPrice}}</span>
              <van-button class="detail-btn" plain size="small">4色可选</van-button>
            </div>
          </product-card>
          <div v-if="index < discountList.length -1" class="c-split-inline"></div>
        </div>
      </div>
    </div>
    <!-- 专题精选 -->
    <list v-model="loading"
          :finished="finished"
          loading-text="正在加载更多"
          finished-text="没有更多了"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          @load="onLoad">
      <div class="home-special home-module">
        <div class="home-module-header">
          <span class="home-module-header-label">专题精选</span>
          <span class="home-module-header-more">
          更多专题
          <span class="fa fa-arrow-circle-o-right"></span>
        </span>
        </div>
        <div class="home-special-header">
          <div class="home-special-header-img">
            <img src="../../assets/img/special-header.jpg">
          </div>
          <div class="home-special-header-content">
            <div class="home-special-header-info">
              <div class="home-special-header-title">5个给春天的生活新提案</div>
              <div class="home-special-header-desc">餐厨起居洗护好物</div>
            </div>
            <div class="home-special-header-price">19.9元起</div>
          </div>
        </div>
        <row class="home-special-list" gutter="16">
          <div class="home-special-list-title">猜你喜欢</div>
          <van-col class="home-special-item" span="12" v-for="(item,index) in specialList" :key="index">
            <product-card-v
              :price="item.discountPrice"
              :desc="item.desc"
              :title="item.title"
              :img="item.img"
              :isOriginInImg="false"
            >
            </product-card-v>
          </van-col>
        </row>
      </div>
    </list>
  </div>
</template>

<script>
import {Swipe, SwipeItem, Row, Col, Button, List, Field} from 'vant'
import ProductCard from '../product-card-h'
import productCardV from '../product-card-v'
import swiper1 from '@/assets/img/swiper_1.jpg'
import swiper2 from '@/assets/img/swiper_2.jpg'
import swiper3 from '@/assets/img/swiper_3.jpg'
import swiper4 from '@/assets/img/swiper_4.jpg'

import tomato from '../../assets/img/tomato_poster.jpg'
import apple from '../../assets/img/apple_poster.jpg'
import banana from '../../assets/img/banana_poster.jpg'
import avocado from '../../assets/img/avocado_poster.jpg'

import special1 from '../../assets/img/special-1.jpg'
import special2 from '../../assets/img/special-2.jpg'
import special3 from '../../assets/img/special-3.jpg'

const throttle = require('lodash.throttle')

export default {
  name: 'Home',
  data () {
    return {
      images: [swiper1, swiper2, swiper3, swiper4],
      weekFruit: [
        {name: '番茄', price: 6.9, image: tomato},
        {name: '苹果', price: 29.9, image: apple},
        {name: '香蕉', price: 19.9, image: banana},
        {name: '牛油果', price: 23.9, image: avocado}
      ],
      timeTotal: 24 * 60 * 60,
      discountList: [
        {
          img: avocado,
          title: '纯真鲜果 墨西哥巨无霸牛油果 6个 单果约200-250g 生鲜水果',
          desc: '【满赠柠檬】纯真鲜果 墨西哥巨无霸牛油果 6个',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 99,
          originLabel: '原价',
          originPrice: 169
        },
        {
          title: '纯真鲜果 墨西哥巨无霸牛油果 6个 单果约200-250g 生鲜水果',
          desc: '【满赠柠檬】纯真鲜果 墨西哥巨无霸牛油果 6个',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 99,
          originLabel: '原价',
          originPrice: 169
        }, {
          title: '纯真鲜果 墨西哥巨无霸牛油果 6个 单果约200-250g 生鲜水果',
          desc: '【满赠柠檬】纯真鲜果 墨西哥巨无霸牛油果 6个',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 99,
          originLabel: '原价',
          originPrice: 169
        },
        {
          img: avocado,
          title: '纯真鲜果 墨西哥巨无霸牛油果 6个 单果约200-250g 生鲜水果',
          desc: '【满赠柠檬】纯真鲜果 墨西哥巨无霸牛油果 6个',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 99,
          originLabel: '原价',
          originPrice: 169
        }
      ],
      specialList: [
        {
          img: special1,
          title: '绿心猕猴桃 12个',
          desc: '绿心猕猴桃 12个 单果75-85g 新鲜水果\n',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 99,
          originLabel: '原价',
          originPrice: 169
        },
        {
          img: special2,
          title: '北秭归应季鲜橙子',
          desc: '湖北秭归应季鲜橙子 甜橙 精选2.5kg装 单果约120-150g 新鲜自营水果',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 35.6,
          originLabel: '原价',
          originPrice: 89
        }, {
          img: avocado,
          title: '纯真鲜果 墨西哥巨无霸牛油果 6个 单果约200-250g 生鲜水果',
          desc: '【满赠柠檬】纯真鲜果 墨西哥巨无霸牛油果 6个',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 99,
          originLabel: '原价',
          originPrice: 169
        },
        {
          img: special3,
          title: '澳洲 进口无籽红提/葡萄',
          desc: '澳洲 进口无籽红提/葡萄 提子 450g装 新鲜水果',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 35.9,
          originLabel: '原价',
          originPrice: 69.9
        },
        {
          img: special1,
          title: '绿心猕猴桃 12个',
          desc: '绿心猕猴桃 12个 单果75-85g 新鲜水果\n',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 99,
          originLabel: '原价',
          originPrice: 169
        },
        {
          img: special2,
          title: '北秭归应季鲜橙子',
          desc: '湖北秭归应季鲜橙子 甜橙 精选2.5kg装 单果约120-150g 新鲜自营水果',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 35.6,
          originLabel: '原价',
          originPrice: 89
        }, {
          img: avocado,
          title: '纯真鲜果 墨西哥巨无霸牛油果 6个 单果约200-250g 生鲜水果',
          desc: '【满赠柠檬】纯真鲜果 墨西哥巨无霸牛油果 6个',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 99,
          originLabel: '原价',
          originPrice: 169
        },
        {
          img: special3,
          title: '澳洲 进口无籽红提/葡萄',
          desc: '澳洲 进口无籽红提/葡萄 提子 450g装 新鲜水果',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 35.9,
          originLabel: '原价',
          originPrice: 69.9
        }
      ],
      loading: false,
      error: false,
      finished: false,
      keyword: '',
      isFixed: false,
      scrollHandle: throttle(() => {
        if (this.$el.scrollTop >= 28) {
          this.isFixed = true
        } else this.isFixed = false
      }, 100)
    }
  },
  computed: {
    discountTime () {
      let hour = Math.floor(this.timeTotal / 3600)
      let minite = Math.floor((this.timeTotal / 60) % 60)
      let seconds = this.timeTotal % 60
      return `${hour}:${(minite < 10 ? '0' : '') + minite}:${(seconds < 10 ? '0' : '') + seconds}`
    }
  },
  methods: {
    onLoad () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        if (this.specialList.length > 20) {
          this.finished = true
          return
        }
        this.specialList = [...this.specialList, ...this.specialList]
      }, 2000)
    }
  },
  components: {
    Swipe, SwipeItem, Row, VanCol: Col, ProductCard, VanButton: Button, productCardV, List, Field
  },
  mounted () {
    setInterval(() => {
      this.timeTotal--
    }, 1000)
  }
}
</script>

<style lang="less">
  @import "../../assets/css/variables";

  .home-header-search {
    &.fixed {
      position: fixed;
      top: 0;
      background: @color-private !important;
      .van-cell__value {
        background: @color-white;
      }
    }
    .van-cell__value {
      background: white;
      border-radius: 4px;
      font-size: 12px;
      padding: .5em 1em;
      font-weight: normal;
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../assets/css/variables";
  @import "../../assets/css/common";

  .home {
    height: 100%;
    overflow: auto;
    position: relative;
    .home-header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 2;
      font-weight: 700;
      font-style: normal;
      font-size: 16px;
      color: #999999;
      line-height: 3rem;
      background-color: transparent;
      .home-header-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5em 1em;
        padding-bottom: 0;
        font-size: 14px;
        line-height: 1.5em;
        .fa {
          font-size: 12px;
          margin-left: .5em;
          color: @color-private;
        }
        img {

          height: 1.5em;
          width: 1.5em;
        }
      }
      .home-header-search {
        &.fixed {
          position: fixed;
          top: 0;
        }
        background: transparent;
        padding: .5em 1em;
        z-index: 99;
      }
    }
    .home-swiper {
      .home-swiper-item {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .home-category {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      padding: .5em;
      background-color: @color-white;
      font-weight: 400;
      font-style: normal;
      color: #999999;
      span:first-child {
        color: @color-second;
        font-size: 20px;
      }
    }
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
    .home-week-fruit-content {
      .fruit-item {
        .fruit-item-name {
          font-size: 16px;
          color: @color-title;
        }
        .fruit-item-price {
          position: relative;
          font-size: 14px;
          color: @color-label-light;
          margin-top: 4px;
          line-height: 1.5em;
          &:after {
            content: '上新';
            position: absolute;
            right: 0;
            top: 0;
            display: inline-block;
            padding: 0.2em .8em;
            font-size: 12px;
            border-radius: 1em;
            border-bottom-left-radius: 0;
            background-color: #FFA847;
            color: #ffffff;
            line-height: 1.4em;
          }
        }
        .fruit-item-img {
          width: 100%;
          height: 20vh;
        }
      }
    }
    .home-shop-limit {
      padding-left: 0;
      padding-right: 0;
      & > div {
        padding-left: 1em !important;
        padding-right: 1em !important;
      }
      .home-shop-limit-timer {
        position: relative;
        text-align: center;
        color: @color-label-light;
        font-size: 16px;
        background-color: @color-background;
        padding: 1em;
        span {
          color: @color-label;
          font-weight: bold;
        }
      }
      .home-shop-limit-list {
        padding: 1em 0;
        .home-shop-limit-card {
          background-color: @color-white;
          /*margin-bottom: 1em;*/
          &:last-child {
            margin-bottom: 0;
          }
        }
        .home-shop-limit-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left-bar {
            position: relative;
            display: inline-block;
            border: 1px solid @color-second;
            color: @color-second;
            border-radius: 1em;
            padding: 0 2em;
            &:before {
              content: '';
              position: absolute;
              top: 0;
              right: 1.5em;
              bottom: 0;
              left: 0;
              border-radius: 1em 0 0 1em;
              background-color: @color-second;
              opacity: .4;
            }
          }
        }
      }
    }
    .home-discount-list {
      display: flex;
      flex-wrap: wrap;
      .home-discount-item {
        margin-top: 2em;
      }
    }
    .home-fresh-list {
      display: flex;
      flex-flow: row nowrap;
      overflow-x: auto;
      .home-fresh-item {
        display: inline-block;
        width: 40vw;
      }
    }
    .home-hot-list {
      .home-hot-card-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .detail-btn {
          color: @color-second;
          border-color: @color-second;
        }
      }
    }
    .home-special {
      .home-special-header {
        .home-special-header-img {
          width: 100%;
          height: 25vh;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .home-special-header-content {
          display: flex;
          flex-flow: row nowrap;
          font-size: 14px;
          padding: 1em;
          .home-special-header-info {
            flex: 1;
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
            color: @color-error;
          }
        }
      }
      .home-special-list {
        .home-special-list-title {
          text-align: center;
          font-size: 16px;
          color: @color-title;
          line-height: 2em;
        }
        .home-special-item {
          margin-top: 2em;
        }
      }
    }
  }

</style>
