<template>
   <div>
     <m-header title="我的预约" fixed :leftShow='true' :rightShow='true'>
       <a v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png" slot="left"/></a>
     </m-header>

     <div style="margin-top: 44px;background: #eeeeee;">

       <div v-for="item in dataAy" style="margin-bottom: 5px;height: 200px;width: 100%;background: white;">

         <div style="width: 100%;height: 50px;border-bottom: 1px solid #eeeeee;">

         </div>


         <div style="width: 100%;height: 100px;border-bottom: 1px solid #eeeeee;">

         </div>

         <div style="width: 100%;height: 50px;">

         </div>

       </div>


     </div>

   </div>


</template>
<script type="text/ecmascript-6">

  import header from '../header.vue'

  export default {
    components:{
      'm-header':header
    },
    data(){
      return{
        dataAy:['','','','','']
      }

    },
    methods:{
      back:function () {
        this.$router.go(-1);
      }
    },
    created(){

    },

  };
</script>
<style rel="stylesheet/stylus">
</style>
