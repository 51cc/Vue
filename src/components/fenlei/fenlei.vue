<template>
  <div>
    <m-header title="分类" fixed >
      <a href="javascript:;" slot="right"><img class="m-icon-img margin-right-10" src="../../assets/images/ic_actionbar_search_icon.png"/></a>
      <a href="javascript:;" slot="right"><img class="m-icon-img" src="../../assets/images/ic_chat_green.png"/></a>
    </m-header>

    <div class="content-wraper">

      <div class="left-content-wraper">
        <ul>
          <li v-for="(item,index) in categoryAy" :class="{'is-item-active':item.select}" v-on:click="selectCategory(index)" class="left-content-item">
            <span style="font-size: 14px;">{{item.name}}</span>
          </li>
        </ul>
      </div>

      <div class="right-content-wraper">
        <div v-for="(item,index) in productAy" class="product-wraper-item" v-on:click="jumptoproductdetail(index)">

          <img :src="item.url" class="product-img">
          <span class="product-title">{{item.name}}</span>
          <div style="overflow: hidden;">
            <span class="product-title" style="font-size:10px; float:left;margin-left:0.5px;height: 10px;line-height: 10px;color: red;">¥{{item.price}}</span>
            <span class="product-title" style="font-size:10px; color:#999999;float:left;margin-left:0.5px;height: 10px;line-height: 10px;text-decoration: line-through;">¥{{item.oldprice}}</span>
            <!--<span class="product-title" style="font-size:10px;color:#999999;float:right;height: 8px;line-height: 8px;text-align: right;">销量{{item.num}}</span>-->
          </div>


        </div>
      </div>
    </div>




  </div>
</template>




<script type="text/ecmascript-6">
  import header from '../header.vue'

  export  default {

    data(){
      return{
        sWidth:document.body.clientWidth,

        categoryAy:[{'name':'分类','cId':'1','select':true},
                    {'name':'分类2','cId':'2','select':false},
                    {'name':'分类3','cId':'3','select':false},
          {'name':'分类4','cId':'4','select':false},
          {'name':'分类5','cId':'5','select':false},
          {'name':'分类6','cId':'6','select':false},
          {'name':'分类7','cId':'7','select':false},
          {'name':'分类8','cId':'8','select':false},
          {'name':'分类9','cId':'9','select':false},
          {'name':'分类10','cId':'10','select':false},
          {'name':'分类11','cId':'11','select':false},
          {'name':'分类12','cId':'12','select':false},
          {'name':'分类13','cId':'13','select':false},
          {'name':'分类14','cId':'14','select':false},
          {'name':'分类15','cId':'15','select':false}
          ],
        productAy:[ {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250能IH电W只能IH',price:'12',oldprice:'1555',num:'9'},
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只50W只能IH',price:'12222',oldprice:'1555',num:'999'},
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只能I50H',price:'1222',oldprice:'1555',num:'999'}
        ],
      }
    },
    methods:{
      selectCategory:function (event) {
        console.log(event)
        for(var index in this.categoryAy)
        {
          var dic = this.categoryAy[index];
          if(index==event&&!dic.select)
          {
            dic.select = true;
          }
          else
          {
            dic.select= false;
          }
        }
      },
      jumptoproductdetail:function (event) {
        console.log(event);
        var dic = this.productAy[event];
        this.$router.push({name:'productDetail',query:dic});
      }
    },
    components:{
      'm-header':header
    },

  };
</script>


<style  rel="stylesheet/stylus">

  .content-wraper{
    width: 100%;
    margin-top: 44px;
    display: flex;
    padding-bottom: 64px;
    overflow: hidden;
    position: absolute;

  }

  .left-content-wraper{
    width: 30%;
    height: 100%;
    border-right: 1px solid #eeeeee;
    background: white;
  }

  .left-content-item{
    font-size: 10px;
    border-bottom: 1px solid #eeeeee;
    width: 100%;
    height: 40px;
    padding: 10px;
    text-align: center;
  }
  .is-item-active{
    background: #eeeeee;
  }


  .right-content-wraper{
    width: 70%;
    height: 100%;
    display: flex;
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
    font-size: 12px;
    text-align: left;
    color: #444444;
    line-height: 12px;
    height: 24px;
  }


</style>
