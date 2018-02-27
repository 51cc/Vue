<template>
  <div style="background: white;">
    <m-header title="限时抢购" fixed :leftShow='true' :rightShow='true'>
      <a v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/></a>
    </m-header>

    <div class="xsqg-wraper">
        <div v-for="(item,index) in products1" class="product-wraper-item2" style="border: 1px solid #eeeeee;margin: 10px;">
          <img :src="item.url" class="product-img" style="height: 80px;width: 80px;">
          <div :style="{width:(sWidth-127)+'px'}" style="height: 80px;margin-left: 5px;">
            <span class="product-title">{{item.name}}</span>
            <div>
              <span class="product-title" style="margin-left:5px;height: 12px;line-height: 14px;color: red;font-size: 12px;">仅剩:1天12:58:45</span>
              <span class="product-title" style="float:right;color:#999999;margin-left:5px;height: 14px;line-height: 14px;font-size: 12px;">1.1万人抢购</span>
            </div>
            <div style="clear: both;">
              <span class="product-title" style="margin-left:5px;height: 10px;line-height: 14px;color: red;font-size: 12px;">¥{{item.price}}</span>
              <span class="product-title" style="color:#999999;margin-left:5px;height: 10px;line-height: 14px;text-decoration: line-through;font-size: 12px;">¥{{item.oldprice}}</span>
              <span class="product-title" style="height:20px;line-height:20px;padding:0 5px;font-size: 12px;background:red;color:#ffffff;float:right;border-radius:5px;" @click="jumptodetail(index)">立即抢购</span>
            </div>
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
        products1:[
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只50W只能IH电饭煲美的1250W只能IH',price:'12',oldprice:'1555',num:'9'},
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只50W只能IH电饭煲美的1250W只能IH',price:'12222',oldprice:'1555',num:'999'},
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只能IH电饭煲美的1250W只能IH',price:'1222',oldprice:'1555',num:'999'}
        ],
      };
    },
    methods:{
      back:function () {
        this.$router.go(-1);
      },
      jumptodetail:function (event) {
        this.$router.push({name:'xsqgDetail',query:{'index':event}})
      }
    },
    components:{
      'm-header':header
    }
  };
</script>
<style  rel="stylesheet/stylus">

  .xsqg-wraper{
    margin-top: 44px;
    width: 100%;
    background: white;
    padding: 5px 0;
  }
  .category-item{
    width: 25%;
    padding: 5%;
    background: white;

  }
  .category-img{
    width: 100%;
  }
  .category-text{
    display: inline-block;
    margin-top: 10px;
    width: 100%;
    font-size: 10px;
    text-align: center;
    line-height: 12px;
    height: 12px;
  }

  .c-title{
    background: white;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
    padding: 10px;
  }
  .c-title-text{
    display: inline-block;
    height:14px;
    font-size: 14px;
    line-height: 14px;
    font-weight: bolder;
    text-align: center;
    width: 100%;
  }
  .product-wraper-item2{
    border-bottom: 1px solid #eeeeee;
    padding: 10px;
    display: flex;
  }
</style>
