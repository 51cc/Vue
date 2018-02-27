<template>

  <div class="product-wraper">

    <m-header title="产品列表" fixed :leftShow='true' :rightShow='true'>
      <a v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/></a>
    </m-header>


    <div class="product-tab">
      <div v-for="(item,index) in categoryAy"  class="product-tab-item" v-bind:class="{select:item.select}"  v-on:click="changecategory(item.id)">
       {{item.name}}
      </div>
    </div>


    <div class="category-wraper">
      <div class="product-wraper">
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
      return {
        sHeight:document.body.clientHeight,
        sWidth:document.body.clientWidth,
        isActive: true,
        categoryAy:[
          {'name':'新品','id':'0','select':true},
          {'name':'销量','id':'1','select':false},
          {'name':'价格','id':'2','select':false}
          ],
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
    props:{
      index:{
        type:Number,
        default:0
      }
    },
    components:{
      'm-header':header
    },
    methods:{
      changecategory:function (event) {
        console.log(event);
        for(var index in this.categoryAy)
        {
          var dic = this.categoryAy[index];
          if(dic.id==event&&!dic.select)
          {
            dic.select = true;
          }
          else
          {
            dic.select = false;
          }
        }
      },
      back:function () {
        this.$router.go(-1);
      },
      jumptodetail:function (event) {

        console.log(event);

        var dic = this.products1[event];
        this.$router.push({name:'productDetail',query:dic});


      }

    },

    created(){

      console.log('AAAAAAABBBBBBBBB');
      console.log('dataId: ' + this.$route.query.index)

    }



  };
</script>
<style  rel="stylesheet/stylus">
  .product-wraper{
    height: 100%;
    width: 100%;
    background: #f5f5f5;
  }
  .product-tab{
    background: white;
    width: 100%;
    margin-top: 44px;
    height: 35px;
    display: flex;
    text-align: center;
    line-height:35px;
    border-bottom: 1px solid #eeeeee;
  }
  .product-tab-item{
    flex: 1;

  }
  .r_link{
    display: block;
    text-decoration: none;
    font-size: 14px;
    color: #444444;
  }
.select{
  color: #ff0000;
  }
  .category-wraper{
    display: flex;
    width: 100%;
    margin-top: 10px;
    white-space: normal;
    flex-wrap: wrap;
    background: white;
  }
  .product-wraper{
    display: flex;
    width: 100%;
    background: white;
    flex-wrap: wrap;
  }

  .product-wraper-item{
    width: 47%;
    margin-left: 2%;
    margin-bottom: 5px;
    font-size: 0;
    /*padding: 10px;*/
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
