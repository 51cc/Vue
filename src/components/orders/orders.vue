<template>
  <div>
    <m-header title="订单列表" fixed :leftShow='true' :rightShow='true'>
      <a  v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/></a>
    </m-header>


    <div style="margin-top: 44px;">



    <div class="product-tab" style="margin-top: 0;" v-show="isShow">
      <div v-for="(item,index) in categoryAy"  class="product-tab-item" v-bind:class="{select:item.select}"  v-on:click="changecategory(item.id)">
        {{item.name}}
      </div>
    </div>


    <div class="orders-wraper">

      <div v-for="item in dataAy">
        <div class="order-item">
          <div class="order-first-wraper">
            <span style="width: 50%;text-align: left;font-size: 12px;color: #ff0000;">某某商家</span>
            <span style="width: 50%;text-align: right;font-size: 12px;color: #444444;">待评价</span>
          </div>
          <div v-for="item in item.ay" style="display: flex;padding: 10px;border-bottom: 1px solid #eeeeee;">
              <img style="width: 60px;height: 60px;background: red;">
              <div :style="{width:(sWidth-80)+'px'}" style="height: 60px;">
                  <div style="width: 100%;padding: 5px;">
                    <span style="width: 50%;text-align: left;font-size: 12px;color: #444444;">不干胶标签哈哈</span>
                    <span style="float: right;width: 50%;text-align: right;font-size: 12px;color: #444444;">¥18.00</span>
                  </div>
                  <div style="width: 100%;padding: 5px;">
                    <span style="width: 50%;text-align: left;font-size: 12px;color: #999999;">黄色_37</span>
                    <span style="float: right;width: 50%;text-align: right;font-size: 12px;color: #444444;">x2</span>
                 </div>
              </div>
          </div>
          <div style="width: 100%;padding: 5px;background: white;border-bottom: 1px solid #eeeeee;">
            <span :style="{width:(sWidth-20)+'px'}" style="display: block;font-size: 12px;color: #444444;text-align:right;">共1件商品 实付款：¥18.00</span>
          </div>
          <div style="display: flex; width: 100%;padding: 5px;background: white;">
            <span style="border-radius: 5px; margin-left:5px;width: 65px;height: 30px;line-height:30px;border: 1px solid #eeeeee;font-size: 12px;text-align: center;">取消</span>
            <span style="border-radius: 5px; margin-left:5px;width: 65px;height: 30px;line-height:30px;border: 1px solid #eeeeee;font-size: 12px;text-align: center;">删除</span>
            <span style="border-radius: 5px; margin-left:5px;width: 65px;height: 30px;line-height:30px;border: 1px solid #eeeeee;font-size: 12px;text-align: center;">查看物流</span>
            <span style="color: #ee0000; border-radius: 5px; margin-left:5px;width: 65px;height: 30px;line-height:30px;border: 1px solid #ee0000;font-size: 12px;text-align: center;">评价</span>
          </div>

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
        isShow:false,
        sWidth:document.body.clientWidth,
        dataAy:[{name:'白兔女装店',ay:['','',]},{name:'白兔女装店',ay:['','',]}],
        categoryAy:[
        {'name':'待付款','id':'0','select':true},
        {'name':'待发货','id':'1','select':false},
        {'name':'待收货','id':'2','select':false},
          {'name':'待评价','id':'3','select':false},
          {'name':'退款','id':'4','select':false}

        ]
      }
    },
    activated(){
      this.isShow=this.$route.query.isShow;
    },
    components:{
      'm-header':header
    },
    created(){
    },
    methods:{
      back:function () {
        this.$router.go(-1);
      },
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
    }
  };


</script>
<style rel="stylesheet/stylus">
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
  .select{
    color: #ff0000;
  }
  .orders-wraper{
    background: #f5f5f5;
  }
  .order-item{
    margin-top: 10px;
    width: 100%;
    background: white;
  }

  .order-first-wraper{
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #eeeeee;
  }
</style>
