<template>
  <div>
    <m-header v-bind:title="sTitle" fixed :leftShow='true' :rightShow='true'>
      <a v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/></a>
    </m-header>
    <div class="news-wraper">
      <div class="news-header">
        <span style="color:#444444;font-size: 14px;">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</span>
        <span style="color: #999999;font-size: 10px;margin-top: 10px;">2017-11-11 12:34</span>
      </div>
      正文

    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import header from '../header.vue'

  export default {

    data(){
      return{
        sTitle:'资讯详情'
      }
    },
    created(){

      this.sTitle = this.$route.query.title;

    console.log(this.$route.query.title);
    },
    methods:{
      back:function () {
        this.$router.go(-1);
      },


    },
    components:{
      'm-header':header
    }
  };
</script>
<style rel="stylesheet/stylus">
  .news-wraper{
    margin-top: 44px;
    width: 100%;
    background: white;
  }
  .news-header{
    padding: 10px;
    border-bottom: 1px solid #eeeeee;
  }
  .news-header >span{
    display: block;

  }
</style>
