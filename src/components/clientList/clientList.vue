<template>
  <div class="client-wraper">
    <m-header title="商家列表" fixed :leftShow='true' :rightShow='true'>
      <a v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/></a>
    </m-header>
    <div class="client-list-wraper">
        <div v-for="(item,index) in clientAy" class="client-item" v-on:click="jumptodetail(index)">
            <img class="client-icon">
            <div class="client-other" :style="{width:(sWidth-90)+'px'}">
                <span class="clietn-title">北京开拓创想科技有限公司</span>
                <span class="clietn-title">山东济南历下山大路47号数码港大厦B901</span>
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
        clientAy:['','',''],
        sWidth:document.body.clientWidth
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
        console.log(event);
        var dic = this.clientAy[event];

        this.$router.push({name:'clientdetail',query:dic});
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
  .client-list-wraper{
    margin-top: 44px;
  }
  .client-item{
    background: white;
    display: flex;
    width: 100%;
    border-bottom: 1px solid #eeeeee;

  }
  .client-item:active{
    background: #eeeeee;
  }

  .client-item >.client-icon{
    margin: 10px;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    background: red;
  }
  .client-other{
    margin: 10px 10px 0 0;
    height: 60px;
  }
  .clietn-title{
    margin-top: 10px;
    line-height: 15px;
    display: block;
  }
</style>
