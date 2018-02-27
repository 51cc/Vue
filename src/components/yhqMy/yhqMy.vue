<template>
  <div style="background: #f5f5f5;">
    <m-header title="我的优惠券" fixed :leftShow='true' :rightShow='true'>
      <a v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/></a>
    </m-header>

    <div style="margin-top: 44px;width: 100%;background: white;">
      <div class="product-tab">
        <div v-for="(item,index) in categoryAy"  class="product-tab-item" v-bind:class="{select:item.select}"  v-on:click="changecategory(item.id)">
          {{item.name}}
        </div>
      </div>
      <div style="background: #f5f5f5;">
        <div v-for="(item,index) in dataAy" style="width: 100%;position: relative;" v-on:click="jumptodetail(event)">
          <img :src="bgUrl" class="yhq-my-bg">
          <div class="up-clear-style">
              <span class="left-money">¥30</span>
              <div class="right-view">
                <span style="background: red;color:#ffffff;font-size: 12px;padding: 5px;">满100减15</span>
                <span style="color: #444444;font-size: 12px;padding: 5px;display: block">全场通用</span>
                <span style="color: #999999;font-size: 10px;padding: 5px;display: block">2017.03.22-2014.04.05</span>
              </div>
              <img v-show="index==1" :src="shiyongUrl" style="position:absolute;right:0;top: 0;width: 50px;height: 50px;">
              <img v-show="index==2" :src="guoqiUrl" style="position:absolute;right:0;top: 0;width: 50px;height: 50px;">

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
        bgUrl:require('../../assets/images/sys/my_youhuiquan_bg.png'),
        shiyongUrl:require('../../assets/images/sys/f_shiyong.png'),
        guoqiUrl:require('../../assets/images/sys/f_guoqi.png'),
        categoryAy:[
          {'name':'未使用','id':'0','select':true},
          {'name':'已使用','id':'1','select':false},
          {'name':'已过期','id':'2','select':false}
        ],
        dataAy:['','','']
      }
    },
    methods:{
      back:function () {
        this.$router.back();
      },
      jumptodetail:function (event) {
        this.$router.push({name:'yhqDetail',query:{'index':event,'type':'lingqu'}})

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
    },
    components:{
      'm-header':header
    }

  };

</script>
<style  rel="stylesheet/stylus">
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
  .yhq-my-bg{
    width: 95%;
    height: 90px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 2.5%;
  }
  .up-clear-style{
    width: 95%;
    position: absolute;
    top:5px;
    left: 2.5%;
    height: 90px;
    display: flex;
    flex-wrap: wrap;
  }
  .left-money{
    display: block;
    width: 80px;
    height: 90px;
    line-height: 90px;
    text-align: center;
    color: red;
    font-size: 20px;
  }
  .right-view{
    position: relative;
    margin-left: 5px;
    height: 90px;
    width: 70%;
    padding: 15px 0 10px 15px;
  }
</style>
