import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import Spike from '@/components/home/spike'
import Fresh from '@/components/home/fresh'
import Hot from '@/components/home/hot'

import Category from '@/components/category/index'
import CategoryAll from '@/components/category/all'
import CategoryClothes from '@/components/category/clothes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/home',
      exact: true,
      meta: {
        title: '水果配送'
      }
    },
    {
      name: 'spike',
      path: '/home/spike',
      components: {
        default: Home,
        child: Spike
      },
      exact: true,
      meta: {
        title: '秒杀专区',
        isShareShow: true
      }
    },
    {
      name: 'fresh',
      path: '/home/fresh',
      components: {
        default: Home,
        child: Fresh
      },
      exact: true,
      meta: {
        title: '新品',
        isShareShow: true
      }
    },
    {
      name: 'preview',
      path: '/home/preview',
      components: {
        default: Home,
        child: Fresh
      },
      exact: true,
      meta: {
        title: '预告',
        isShareShow: true
      }
    },
    {
      name: 'hot',
      path: '/home/hot',
      components: {
        default: Home,
        child: Hot
      },
      exact: true,
      meta: {
        title: '人气推荐',
        isShareShow: true
      }
    },

    //  分类
    {
      path: '/category',
      name: 'category',
      component: Category,
      exact: true,
      meta: {
        title: '分类'
      }
    },
    {
      name: 'categoryAll',
      path: '/category/all',
      components: {
        default: Category,
        child: CategoryAll
      },
      exact: true,
      meta: {
        title: '全部分类',
        isShareShow: false
      }
    },
    {
      name: 'categoryClothes',
      path: '/category/clothes',
      components: {
        default: Category,
        child: CategoryClothes
      },
      exact: true,
      meta: {
        title: '服装',
        isShareShow: true
      }
    }
  ]
})
