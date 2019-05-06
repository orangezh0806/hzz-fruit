<!-- 秒杀专区 -->
<template>
  <div class="home-spike">
    <list v-model="loading"
          :finished="finished"
          loading-text="正在加载更多"
          finished-text="没有更多了"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          @load="onLoad">
      <!-- 限时抢购 -->
      <div class="home-spike-shop-limit home-spike-module">
        <div class="home-spike-special-header">
          <div class="home-spike-special-header-img">
            <img src="../../assets/img/swiper_1.jpg">
          </div>
        </div>
        <div class="home-spike-special-header-content" id="home_spike_timer">
          <div class="home-spike-special-header-info" v-for="(item, index) in timeList" :key="item"
               :class="{active: index === currentIndex}">
            <div class="time">{{item}}</div>
            <div class="time-label">{{item | timeLabel}}</div>
          </div>
        </div>
        <div class="home-spike-shop-limit-timer">
          设置提醒 好物不可错过
        </div>
        <div class="home-spike-shop-limit-list">
          <div v-for="(item,index) in specialList" :key="index">
            <product-card
              class="home-spike-shop-limit-card"
              :origin-label="item.originLabel"
              :origin-price="item.originPrice"
              :discount-label="item.discountLabel"
              :discount-price="item.discountPrice"
              :desc="item.desc"
              :title="item.title"
              :isDiscount="item.isDiscount"
              :img="item.img"
            >
              <div class="home-spike-shop-limit-card-footer">
                <div class="left-bar">仅剩10件</div>
                <van-button type="primary" size="small">马上抢</van-button>
              </div>
            </product-card>
            <div v-if="index < discountList.length -1" class="c-split-inline"></div>
          </div>
        </div>
      </div>
    </list>
  </div>
</template>

<script>
import {Swipe, SwipeItem, Row, Col, Button, List} from 'vant'
import stickybits from 'stickybits'
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

export default {
  name: 'Home-spike',
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
      timeList: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
      currentIndex: 2,
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
      finished: false
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
  filters: {
    timeLabel (time) {
      let date = new Date()
      let hour = date.getHours()
      let current = hour < 10 ? ('0' + hour) : hour + ':00'
      if (time < current) return '已完成'
      else if (time === current) return '正在抢购'
      else if (time > current) return '即将开始'
    }
  },
  components: {
    Swipe, SwipeItem, Row, VanCol: Col, ProductCard, VanButton: Button, productCardV, List
  },
  mounted () {
    setInterval(() => {
      this.timeTotal--
    }, 1000)
    stickybits('#home_spike_timer')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../assets/css/variables";
  @import "../../assets/css/common";

  .home-spike {
    height: 100%;
    overflow: auto;
    .home-spike-module {
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
      .home-spike-module-header {
        display: flex;
        justify-content: space-between;
        padding: 1em 0;
        .home-spike-module-header-label {
          font-size: 16px;
          color: @color-title;
        }
        .home-spike-module-header-more {
          color: @color-label-light;
          font-size: .9em;
        }
      }
    }
    .home-spike-shop-limit {
      padding-left: 0;
      padding-right: 0;
      margin-top: 0 !important;
      & > div {
        padding-left: 1em !important;
        padding-right: 1em !important;
      }
      .home-spike-special-header {
        padding-left: 0 !important;
        padding-right: 0 !important;
        .home-spike-special-header-img {
          width: 100%;
          height: 25vh;
          img {
            width: 100%;
            height: 100%;
          }
        }

      }
      .home-spike-special-header-content {
        font-size: 14px;
        /*padding: 1em 0;*/
        overflow: auto;
        white-space: nowrap;
        background-color: @color-label;
        z-index: 2;
        .home-spike-special-header-info {
          position: relative;
          display: inline-block;
          padding: .5em;
          width: 30vw;
          background-color: @color-label;
          color: #F2F2F2;
          font-size: 14px;
          box-sizing: border-box;
          border: none;
          text-align: center;
          &.active {
            background-color: @color-second;
            color: @color-white;
            &:after {
              content: '';
              display: inline-block;
              position: absolute;
              bottom: -2em;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 0;
              border: 1em solid transparent;
              border-top-color: @color-second;
            }
          }
          .time {
            font-weight: bold;
            margin-bottom: .5em;
          }
          .time-label {

          }
        }
        .home-spike-special-header-price {
          color: @color-error;
        }
      }
      .home-spike-shop-limit-timer {
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
      .home-spike-shop-limit-list {
        padding: 1em 0;
        .home-spike-shop-limit-card {
          background-color: @color-white;
          /*margin-bottom: 1em;*/
          &:last-child {
            margin-bottom: 0;
          }
        }
        .home-spike-shop-limit-card-footer {
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
  }

</style>
