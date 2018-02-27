<template>
  <div style="background: #f5f5f5;">
    <m-header title="视频列表" fixed :leftShow='true' :rightShow='true'>
      <a v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/></a>
    </m-header>

    <div style="margin-top: 44px;">
      <div v-for="(item,index) in news2" class="product-wraper-item2" @click="jumptodetail(index)">
        <img :src="item.url" class="product-img" style="height: 60px;width: 80px;">
        <div :style="{width:(sWidth-105)+'px'}" style="height: 60px;margin-left: 5px;">
          <span class="product-title" style="margin-top: 5px;">{{item.name}}</span>

          <span class="product-title" style="color:#999999;margin-top: 0px;line-height: 12px;height: 12px;">2017-09-09 10:09:56</span>
        </div>
      </div>
    </div>


  </div>

</template>
<script type="text/ecmascript-6">
  import header from '../header.vue'
  export default {
    data(){
      return {
        sWidth:document.body.clientWidth,
        news2:[
          {url:require('../../assets/images/zx/1.jpg'),name:'家政服务行业有了地方标准'},
          {url:require('../../assets/images/zx/2.jpg'),name:'进军中国家政服务行业打造最大的家政网'},
        ],
      }
    },
    methods:{
      back:function () {
        this.$router.go(-1);
      },
      jumptodetail:function (event) {
        this.$router.push({name:'zxDetail',query:{'title':'视频详情','index':event,'stype':'video'}});
      }
    },
    components:{
      'm-header':header
    }
  };
</script>
<style rel="stylesheet/stylus">

  .product-wraper-item2{
    /*width: 100%;*/
    border-bottom: 1px solid #eeeeee;
    padding: 10px;
    display: flex;
    background: white;
  }
  .product-wraper-item2:active{
    background: #eeeeee;
  }
</style>
