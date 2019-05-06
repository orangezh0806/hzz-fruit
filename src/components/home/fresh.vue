<!-- 新鲜好物 -->
<template>
  <div class="home-fresh">
    <div class="home-fresh-img">
      <img :src="img">
    </div>
    <tabs class="home-fresh-tabs"
          v-model="active"
          animated
          background="#F9F9F9"
          color="#1ABC9C"
          title-active-color="#1ABC9C">
      <tab class="clothes" title="综合排序">
        <list v-model="loading"
              :finished="finished"
              loading-text="正在加载更多"
              finished-text="没有更多了"
              :error.sync="error"
              error-text="请求失败，点击重新加载"
              @load="onLoad">
          <row class="clothes-hot-list" gutter="16">
            <van-col class="clothes-hot-item" span="12" v-for="(item,index) in specialList" :key="index">
              <product-card-v
                :price="item.discountPrice"
                :desc="item.desc"
                :title="item.title"
                :isDiscount="false"
                :img="item.img"
                :isOriginInImg="false"
              >
                <div class="clothes-hot-item-tag" slot="tag">
                  {{$route.name === 'fresh' ? '上新' : '即将上架'}}
                </div>
              </product-card-v>
            </van-col>
          </row>
        </list>
      </tab>
      <tab title="价格排序">

      </tab>
      <tab title="筛选商品">

      </tab>
    </tabs>
  </div>
</template>

<script>
import ProductCardV from '../product-card-v'
import ProductCardVSimple from '../product-card-v-simple'
import Module from '../module'
import {Tabs, Tab, Col, Row, List} from 'vant'

import avocado from '../../assets/img/avocado_poster.jpg'
import special1 from '../../assets/img/special-1.jpg'
import special2 from '../../assets/img/special-2.jpg'
import special3 from '../../assets/img/special-3.jpg'

import swiper3 from '@/assets/img/swiper_1.jpg'

export default {
  name: 'home-fresh',
  components: {
    ProductCardSimple: ProductCardVSimple,
    Tabs,
    Tab,
    ProductCardV,
    Row,
    VanCol: Col,
    Module,
    List
  },
  data () {
    return {
      img: swiper3,
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
      active: 0,
      loading: false,
      error: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        if (this.specialList.length > 10) {
          this.finished = true
          return
        }
        this.specialList = [...this.specialList, ...this.specialList]
      }, 1000)
    }
  }
}
</script>

<style lang="less">
  .home-fresh-tabs {
    .van-tabs__content {
      height: 100%;
      overflow: hidden auto;
    }
  }
</style>
<style lang="less" scoped>
  @import "../../assets/css/common";
  @import "../../assets/css/variables";

  .home-fresh {
    background-color: @color-background;
    height: 100%;
    overflow: auto;
    /* &:before {
       .c-border(top)
     }
     &:after {
       .c-border(bottom)
     }*/
    .home-fresh-img {
      height: 30vh;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .home-fresh-tabs {
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }
  }

  .clothes {
    .clothes-tags {
      position: relative;
      background-color: @color-white;
    }
    .clothes-hot-list {
      display: flex;
      flex-wrap: wrap;
      background-color: @color-white;
      padding: 1em;
      .clothes-hot-item {
        margin-top: 2em;
        .clothes-hot-item-tag {
          position: absolute;
          right: -2em;
          top: -1em;
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
    }
    .clothes-special {
      margin-top: 1em;
      text-align: center;
      .clothes-special-title {
        font-size: 16px;
        color: @color-title;
        padding: 1em;
        background-color: @color-white;
      }
      .clothes-special-item {
        margin-bottom: 1em;
        background-color: @color-white;
      }
    }
  }
</style>
