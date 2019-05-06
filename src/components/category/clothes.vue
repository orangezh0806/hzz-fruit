<template>
  <div class="category-clothes">
    <tabs class="category-clothes-tabs"
          v-model="active"
          animated
          background="#F9F9F9"
          color="#1ABC9C"
          title-active-color="#1ABC9C">
      <tab class="clothes" title="人气排序">
        <list v-model="loading"
              :finished="finished"
              loading-text="正在加载更多"
              finished-text="没有更多了"
              :error.sync="error"
              error-text="请求失败，点击重新加载"
              @load="onLoad">
          <row class="clothes-hot-list" gutter="16" v-if="isTwoColumn">
            <van-col class="clothes-hot-item" span="12" v-for="(item,index) in specialList" :key="index">
              <product-card-v
                :origin-label="item.originLabel"
                :origin-price="item.originPrice"
                :price="item.discountPrice"
                :desc="item.desc"
                :title="item.title"
                :isDiscount="false"
                :img="item.img"
                :isOriginInImg="false"
              >
               <!-- <div class="clothes-hot-item-tag" slot="tag">
                  上新
                </div>-->
                <div class="clothes-hot-item-cart-v" slot="price-right">
                  <span class="fa fa-shopping-cart"></span>
                </div>
              </product-card-v>
            </van-col>
          </row>
          <row class="clothes-hot-list" v-else="">
            <product-card v-for="(item,index) in specialList" :key="index"
                          class="clothes-hot-item-v"
                          :origin-label="item.originLabel"
                          :origin-price="item.originPrice"
                          :discount-label="item.discountLabel"
                          :discount-price="item.discountPrice"
                          :desc="item.desc"
                          :title="item.title"
                          :isDiscount="item.isDiscount"
                          :img="item.img"
            >
              <div class="clothes-hot-item-cart" slot="price-right">
                <span class="fa fa-shopping-cart"></span>
              </div>
            </product-card>
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
import ProductCard from '../product-card-h.vue'
import Module from '../module'
import {Tabs, Tab, Col, Row, List} from 'vant'

import avocado from '../../assets/img/avocado_poster.jpg'
import special1 from '../../assets/img/special-1.jpg'
import special2 from '../../assets/img/special-2.jpg'
import special3 from '../../assets/img/special-3.jpg'

import bus from '../../event-bus'

export default {
  name: 'clothes',
  components: {
    ProductCardSimple: ProductCardVSimple,
    ProductCard,
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
      specialList: [
        {
          img: special1,
          title: '绿心猕猴桃 12个',
          desc: '绿心猕猴桃 12个 单果75-85g 新鲜水果\n',
          isDiscount: true,
          discountLabel: '',
          discountPrice: 99,
          originLabel: '',
          originPrice: 169
        },
        {
          img: special2,
          title: '北秭归应季鲜橙子',
          desc: '湖北秭归应季鲜橙子 甜橙 精选2.5kg装 单果约120-150g 新鲜自营水果',
          isDiscount: true,
          discountLabel: '',
          discountPrice: 35.6,
          originLabel: '',
          originPrice: 89
        }, {
          img: avocado,
          title: '纯真鲜果 墨西哥巨无霸牛油果 6个 单果约200-250g 生鲜水果',
          desc: '【满赠柠檬】纯真鲜果 墨西哥巨无霸牛油果 6个',
          isDiscount: true,
          discountLabel: '',
          discountPrice: 99,
          originLabel: '',
          originPrice: 169
        },
        {
          img: special3,
          title: '澳洲 进口无籽红提/葡萄',
          desc: '澳洲 进口无籽红提/葡萄 提子 450g装 新鲜水果',
          isDiscount: true,
          discountLabel: '',
          discountPrice: 35.9,
          originLabel: '',
          originPrice: 69.9
        },
        {
          img: special1,
          title: '绿心猕猴桃 12个',
          desc: '绿心猕猴桃 12个 单果75-85g 新鲜水果\n',
          isDiscount: true,
          discountLabel: '',
          discountPrice: 99,
          originLabel: '',
          originPrice: 169
        },
        {
          img: special2,
          title: '北秭归应季鲜橙子',
          desc: '湖北秭归应季鲜橙子 甜橙 精选2.5kg装 单果约120-150g 新鲜自营水果',
          isDiscount: true,
          discountLabel: '',
          discountPrice: 35.6,
          originLabel: '',
          originPrice: 89
        }, {
          img: avocado,
          title: '纯真鲜果 墨西哥巨无霸牛油果 6个 单果约200-250g 生鲜水果',
          desc: '【满赠柠檬】纯真鲜果 墨西哥巨无霸牛油果 6个',
          isDiscount: true,
          discountLabel: '',
          discountPrice: 99,
          originLabel: '',
          originPrice: 169
        },
        {
          img: special3,
          title: '澳洲 进口无籽红提/葡萄',
          desc: '澳洲 进口无籽红提/葡萄 提子 450g装 新鲜水果',
          isDiscount: true,
          discountLabel: '',
          discountPrice: 35.9,
          originLabel: '',
          originPrice: 69.9
        }
      ],
      active: 0,
      loading: false,
      error: false,
      finished: false,
      isTwoColumn: true
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
      }, 2000)
    }
  },
  mounted () {
    bus.$on('clothesToggle', () => {
      this.isTwoColumn = !this.isTwoColumn
    })
  }
}
</script>

<style lang="less">
  .category-clothes-tabs {
    .van-tabs__content {
      height: 100%;
      /*overflow: hidden auto;*/
      overflow-y: auto;
    }
  }
</style>
<style lang="less" scoped>
  @import "../../assets/css/common";
  @import "../../assets/css/variables";

  .category-clothes {
    background-color: @color-background;
    height: 100%;
    overflow: hidden;
    /* &:before {
       .c-border(top)
     }
     &:after {
       .c-border(bottom)
     }*/
    .category-clothes-tabs {
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
      .clothes-hot-item-cart-v {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background: @color-private;
        height: 1.5em;
        width: 1.5em;
        line-height: 1.5em;
        font-size: 1.5em;
        color: @color-white;
        text-align: center;
        border-radius: 50%;
      }
      .clothes-hot-item-cart {
        float: right;
        background: @color-private;
        height: 1.5em;
        width: 1.5em;
        font-size: 1.5em;
        line-height: 1.5em;
        color: @color-white;
        text-align: center;
        border-radius: 50%;
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
