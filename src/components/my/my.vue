<template>


  <div class="all-wraper">

    <m-header title="我的" fixed >

    </m-header>

    <div class="my-header-wraper" :style="{height:(0.4*sWidth)+'px'}">
      <div class="my-header-item">
        <img  class="my-header-icon">
        <span class="nick-names">强爷爷</span>
      </div>
    </div>



    <div  class="item-wraper" style="margin-top: 0px;" v-on:click="jumptoorders(100)">
      <span class="item-title" style="margin-left: 10px;">查看订单</span>
      <span class="item-right" :style="{ backgroundImage: 'url(' + arrowURL + ')' }"></span>
    </div>

    <div class="my-middle-wraper" style="margin-bottom: 10px;">

      <div class="my-middle-item-wraper" v-for="(item,index) in upIconAy" v-on:click="jumptoorders(index)">
        <span class="item-icon1"  :style="{ backgroundImage: 'url(' + item.url + ')' }"></span>
        <span style="display:inline-block;font-size:12px;width: 100%;text-align: center;">{{item.name}}</span>
      </div>

    </div>



    <div v-for="(item,index) in rowsAy">
      <div  class="item-wraper" style="margin-top: 0px;" v-on:click="jumptonext(index)">
        <span class="item-icon1"  :style="{ backgroundImage: 'url(' + item.url + ')' }"></span>
        <span class="item-title">{{item.name}}</span>
        <span class="item-right" :style="{ backgroundImage: 'url(' + item.rurl + ')' }"></span>
      </div>
    </div>




  </div>

</template>
<script type="text/ecmascript-6">
  import header from '../header.vue'

  export  default {
    data(){

      return {
        sWidth:document.body.clientWidth,
        sHeight:document.body.clientHeight,
        arrowURL:require('../../assets/images/sys/arrow_right.png'),
        upIconAy:[{url:require('../../assets/images/sys/m_daifukuan.png'),name:'待付款'},
          {url:require('../../assets/images/sys/m_daishouhuo.png'),name:'待发货'},
          {url:require('../../assets/images/sys/m_pingjia.png'),name:'待收获'},
          {url:require('../../assets/images/sys/m_daipingjia.png'),name:'待评价'},
          {url:require('../../assets/images/sys/m_tuikuan.png'),name:'退款'}
          ],
        rowsAy:[
          {url:require('../../assets/images/sys/pin.png'),name:'我的拼团',rurl:require('../../assets/images/sys/arrow_right.png')},
          {url:require('../../assets/images/sys/m_youhui.png'),name:'优惠券',rurl:require('../../assets/images/sys/arrow_right.png')},
          {url:require('../../assets/images/sys/kaquan.png'),name:'卡券中心',rurl:require('../../assets/images/sys/arrow_right.png')},
          {url:require('../../assets/images/sys/m_shoucang.png'),name:'我的收藏',rurl:require('../../assets/images/sys/arrow_right.png')},
          {url:require('../../assets/images/sys/myyuyue.png'),name:'我的预约',rurl:require('../../assets/images/sys/arrow_right.png')},

          {url:require('../../assets/images/sys/m_dizhi.png'),name:'地址管理',rurl:require('../../assets/images/sys/arrow_right.png')},
          {url:require('../../assets/images/sys/m_bangding.png'),name:'绑定手机',rurl:require('../../assets/images/sys/arrow_right.png')},
          {url:require('../../assets/images/sys/m_ruzhu.png'),name:'代理加盟',rurl:require('../../assets/images/sys/arrow_right.png')},
          {url:require('../../assets/images/sys/m_guanyu.png'),name:'关于我们',rurl:require('../../assets/images/sys/arrow_right.png')}
        ]
      }

    },
    methods:{
      jumptonext:function (event) {
        if(event==1)
        {
          this.$router.push({name:'yhqMy'});
        }
        else if(event==2)
        {
          this.$router.push({name:'kqMy'});
        }
        else if(event==4)
        {
          this.$router.push({name:'clientYYMy'});
        }
        else if(event==5)
        {
          alert('此功能在微信中会自动匹配');
        }
        else if(event==6)
        {
          this.$router.push({name:'bandPhone'});
        }
        else if(event==7)
        {
          this.$router.push({name:'dljm'});
        }
        else if(event==8)
        {
          this.$router.push({name:'aboutUs'});
        }
      },
      jumptoorders:function (event) {

        if(event==100)
        {
          console.log(event);

          this.$router.push({name:'orders',query:{isShow:true}})
        }
        else
        {
          console.log(event);

          this.$router.push({name:'orders',query:{isShow:false}})

        }
      }
    },
    components:{
      'm-header':header
    },

  };
</script>
<style  lang="less" rel="stylesheet/stylus">
  @import "../../assets/less/var.less";

  .all-wraper{
    width: 100%;
    font-size: 0;
    background: #eeeeee;
    padding-bottom: 64px;
  }
  .my-header-wraper{
    width: 100%;
    background: @defaultColor;
    margin-top: 44px;
    align-content: center;
  }
  .my-header-item{
    padding: 20px 0;
  }
  .my-header-icon{
    display: block;
    background: red;
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
  .nick-names{
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 15px;
    line-height:15px;
    font-size: 12px;
    color: #ffffff;
    margin-top: 5px;
  }
  .item-wraper{
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #eeeeee;
    background: white;
  }
  .item-wraper:active{
    background: #eeeeee;
  }
  .item-icon1{
    display: inline-block;
    margin: 10px 5px 10px 10px;
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    float: left;
  }
  .item-title{
    display: inline-block;
    margin: 10px auto;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    color: #444444;
    float: left;

  }
  .item-right{
    display: inline-block;
    margin: 15px 5px 15px 10px;
    width: 14px;
    height: 14px;
    background-size: 14px 14px;
    float: right;
  }

  .my-middle-wraper{
    display: flex;
    width: 100%;
    background: white;
  }
  .my-middle-item-wraper{
    width: 20%;
    padding: 10px;
  }
</style>
