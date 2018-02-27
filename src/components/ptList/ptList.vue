<template>
  <div style="background: white;">
    <m-header title="惊喜拼团" fixed :leftShow='true' :rightShow='true'>
      <a v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/></a>
    </m-header>

    <div class="xsqg-wraper">

        <div v-for="(item,index) in products1" class="product-wraper-item3">
          <img :src="item.url" class="product-img1" :style="{height:(sWidth-20)/2.0 +'px',width:(sWidth-20) +'px'}">
          <div :style="{width:(sWidth-20)+'px'}" style="padding: 5px;">
            <span class="product-title1">{{item.name}}</span>
            <div style="margin-top: 5px;">
              <img style="width: 15px;height: 15px;background: red;">
              <span class="product-title1" style="color:#999999;margin-top: 0px;line-height: 12px;height: 12px;font-size: 12px;">5人团</span>
              <span class="product-title1" style="margin-left:5px;height: 14px;line-height: 14px;color: red;">¥{{item.price}}</span>
              <span @click="jumptodetail(index)" class="product-title1" style="height:20px;line-height:20px;padding:0 5px;background:red;color:#ffffff;font-size: 12px;float:right;border-radius:5px;">去开团</span>
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

        this.$router.push({name:'ptDetail',query:{'index':event}});
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
  .product-wraper-item3{
    border-bottom: 1px solid #eeeeee;
    padding: 10px;
  }

</style>
