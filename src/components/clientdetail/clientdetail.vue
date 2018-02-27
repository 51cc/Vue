<template>
  <div class="client-wraper">
    <m-header title="商家详情" fixed :leftShow='true' :rightShow='true'>
      <img v-on:click="back" class="m-icon-img" src="../../assets/images/ic_bar_back_white.png" slot="left"/>
    </m-header>

    <div class="client-detail-wraper">

      <div class="client-header">
        <img class="client-icon1">
        <span>北京开拓创想科技有限公司</span>
      </div>

      <div class="client-info">
        <div class="client-info-item">
          <span class="item-icon" :style="{ backgroundImage: 'url(' + locationurl + ')' }"></span>
          <span class="item-title">济南市历下区山大路47号数码</span>
          <span class="item-right" :style="{ backgroundImage: 'url(' +arrowurl + ')' }"></span>
        </div>
        <div class="client-info-item">
          <span class="item-icon" :style="{ backgroundImage: 'url(' + phoneurl + ')' }"></span>
          <span class="item-title">济南市历下区山大路47号数码</span>
          <span class="item-right" :style="{ backgroundImage: 'url(' +arrowurl + ')' }"></span>
        </div>
      </div>

      <div class="clietnt-yuyue" v-on:click="clickyuyue">
        预约商家
      </div>

      <div class="client-instroduce">
        <div style="padding: 10px;border-bottom: 1px solid #eeeeee;">
          <span>公司简介</span>
        </div>
      </div>

      <div class="client-products">
        <div v-for="(item,index) in products1" class="product-wraper-item" v-on:click="jumptodetail(index)">

          <img :src="item.url" class="product-img">
          <span class="product-title">{{item.name}}</span>
          <div style="overflow: hidden;">
            <span class="product-title" style="font-size:12px;float:left;margin-left:5px;height: 14px;line-height: 14px;color: red;">¥{{item.price}}</span>
            <span class="product-title" style="font-size:12px;color:#999999;float:left;margin-left:5px;height: 14px;line-height: 14px;text-decoration: line-through;">¥{{item.oldprice}}</span>
            <span class="product-title" style="font-size:12px;color:#999999;float:right;height: 14px;line-height: 14px;text-align: right;">销量{{item.num}}</span>
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
      return{
        locationurl:require('../../assets/images/sys/f_location.png'),
        arrowurl:require('../../assets/images/sys/arrow_right.png'),
        phoneurl:require('../../assets/images/sys/f_client_phone.png'),
        products1:[
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只50W只能IH电饭煲美的只能IH',price:'12',oldprice:'1555',num:'9'},
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只50W只能IH电饭煲美的1W只能IH',price:'12222',oldprice:'1555',num:'999'},
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只50W只能IH电饭煲美的1W只能IH',price:'12222',oldprice:'1555',num:'999'},
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只50W只能IH电饭煲美的1W只能IH',price:'12222',oldprice:'1555',num:'999'},
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只50W只能IH电饭煲美的1W只能IH',price:'12222',oldprice:'1555',num:'999'},
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只50W只能IH电饭煲美的1W只能IH',price:'12222',oldprice:'1555',num:'999'},

          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只能IH电饭煲美的1250W只能IH',price:'1222',oldprice:'1555',num:'999'}
        ],
      }
    },
    components:{
      'm-header':header
    },
    methods:{
      back:function () {
        this.$router.go(-1);
      },
      jumptodetail:function (event) {
        var dic = this.products1[event];
        dic.type='client';
        this.$router.push({name:'productDetail',query:dic});
      },
      clickyuyue:function () {
        //预约
      }

    }
  };
</script>
<style rel="stylesheet/stylus">
  .client-wraper{
    height: 100%;
    width: 100%;
    background: #f5f5f5;
  }
  
  .client-detail-wraper{
    margin-top: 44px;
    width: 100%;
  }
  .client-header{
    width: 100%;
    background: white;
    /*height: 140px;*/
  }
  .client-header >.client-icon1{
    width: 60px;
    height: 60px;
    margin: 10px;
    background: red;
  }
  .client-info{
    margin-top: 10px;
  }
  .client-info-item{
    display: flex;
    border-bottom: 1px solid #eeeeee;
    width: 100%;
    background: white;
    position: relative;
  }

  .item-icon{
    display: inline-block;
    margin: 15px 5px 15px 10px;
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
    float: left;
  }
  .item-title{
    display: block;
    margin: 10px 0;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    color: #444444;
    float: left;
    text-align: left;
  }
  .item-right{
    position: absolute;
    right: 5px;
    display: block;
    margin: 15px 5px 15px 10px;
    width: 14px;
    height: 14px;
    background-size: 14px 14px;
    float: right;
  }
  .clietnt-yuyue{
    margin: 10px;
    background: red;
    color: #ffffff;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
  }
  .client-instroduce{
    width: 100%;
    background: white;
  }
  .client-instroduce >span{

    height: 30px;
    font-size: 14px;
    color: #444444;
    margin-top: 10px;
    text-align: left;
    line-height: 30px;
    border-bottom: 1px solid #eeeeee;
  }
  .client-products{
    width: 100%;
    background: white;
    margin-top: 10px;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;

  }


  .product-wraper-item{
    width: 47%;
    margin-left: 2%;
    margin-bottom: 5px;
    font-size: 0;
    border: 1px solid #eeeeee;
  }
  .product-img{
    width: 100%;
  }
  .product-title{
    display: inline-block;
    margin: 5px;
    font-size: 14px;
    text-align: left;
    color: #444444;
    line-height: 14px;
    height: 28px;
  }
</style>
