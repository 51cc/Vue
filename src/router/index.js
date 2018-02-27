import Vue from 'vue'
import Router from 'vue-router'

import first from '../components/first/first.vue'
import fenlei from '../components/fenlei/fenlei.vue'
import gwc from '../components/gwc/gwc.vue'
import my from '../components/my/my.vue'
import products from '../components/productList/productList.vue'
import productDetail from '../components/productDetail/productDetail.vue'
import confirmOrder from '../components/confirmOrder/confirmOrder.vue'
import clientList from '../components/clientList/clientList.vue'
import clientdetail from '../components/clientdetail/clientdetail.vue'
import clientYYMy   from '../components/clientYYMy/clientYYMy.vue'
import xsqgList from '../components/xsqgList/xsqgList.vue'
import xsqgDetail from '../components/xsqgDetail/xsqgDetail.vue'

import ptList from '../components/ptList/ptList.vue'
import ptDetail from '../components/ptDetail/ptDetail.vue'
import yhqlq from '../components/yhqLingQuList/yhqLingQuList.vue'
import yhqDetail from '../components/yhqDetail/yhqDetail.vue'
import yhqMy  from '../components/yhqMy/yhqMy.vue'

import kqList from '../components/kqList/kqList.vue'
import kqMy from '../components/kqMy/kqMy.vue'

import zxList from '../components/zxList/zxList.vue'
import spList from '../components/spList/spList.vue'
import zxDetail from '../components/zxDetail/zxDetail.vue'
import orders   from '../components/orders/orders.vue'

import aboutUs  from '../components/aboutUs/aboutUs.vue'

import bandPhone  from '../components/bandphone/bandphone.vue'
import dljm       from '../components/dailijiameng/dailijiameng.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: { navShow: true, cname: '首页' },
      component: first
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      meta: { navShow: true, cname: '购物车' },
      component: gwc
    },
    {
      path: '/audioBook',
      name: 'AudioBook',
      meta: { navShow: true, cname: '分类' },
      component: fenlei
    },
    {
      path: '/mine',
      name: 'Mine',
      meta: { navShow: true, cname: '我的' },
      component: my
    },
    {
      path:'/productDetail',
      name:'productDetail',
      meta: { navShow: false, cname: '商品详情' },
      component:productDetail
    },
    {
      path:'/products',
      name:'products',
      meta: { navShow: false, cname: '商品列表' },
      component:products
    },
    {
      path:'/confirmOrder',
      name:'confirmOrder',
      meta: { navShow: false, cname: '订单结算' },
      component:confirmOrder
    },
    {
      path:'/clientList',
      name:'clientList',
      meta: { navShow: false, cname: '商家列表' },
      component:clientList
    },
    {
      path:'/clientYYMy',
      name:'clientYYMy',
      meta:{ navShow: false, cname: '我的预约' },
      component:clientYYMy
    },
    {
      path:'/xsqgList',
      name:'xsqgList',
      meta: { navShow: false, cname: '限时抢购' },
      component:xsqgList
    },
    {
      path:'/xsqgDetail',
      name:'xsqgDetail',
      meta: { navShow: false, cname: '限时抢购详情' },
      component:xsqgDetail
    },
    {
      path:'/clientdetail',
      name:'clientdetail',
      meta: { navShow: false, cname: '商家详情' },
      component:clientdetail
    },
    {
      path:'/ptList',
      name:'ptList',
      meta: { navShow: false, cname: '拼团' },
      component:ptList
    },
    {
      path:'/ptDetail',
      name:'ptDetail',
      meta: { navShow: false, cname: '拼团详情' },
      component:ptDetail
    },
    {
      path:'/yhqlq',
      name:'yhqlq',
      meta: { navShow: false, cname: '优惠券'},
      component:yhqlq
    },
    {
      path:'/yhqDetail',
      name:'yhqDetail',
      meta: { navShow: false, cname: '优惠券详情'},
      component:yhqDetail
    },
    {
      path:'/yhqMy',
      name:'yhqMy',
      meta: { navShow: false, cname: '我的优惠券'},
      component:yhqMy
    },
    {
      path:'/kqList',
      name:'kqList',
      meta: { navShow: false, cname: '卡券' },
      component:kqList
    },
    {
      path:'/kqMy',
      name:'kqMy',
      meta: { navShow: false, cname: '我的卡券' },
      component:kqMy
    },
    {
      path:'/bandPhone',
      name:'bandPhone',
      meta: { navShow: false, cname: '绑定手机' },
      component:bandPhone
    },
    {
      path:'/dljm',
      name:'dljm',
      meta: { navShow: false, cname: '代理加盟' },
      component:dljm
    },
    {
      path:'/zxList',
      name:'zxList',
      meta: { navShow: false, cname: '资讯列表' },
      component:zxList
    },
    {
      path:'/zxDetail',
      name:'zxDetail',
      meta: { navShow: false, cname: '资讯详情' },
      component:zxDetail
    },
    {
      path:'/spList',
      name:'spList',
      meta: { navShow: false, cname: '视频列表' },
      component:spList
    },
    {
      path:'/orders',
      name:'orders',
      meta: { navShow: false, cname: '订单列表' },
      component:orders
    },
    {
      path:'/aboutUs',
      name:'aboutUs',
      meta: { navShow: false, cname: '关于我们' },
      component:aboutUs
    },
    {
      path: '/Index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
