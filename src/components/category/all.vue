<template>
  <div class="category-all">
    <module class="category-all-clothes" title="服装" more="更多"
            @more="$router.push({name: 'categoryClothes'})">
      <tags :tags="category.clothes.tags"></tags>
    </module>
    <module title="餐厨" more="更多" @more="$router.push({name: 'categoryClothes'})"
    >
      <tags :tags="category.kitchenware.tags"></tags>
    </module>
    <module title="服装" more="更多" @more="$router.push({name: 'categoryClothes'})">
      <tags :tags="category.clothes.tags"></tags>
    </module>
    <module title="餐厨" more="更多" @more="$router.push({name: 'categoryClothes'})">
      <tags :tags="category.kitchenware.tags"></tags>
    </module>
  </div>
</template>

<script>
import Module from '../module'
import Tags from './tags'

import icon1 from '../../assets/icons/category/clothes/icon-1.png'
import icon2 from '../../assets/icons/category/clothes/icon-2.png'
import icon3 from '../../assets/icons/category/clothes/icon-3.png'
import icon4 from '../../assets/icons/category/clothes/icon-4.png'
import icon5 from '../../assets/icons/category/clothes/icon-5.png'
import icon6 from '../../assets/icons/category/clothes/icon-6.png'
import icon7 from '../../assets/icons/category/clothes/icon-7.png'

import kitchenware1 from '../../assets/icons/category/kitchenware/Kitchenware-1.png'
import kitchenware2 from '../../assets/icons/category/kitchenware/Kitchenware-2.png'
import kitchenware3 from '../../assets/icons/category/kitchenware/Kitchenware-3.png'
import kitchenware4 from '../../assets/icons/category/kitchenware/Kitchenware-4.png'
import kitchenware5 from '../../assets/icons/category/kitchenware/Kitchenware-5.png'
import kitchenware6 from '../../assets/icons/category/kitchenware/Kitchenware-6.png'
import kitchenware7 from '../../assets/icons/category/kitchenware/Kitchenware-7.png'
import kitchenware8 from '../../assets/icons/category/kitchenware/Kitchenware-8.png'

export default {
  name: 'all',
  components: {Module, Tags},
  data () {
    return {
      category: {
        clothes: {
          tags: [
            {name: '内裤', icon: icon1},
            {name: '内衣', icon: icon2},
            {name: '袜子', icon: icon3},
            {name: '大衣', icon: icon4},
            {name: '家居服', icon: icon5},
            {name: '衬衫', icon: icon6},
            {name: '外套', icon: icon7}
          ]
        },
        kitchenware: {
          tags: [
            {name: '锅具', icon: kitchenware1},
            {name: '刀铲', icon: kitchenware2},
            {name: '功能厨具', icon: kitchenware3},
            {name: '餐具', icon: kitchenware4},
            {name: '杯壶', icon: kitchenware5},
            {name: '茶具', icon: kitchenware6},
            {name: '厨房清洁', icon: kitchenware7},
            {name: '厨房电渠', icon: kitchenware8}
          ]
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .category-all {
    height: 100%;
    overflow: auto;
    .category-all-clothes {
      margin-top: 0;
      &:before {
        display: none;
      }
    }
  }
</style>
