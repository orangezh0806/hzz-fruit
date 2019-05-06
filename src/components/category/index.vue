<template>
  <div class="category">
    <tabs class="category-tabs"
          v-model="active"
          animated
          background="#F9F9F9"
          color="#1ABC9C"
          title-active-color="#1ABC9C">
      <tab class="clothes" title="服装">
        <tags class="clothes-tags" :tags="category.clothes.tags"></tags>
        <!-- 打折专区 -->
        <div class="clothes-hot category-module">
          <div class="category-module-header">
            <span class="category-module-header-label">打折专区</span>
            <span class="category-module-header-more">
          更多好物
          <span class="fa fa-arrow-circle-o-right"></span>
        </span>
          </div>
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
                  上新
                </div>
              </product-card-v>
            </van-col>
          </row>
        </div>
        <div class="clothes-special">
          <div class="clothes-special-title">相关专题</div>
          <product-card-simple class="clothes-special-item"
                               v-for="(item,index) in specialList2" :key="index"
                               :price="item.discountPrice"
                               :desc="item.desc"
                               :title="item.title"
                               :img="item.img">
          </product-card-simple>
        </div>
      </tab>
      <tab title="餐厨">

      </tab>
      <tab title="配件">

      </tab>
      <tab title="居家">

      </tab>
      <tab title="洗护">

      </tab>
    </tabs>
  </div>

</template>

<script>
import Tags from './tags'
import ProductCardV from '../product-card-v'
import ProductCardVSimple from '../product-card-v-simple'
import {Tabs, Tab, Col, Row} from 'vant'

import swiper1 from '@/assets/img/swiper_1.jpg'
import swiper2 from '@/assets/img/swiper_2.jpg'
import swiper3 from '@/assets/img/swiper_3.jpg'
import swiper4 from '@/assets/img/swiper_4.jpg'

import icon1 from '../../assets/icons/category/clothes/icon-1.png'
import icon2 from '../../assets/icons/category/clothes/icon-2.png'
import icon3 from '../../assets/icons/category/clothes/icon-3.png'
import icon4 from '../../assets/icons/category/clothes/icon-4.png'
import icon5 from '../../assets/icons/category/clothes/icon-5.png'
import icon6 from '../../assets/icons/category/clothes/icon-6.png'
import icon7 from '../../assets/icons/category/clothes/icon-7.png'
import icon8 from '../../assets/icons/category/all.svg'

import avocado from '../../assets/img/avocado_poster.jpg'
import special1 from '../../assets/img/special-1.jpg'
import special2 from '../../assets/img/special-2.jpg'
import special3 from '../../assets/img/special-3.jpg'

export default {
  name: 'category',
  components: {
    ProductCardSimple: ProductCardVSimple,
    Tags,
    Tabs,
    Tab,
    ProductCardV,
    Row,
    VanCol: Col
  },
  data () {
    return {
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
      specialList2: [
        {
          img: swiper1,
          title: '绿心猕猴桃 12个',
          desc: '绿心猕猴桃 12个 单果75-85g 新鲜水果\n',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 99,
          originLabel: '原价',
          originPrice: 169
        },
        {
          img: swiper2,
          title: '北秭归应季鲜橙子',
          desc: '湖北秭归应季鲜橙子 甜橙 精选2.5kg装 单果约120-150g 新鲜自营水果',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 35.6,
          originLabel: '原价',
          originPrice: 89
        }, {
          img: swiper3,
          title: '纯真鲜果 墨西哥巨无霸牛油果 6个 单果约200-250g 生鲜水果',
          desc: '【满赠柠檬】纯真鲜果 墨西哥巨无霸牛油果 6个',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 99,
          originLabel: '原价',
          originPrice: 169
        },
        {
          img: swiper4,
          title: '澳洲 进口无籽红提/葡萄',
          desc: '澳洲 进口无籽红提/葡萄 提子 450g装 新鲜水果',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 35.9,
          originLabel: '原价',
          originPrice: 69.9
        },
        {
          img: swiper1,
          title: '绿心猕猴桃 12个',
          desc: '绿心猕猴桃 12个 单果75-85g 新鲜水果\n',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 99,
          originLabel: '原价',
          originPrice: 169
        },
        {
          img: swiper2,
          title: '北秭归应季鲜橙子',
          desc: '湖北秭归应季鲜橙子 甜橙 精选2.5kg装 单果约120-150g 新鲜自营水果',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 35.6,
          originLabel: '原价',
          originPrice: 89
        }, {
          img: swiper3,
          title: '纯真鲜果 墨西哥巨无霸牛油果 6个 单果约200-250g 生鲜水果',
          desc: '【满赠柠檬】纯真鲜果 墨西哥巨无霸牛油果 6个',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 99,
          originLabel: '原价',
          originPrice: 169
        },
        {
          img: swiper4,
          title: '澳洲 进口无籽红提/葡萄',
          desc: '澳洲 进口无籽红提/葡萄 提子 450g装 新鲜水果',
          isDiscount: true,
          discountLabel: '秒杀价',
          discountPrice: 35.9,
          originLabel: '原价',
          originPrice: 69.9
        }
      ],
      category: {
        clothes: {
          tags: [
            {name: '内裤', icon: icon1},
            {name: '内衣', icon: icon2},
            {name: '袜子', icon: icon3},
            {name: '大衣', icon: icon4},
            {name: '家居服', icon: icon5},
            {name: '衬衫', icon: icon6},
            {name: '外套', icon: icon7},
            {name: '全部', icon: icon8}
          ]
        }
      },
      active: 0
    }
  }
}
</script>

<style lang="less">
  .category-tabs {
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

  .category-module {
    position: relative;
    margin-top: 1.5em;
    padding: 1em;
    padding-top: 0;
    background-color: @color-white;
    &:before {
      .c-border(top)
    }
    .category-module-header {
      display: flex;
      justify-content: space-between;
      padding: 1em 0;
      .category-module-header-label {
        font-size: 16px;
        color: @color-title;
      }
      .category-module-header-more {
        color: @color-label-light;
        font-size: .9em;
      }
    }
  }

  .category {
    background-color: @color-background;
    height: 100%;
    overflow: hidden;
    /* &:before {
       .c-border(top)
     }
     &:after {
       .c-border(bottom)
     }*/
    .category-tabs {
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
