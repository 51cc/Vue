<template>
  <div class="all-wraper">

    <m-header title="首页" fixed>
      <!--<a href="javascript:;" slot="right"><img class="m-icon-img margin-right-10" src="../../assets/images/ic_actionbar_search_icon.png"/></a>-->
      <!--<a href="javascript:;" slot="right"><img class="m-icon-img" src="../../assets/images/ic_chat_green.png"/></a>-->
    </m-header>

    <div style="margin-top: 44px;">

    <div v-for="(item,index) in uiAy">
      <!--轮播图-->
      <app-banner :listImg="listImg" :height=sWidth  v-show="item.styleName=='fangxinglunbotu'"></app-banner>
      <app-banner :listImg="listImg" :height=sWidth/2.0  v-show="item.styleName=='changxinglunbotu'"></app-banner>

      <!-- 搜索组件   资源 search -->
      <div>
      <div style='background:#ffffff;display:flex;height:50px;' v-show="item.styleName=='dingweisousuo'">

        <div style='width: 25%;background:#eeeeee;padding: 5px 10px;margin:10px 5px 10px 10px;border-radius: 2.5px;display:flex;'>
          <img style='width: 14px;height:14px;margin-top: 2px;' :src="locationUrl">
          <label style='line-height:20px;font-size: 10px;color:#444444;font-weight: normal;'>济南市</label>
        </div>

        <div style='width: 50%;background:#ffffff;padding: 5px 10px;margin:10px 2px;border:1px solid #eeeeee;border-radius: 2.5px;display: flex;'>
          <img style='width: 14px;height: 14px;margin-top: 3px;' :src="searchUrl">
          <input  readonly style='font-size: 14px;width: 80%;border: none;' type="text" placeholder="请输入名称">
        </div>

        <div style='width: 25%;background:#eeeeee;padding: 5px 10px;margin:10px 10px 10px 5px;border-radius: 2.5px;display: flex;'>
          <span style="width: 100%;padding: 0 5px;text-align: center;font-weight: normal;font-size: 14px;">搜索</span>
        </div>
      </div>
      <div style="clear: both;"></div>



      <!--搜索-->
      <div style='background:#ffffff;display:flex;height:50px;' v-show="item.styleName=='sousuo'">

        <div style='width: 75%;background:#ffffff;padding: 5px 10px;margin:10px 5px 10px 10px;;border:1px solid #eeeeee;border-radius: 2.5px;display: flex;'>
          <img style='width: 14px;height: 14px;margin-top: 3px;' :src="searchUrl">
          <input  readonly style='width: 80%;border: none;font-size: 14px;' type="text" placeholder="请输入名称">
        </div>

        <div style='width: 25%;background:#eeeeee;padding: 5px 10px;margin:10px 10px 10px 5px;border-radius: 2.5px;display: flex;'>
          <span style="width: 100%;padding: 0 5px;text-align: center;font-weight: normal;font-size: 14px;">搜索</span>
        </div>

      </div>

      <!--快捷入口-->
      <div class="category-wraper" v-show="item.styleName=='kuaijierukou'">

        <div v-for="(citem,index) in categorys" v-on:click="jumptodetail(index)" class="category-item">
          <img :src="citem.url" class="category-img">
          <span class="category-text">{{citem.name}}</span>
        </div>

      </div>


      <!--推荐分类1-->
      <div class="category-wraper" v-show="item.styleName=='fenleituijian1'">
        <div class="c-title">
          <span class="c-title-text" style="text-align:left;" v-show="item.topPropModel.styleName=='left'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:center;" v-show="item.topPropModel.styleName=='center'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:right;" v-show="item.topPropModel.styleName=='right'">{{item.topPropModel.textName}}</span>
        </div>
        <div v-for="(citem,index) in categorys1" class="category-item" v-on:click="jumptoproducts(index)">
          <img :src="citem.url" class="category-img">
          <span class="category-text">{{citem.name}}</span>
        </div>
      </div>


      <!--推荐分类2  -->
      <div class="category-wraper" v-show="item.styleName=='fenleituijian2'">
        <div class="c-title">
          <span class="c-title-text" style="text-align:left;" v-show="item.topPropModel.styleName=='left'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:center;" v-show="item.topPropModel.styleName=='center'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:right;" v-show="item.topPropModel.styleName=='right'">{{item.topPropModel.textName}}</span>
        </div>
        <div v-for="(citem,index) in categorys2" class="category-item" style="position: relative;" v-on:click="jumptoproducts(index)">
          <img :src="citem.url" class="category-img">
          <span class="category-text"  :style="{top:screenWidth+'px'}" style="position: absolute;left: 0px;color: #ffffff;">{{citem.name}}</span>
          </img>
        </div>
      </div>



      <!--推荐分类3-->
      <div class="category-wraper" v-show="item.styleName=='fenleituijian3'">
        <div class="c-title">
          <span class="c-title-text" style="text-align:left;" v-show="item.topPropModel.styleName=='left'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:center;" v-show="item.topPropModel.styleName=='center'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:right;" v-show="item.topPropModel.styleName=='right'">{{item.topPropModel.textName}}</span>
        </div>

        <div class="c3z">

          <div v-for="(citem,index) in categorys3" class="category-item3" v-on:click="jumptoproducts(index)">
            <span class="category-item3-text">{{citem.name}}</span>
            <img :src="citem.url" class="category-img" style="width: 25%;"></img>
          </div>

        </div>
      </div>


      <!--推荐分类4-->
      <div class="category-wraper" v-show="item.styleName=='fenleituijian4'">
        <div class="c-title">
          <span class="c-title-text" style="text-align:left;" v-show="item.topPropModel.styleName=='left'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:center;" v-show="item.topPropModel.styleName=='center'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:right;" v-show="item.topPropModel.styleName=='right'">{{item.topPropModel.textName}}</span>
        </div>
        <div v-for="(citem,index) in categorys1" class="category-item" style="width: 33%;padding: 3.5% 7% 3.5% 7%;" v-on:click="jumptoproducts(index)">
          <img :src="citem.url" class="category-img">
          <span class="category-text">{{citem.name}}</span>
        </div>
      </div>



      <!--推荐商品1-->
      <div class="category-wraper" v-show="item.styleName=='tuijianshangpin1'">
        <div class="c-title">
          <span class="c-title-text" style="text-align:left;" v-show="item.topPropModel.styleName=='left'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:center;" v-show="item.topPropModel.styleName=='center'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:right;" v-show="item.topPropModel.styleName=='right'">{{item.topPropModel.textName}}</span>
        </div>

        <div class="product-wraper">
          <div v-for="(item,index) in products1" class="product-wraper-item" v-on:click="jumptoproductdetail(index)">

            <img :src="item.url" class="product-img">
            <span class="product-title">{{item.name}}</span>
            <div style="overflow: hidden;">
              <span class="product-title" style="font-size:12px;float:left;margin-left:5px;height: 14px;line-height: 14px;color: red;">¥{{item.price}}</span>
              <span class="product-title" style="font-size:12px;color:#999999;float:left;margin-left:5px;height: 14px;line-height: 14px;text-decoration: line-through;">¥{{item.oldprice}}</span>
              <span class="product-title" style="font-size:12px;color:#999999;float:right;height: 14px;line-height: 14px;text-align: right;">销量{{item.num}}</span>
            </div>


          </div>
        </div>
        <div class="c-title" style="border-bottom: none;">
          <span class="c-title-text" style="font-weight: normal;">{{item.bootomPropModel.textName}}</span>
        </div>
      </div>


      <!--推荐商品2-->
      <div class="category-wraper" v-show="item.styleName=='tuijianshangpin2'">
        <div class="c-title">
          <span class="c-title-text" style="text-align:left;" v-show="item.topPropModel.styleName=='left'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:center;" v-show="item.topPropModel.styleName=='center'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:right;" v-show="item.topPropModel.styleName=='right'">{{item.topPropModel.textName}}</span>
        </div>
        <div>
          <div v-for="(item,index) in products1" class="product-wraper-item2" v-on:click="jumptoproductdetail(index)">
            <img :src="item.url" class="product-img" style="height: 80px;width: 80px;">
            <div :style="{width:(sWidth-105)+'px'}" style="height: 80px;margin-left: 5px;">
              <span class="product-title">{{item.name}}</span>
              <div>
                <span class="product-title" style="font-size:12px;margin-left:5px;height: 14px;line-height: 14px;color: red;">¥{{item.price}}</span>
                <span class="product-title" style="font-size:12px;color:#999999;margin-left:5px;height: 14px;line-height: 14px;text-decoration: line-through;">¥{{item.oldprice}}</span>
                <span class="product-title" style="font-size:12px;color:#999999;float:right;margin-left:5px;height: 14px;line-height: 14px;text-align: right;">销量{{item.num}}</span>
              </div>
              <span class="product-title" style="font-size:12px;color:#999999;margin-top: 0px;line-height: 12px;height: 12px;">567人已收藏</span>
            </div>
          </div>
        </div>
        <div class="c-title" style="border-bottom: none;">
          <span class="c-title-text" style="font-weight: normal;">{{item.bootomPropModel.textName}}</span>
        </div>
      </div>


      <!--推荐商品3-->
      <div class="category-wraper"  v-show="item.styleName=='tuijianshangpin3'">
        <div class="c-title">
          <span class="c-title-text" style="text-align:left;" v-show="item.topPropModel.styleName=='left'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:center;" v-show="item.topPropModel.styleName=='center'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:right;" v-show="item.topPropModel.styleName=='right'">{{item.topPropModel.textName}}</span>
        </div>
        <div class="product-wraper">
          <div v-for="(item,index) in products1" class="product-wraper-item" v-on:click="jumptoproductdetail(index)">

            <img :src="item.url" class="product-img">
          </div>
        </div>
        <div class="c-title" style="border-bottom: none;">
          <span class="c-title-text" style="font-weight: normal;">{{item.bootomPropModel.textName}}</span>
        </div>
      </div>

      <!--拼团-->
      <div class="category-wraper" v-show="item.styleName=='pintuanhuodong'">
        <div class="c-title">
          <span class="c-title-text" style="text-align:left;" v-show="item.topPropModel.styleName=='left'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:center;" v-show="item.topPropModel.styleName=='center'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:right;" v-show="item.topPropModel.styleName=='right'">{{item.topPropModel.textName}}</span>
        </div>
        <div>
          <div v-for="item in products1" class="product-wraper-item2" style="border: 1px solid #eeeeee;margin: 10px;">
            <img :src="item.url" class="product-img" style="height: 80px;width: 80px;">
            <div :style="{width:(sWidth-127)+'px'}" style="height: 80px;margin-left: 5px;">
              <span class="product-title">{{item.name}}</span>
              <span class="product-title" style="color:#999999;margin-top: 0px;line-height: 12px;height: 12px;font-size: 12px;">5人团</span>
              <div>
                <span class="product-title" style="margin-left:5px;height: 14px;line-height: 14px;color: red;">¥{{item.price}}</span>
                <span class="product-title" style="color:#999999;margin-left:5px;height: 14px;line-height: 14px;text-decoration: line-through;">¥{{item.oldprice}}</span>
                <span class="product-title" style="height:20px;line-height:20px;padding:0 5px;background:red;color:#ffffff;font-size: 12px;float:right;border-radius:5px;">去开团</span>
              </div>
            </div>
          </div>
        </div>
        <div class="c-title" style="border-bottom: none;">
          <span class="c-title-text" style="font-weight: normal;">{{item.bootomPropModel.textName}}</span>
        </div>
      </div>


      <!--限时抢购-->
      <div class="category-wraper" v-show="item.styleName=='xianshiqianggou'">
        <div class="c-title">
          <span class="c-title-text" style="text-align:left;" v-show="item.topPropModel.styleName=='left'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:center;" v-show="item.topPropModel.styleName=='center'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:right;" v-show="item.topPropModel.styleName=='right'">{{item.topPropModel.textName}}</span>
        </div>
        <div>
          <div v-for="item in products1" class="product-wraper-item2" style="border: 1px solid #eeeeee;margin: 10px;">
            <img :src="item.url" class="product-img" style="height: 80px;width: 80px;">
            <div :style="{width:(sWidth-127)+'px'}" style="height: 80px;margin-left: 5px;">
              <span class="product-title">{{item.name}}</span>
              <div>
                <span class="product-title" style="margin-left:5px;height: 12px;line-height: 14px;color: red;font-size: 12px;">仅剩:1天12:58:45</span>
                <span class="product-title" style="float:right;color:#999999;margin-left:5px;height: 14px;line-height: 14px;font-size: 12px;">1.1万人抢购</span>
              </div>
              <div style="clear: both;">
                <span class="product-title" style="margin-left:5px;height: 10px;line-height: 14px;color: red;font-size: 12px;">¥{{item.price}}</span>
                <span class="product-title" style="color:#999999;margin-left:5px;height: 10px;line-height: 14px;text-decoration: line-through;font-size: 12px;">¥{{item.oldprice}}</span>
                <span class="product-title" style="height:20px;line-height:20px;padding:0 5px;font-size: 12px;background:red;color:#ffffff;float:right;border-radius:5px;">立即抢购</span>
              </div>
            </div>
          </div>
        </div>
        <div class="c-title" style="border-bottom: none;">
          <span class="c-title-text" style="font-weight: normal;">{{item.bootomPropModel.textName}}</span>
        </div>
      </div>


      <!--店铺街1-->
      <div class="category-wraper"  v-show="item.styleName=='dianpujie1'">
        <div class="c-title" style="display: flex;">
          <span class="c-title-text" style="text-align: left;display:block;">{{item.topPropModel.textName}}</span>
          <span class="item-icon" style="margin:0;width: 14px; height: 14px;" :style="{ backgroundImage: 'url(' +arrowUrl+ ')' }"></span>
        </div>
        <div class="c3z">
          <div  class="category-item4">
            <img src="" style="width: 100%;" :src="client1[0].url">
          </div>
          <div  class="category-item4">
            <img src="" style="width: 100%;" :src="client1[1].url">
            <img src="" style="width: 100%;" :src="client1[2].url">
          </div>
        </div>
      </div>



      <!--店铺街2-->
      <div class="category-wraper" v-show="item.styleName=='dianpujie2'">
        <div class="c-title" style="display: flex;">
          <span class="c-title-text" style="text-align: left;">{{item.topPropModel.textName}}</span>
          <span class="item-icon" style="margin:0;width: 14px; height: 14px;" :style="{ backgroundImage: 'url(' +arrowUrl+ ')' }"></span>

        </div>
        <div class="c3z">
          <div v-for="citem in client2" class="category-item3">
            <span class="category-item3-text">{{citem.name}}</span>
            <img :src="citem.url" class="category-img" style="width: 25%;"></img>
          </div>
        </div>
      </div>


      <!--店铺街3-->
      <div class="category-wraper" v-show="item.styleName=='dianpujie3'">
        <div class="c-title" style="display: flex;">
          <span class="c-title-text" style="text-align: left;">{{item.topPropModel.textName}}</span>
          <span class="item-icon" style="margin:0;width: 14px; height: 14px;" :style="{ backgroundImage: 'url(' +arrowUrl+ ')' }"></span>
        </div>
        <div class="c3z">
          <div v-for="citem in client2" class="category-item" style="width: 33%;padding: 1.5% 2% 1.5% 2%;">
            <div style="border: 1px solid #eeeeee;padding: 10%;border-radius: 10px;">
              <img :src="citem.url" class="category-img">
              <span class="category-text" style="height: 24px;margin:2.5px auto;">{{citem.name}}</span>
            </div>
          </div>
        </div>
      </div>


      <!--店铺街4-->
      <div class="category-wraper" v-show="item.styleName=='dianpujie4'">
        <div class="c-title" style="display: flex;">
          <span class="c-title-text" style="text-align: left;">{{item.topPropModel.textName}}</span>
          <span class="item-icon" style="margin:0;width: 14px; height: 14px;" :style="{ backgroundImage: 'url(' +arrowUrl+ ')' }"></span>
        </div>
        <div class="client-wrapper">
          <div v-for="citem in client3" class="client-wrapper-item">
            <img :src="citem.url" class="category-img" style="width: 100%;">
          </div>
        </div>
      </div>

      <!--卡券-->
      <div class="category-wraper" v-show="item.styleName=='kajuan'">
        <div class="c-title">
          <span class="c-title-text" style="text-align:left;" v-show="item.topPropModel.styleName=='left'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:center;" v-show="item.topPropModel.styleName=='center'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:right;" v-show="item.topPropModel.styleName=='right'">{{item.topPropModel.textName}}</span>
        </div>
        <div>
          <div v-for="item in products1" class="product-wraper-item2">
            <img :src="item.url" class="product-img" style="height: 80px;width: 80px;">
            <div :style="{width:(sWidth-105)+'px'}" style="height: 80px;margin-left: 5px;">
              <div style="margin-top: 10px;">
                <span class="product-title" style="margin-left:5px;height: 14px;line-height: 14px;">欧莱雅优欧莱雅优惠券</span>
                <span class="product-title" style="height:20px;line-height:20px;padding:0 5px;font-size:8px;background:red;color:#ffffff;float:right;border-radius:5px;text-align: right;">领取</span>
              </div>
              <div style="display: flex;">
                <div>
                  <span class="ico_style1"></span>
                  <span class="product-title" style="margin-left:5px;height: 14px;line-height: 14px;color: #999999;">商家位置</span>
                </div>
                <div>
                  <span class="ico_style2"></span>
                  <span class="product-title" style="color:#999999;margin-left:5px;height: 14px;line-height: 14px;">联系商家</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="c-title" style="border-bottom: none;">
          <span class="c-title-text" style="font-weight: normal;">{{item.bootomPropModel.textName}}</span>
        </div>
      </div>

      <!--优惠券1-->
      <div class="ggt-wraper" style="display: block;" v-show="item.styleName=='youhuiquan1'">
        <div v-for="item in yhq1" class="ggt-wrapper-item1" style="width: 100%;">
          <img :src="item.url" class="ggt-wraper-img1">
        </div>
      </div>
      <!--优惠券2-->
      <div class="ggt-wraper" style="display: block;" v-show="item.styleName=='youhuiquan2'">
        <div v-for="item in yhq2" class="ggt-wrapper-item1" style="width: 100%;">
          <img :src="item.url" class="ggt-wraper-img1">
        </div>
      </div>


      <!--活动资讯2-->

      <div class="category-wraper" v-show="item.styleName=='zixun2'">
        <div class="c-title">
          <span class="c-title-text" style="text-align:left;" v-show="item.topPropModel.styleName=='left'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:center;" v-show="item.topPropModel.styleName=='center'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:right;" v-show="item.topPropModel.styleName=='right'">{{item.topPropModel.textName}}</span>
        </div>

        <div v-for="item in news1" class="news-wrapper-item1">
          <img :src="item.url" class="hot-class">
          <span style="display: block;margin-left: 5px;font-size: 14px;">{{item.name}}</span>
        </div>
        <div class="c-title" style="border-bottom: none;">
          <span class="c-title-text" style="font-weight: normal;">{{item.bootomPropModel.textName}}</span>
        </div>
      </div>


      <!--活动资讯1-->
      <div class="category-wraper" v-show="item.styleName=='zixun1'">
        <div class="c-title">
          <span class="c-title-text" style="text-align:left;" v-show="item.topPropModel.styleName=='left'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:center;" v-show="item.topPropModel.styleName=='center'">{{item.topPropModel.textName}}</span>
          <span class="c-title-text" style="text-align:right;" v-show="item.topPropModel.styleName=='right'">{{item.topPropModel.textName}}</span>
        </div>
        <div>
          <div v-for="item in news2" class="product-wraper-item2">
            <img :src="item.url" class="product-img" style="height: 60px;width: 80px;">
            <div :style="{width:(sWidth-105)+'px'}" style="height: 60px;margin-left: 5px;">
              <span class="product-title" style="margin-top: 5px;">{{item.name}}</span>

              <span class="product-title" style="color:#999999;margin-top: 0px;line-height: 12px;height: 12px;">2017-09-09 10:09:56</span>
            </div>
          </div>
        </div>

        <div class="c-title" style="border-bottom: none;">
          <span class="c-title-text" style="font-weight: normal;">{{item.bootomPropModel.textName}}</span>
        </div>
      </div>


      <!--视频2-->
      <div class="category-wraper" v-show="item.styleName=='shipin2'">
        <div class="c-title" style="display: flex;">
          <span class="c-title-text" style="text-align: left;display:block;">{{item.topPropModel.textName}}</span>
          <span class="item-icon" style="margin:0;width: 14px; height: 14px;" :style="{ backgroundImage: 'url(' +arrowUrl+ ')' }"></span>
        </div>
        <div v-for="item in news3" class="news-wrapper-item1">
          <img :src="item.url" class="hot-class">
          <span style="display: inline-block;margin-left: 5px;font-size: 14px;">{{item.name}}</span>
        </div>
      </div>


      <!--视频1-->
      <div class="category-wraper" v-show="item.styleName=='shipin1'">
        <div class="c-title" style="display: flex;">
          <span class="c-title-text" style="text-align: left;display:block;">{{item.topPropModel.textName}}</span>
          <span class="item-icon" style="margin:0;width: 14px; height: 14px;" :style="{ backgroundImage: 'url(' +arrowUrl+ ')' }"></span>
        </div>
        <div style="width: 100%;background: white;padding: 5px 0;display: flex;">
          <div v-for="item in products1" style="padding: 5px; width:33%;flex-wrap: wrap;">
            <img :src="item.url" style="width: 100%;height: 100px;">
            <span style="display: inline-block;font-size: 14px;">{{item.name}}</span>
          </div>
        </div>
      </div>


      <!--广告图1-->

      <div class="ggt-wraper" v-show="item.styleName=='guanggaotu1'">
        <div v-for="item in ggt1" class="ggt-wrapper-item1">
          <img :src="item.url" class="ggt-wraper-img1">
        </div>
      </div>

      <!--广告图2-->

      <div class="ggt-wraper" style="display: block;" v-show="item.styleName=='guanggaotu2'">
        <div v-for="item in ggt2" class="ggt-wrapper-item1" style="width: 100%;">
          <img :src="item.url" class="ggt-wraper-img1">
        </div>
      </div>




      <!--<div style='position: fixed;right:15px;bottom:80px;'>-->

        <div style='position: fixed; background:#ff0000;border-radius: 25px;right:10px;bottom: 140px;' v-show="item.styleName=='kefu'">
          <img :src="kfUrl" style='width:50px;height:50px'>
        </div>

        <div style='position: fixed;background:#ff0000;border-radius: 25px;right: 10px;bottom: 80px;' v-show="item.styleName=='fanhuidingbu'">
          <img :src="fhUrl" style='width:50px;height:50px'>
        </div>

      <!--</div>-->



    </div>

    </div>
  </div>



  </div>

</template>

<script type="text/ecmascript-6">

  import header from '../header.vue'
  import Banner from '../Banner.vue' //导入Banner组件
  import ProductList from '../productList/productList.vue'

  export  default {

    data(){
      return {
        uiAy:[],
        screenWidth: (document.body.clientWidth*0.25-12-20)/2.0,   // 这里是给到了一个默认值 （这个很重要）
        c3Height:(document.body.clientWidth/2*0.4),
        sWidth:document.body.clientWidth,
        arrowUrl:require('../../assets/images/sys/arrow_right.png'),
        searchUrl:require('../../assets/images/sys/f_search.png'),
        locationUrl:require('../../assets/images/sys/f_search.png'),
        kfUrl:require('../../assets/images/sys/kf.png'),
        fhUrl:require('../../assets/images/sys/kb.png'),

        listImg:[{url:require('../../assets/images/banner/01.jpg')},
          {url:require('../../assets/images/banner/01.jpg')},
          {url:require('../../assets/images/banner/01.jpg')}],

        categorys:[
          {url:require('../../assets/images/wkuaijie/k3.png'),name:'优惠券',id:'0'},
          {url:require('../../assets/images/wkuaijie/k1.png'),name:'卡券',id:'1'},
          {url:require('../../assets/images/wkuaijie/k2.png'),name:'资讯',id:'2'},
          {url:require('../../assets/images/wkuaijie/k5.png'),name:'视频',id:'3'},
          {url:require('../../assets/images/wkuaijie/k8.png'),name:'拼团',id:'4'},
          {url:require('../../assets/images/wkuaijie/k4.png'),name:'限时抢购',id:'5'},
          {url:require('../../assets/images/wkuaijie/k6.png'),name:'全部商品',id:'6'},
          {url:require('../../assets/images/wkuaijie/k7.png'),name:'全部商家',id:'7'},
        ],
        categorys1:[
          {url:require('../../assets/images/fenlei/01.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/02.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/03.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/04.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/05.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/06.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/07.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/08.png'),name:'分类名称'},
        ],
        categorys2:[
          {url:require('../../assets/images/fenlei/1.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/2.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/3.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/4.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/5.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/6.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/7.png'),name:'分类名称'},
          {url:require('../../assets/images/fenlei/8.png'),name:'分类名称'},
        ],
        categorys3:[
          {url:require('../../assets/images/fenlei/01.png'),name:'情侣戒指'},
          {url:require('../../assets/images/fenlei/02.png'),name:'手链手镯'},
          {url:require('../../assets/images/fenlei/03.png'),name:'精美项链'}
        ],
        products1:[
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只50W只能IH电饭煲美的1250W只能IH',price:'12',oldprice:'1555',num:'9'},
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只50W只能IH电饭煲美的1250W只能IH',price:'12222',oldprice:'1555',num:'999'},
          {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只能IH电饭煲美的1250W只能IH',price:'1222',oldprice:'1555',num:'999'}
        ],
        client1:[
          {url:require('../../assets/images/dpj/01.jpg'),name:'欧莱雅旗舰店'},
          {url:require('../../assets/images/dpj/02.jpg'),name:'相宜本草专卖店'},
          {url:require('../../assets/images/dpj/03.jpg'),name:'瓷肌官方网站'}
        ],
        client2:[
          {url:require('../../assets/images/dpj/7.jpg'),name:'欧莱雅旗舰店'},
          {url:require('../../assets/images/dpj/10.jpg'),name:'相宜本草专卖店'},
          {url:require('../../assets/images/dpj/2.jpg'),name:'百雀羚网站'},
          {url:require('../../assets/images/dpj/3.jpg'),name:'瓷肌官方网站'}
        ],
        client3:[
          {url:require('../../assets/images/dpj/2.jpg'),name:'欧莱雅旗舰店'},
          {url:require('../../assets/images/dpj/12.jpg'),name:'相宜本草专卖店'},
          {url:require('../../assets/images/dpj/10.jpg'),name:'百雀羚网站'},
          {url:require('../../assets/images/dpj/7.jpg'),name:'瓷肌官方网站'},
          {url:require('../../assets/images/dpj/4.jpg'),name:'欧莱雅旗舰店'},
          {url:require('../../assets/images/dpj/6.jpg'),name:'相宜本草专卖店'}
        ],
        news1:[
          {url:require('../../assets/images/zx/hot.png'),name:'家政服务行业有了地方标准'},
          {url:require('../../assets/images/zx/hot.png'),name:'进军中国家政服务行业打造最大的家政网'},
        ],
        news2:[
          {url:require('../../assets/images/zx/1.jpg'),name:'家政服务行业有了地方标准'},
          {url:require('../../assets/images/zx/2.jpg'),name:'进军中国家政服务行业打造最大的家政网'},
        ],
        news3:[
          {url:require('../../assets/images/zx/sp.png'),name:'家政服务行业有了地方标准'},
          {url:require('../../assets/images/zx/sp.png'),name:'进军中国家政服务行业打造最大的家政网'},
        ],
        ggt1:[
          {url:require('../../assets/images/ggt/01.jpg'),name:''},
          {url:require('../../assets/images/ggt/02.jpg'),name:''}
        ],
        ggt2:[
          {url:require('../../assets/images/ggt/03.jpg'),name:''},
          {url:require('../../assets/images/ggt/03.jpg'),name:''}
        ],
        yhq1:[
          {url:require('../../assets/images/yhq/01.png'),name:''}],
        yhq2:[
          {url:require('../../assets/images/yhq/02.png'),name:''}]
      }
    },
    methods:{

      jumptodetail:function (event) {
        var dic = this.categorys[event];
        console.log(dic.id)
        if(dic.id==0)
        {
          //优惠券
          this.$router.push({name:'yhqlq'});

        }
        else if(dic.id==1)
        {
          //卡券
          this.$router.push({name:'kqList'});

        }
        else if(dic.id==2)
        {
          //资讯
          this.$router.push({name:'zxList'});
        }
        else if(dic.id==3)
        {
          //视频
          this.$router.push({name:'spList'});
        }
        else if(dic.id==4)
        {
          //拼团列表
          this.$router.push({name:'ptList'});

        }
        else if(dic.id==5)
        {
          //限时抢购
          this.$router.push({name:'xsqgList'});

        }
        else if(dic.id==6)
        {
          //全部商品
          this.$router.push({name:'products',query:{index:event}});
        }
        else if(dic.id==7)
        {
          //全部商家
          this.$router.push({name:'clientList'});
        }

      },

      jumptoproducts:function (event) {
        console.log(event);
        this.$router.push({name:'products',query:{index:event}});
      },
      jumptoproductdetail:function (event) {
        console.log(event);
        var dic = this.products1[event];
        dic.type='first';
        this.$router.push({name:'productDetail',query:dic});
      }

    },
    components:{
      'm-header':header,
      'app-banner': Banner,

    },
    created(){

//        this.$http.post('http://sapp.ktcx.cn/mobile/index',
//              {'CODE':'20171013024003','CITY_ID':'370100'},
//              {emulateJSON: true}
//              ).then(response => {
//
//          console.log(response);
//
//        }, response => {
//
//        });


      console.log('windown'+window.orderNum);

//      this.$http.get('/config',
//        {},
//        {emulateJSON: true}
//      ).then(response => {
//
//
//        console.log(response.data);
//
//          this.$http.get('https://wx.go.ktcx.com.cn/diy/getAppData?orderNo='+response.data.orderNum,
//            {'orderNo':''},
//            {emulateJSON: true}
//          ).then(response => {
//
//
//            this.uiAy = response.data;
//
//            console.log(this.uiAy)
//
//          }, response => {
//
//          });
//
//      }, response => {
//
//      });

      this.$http.get('https://wx.go.ktcx.com.cn/diy/getAppData?orderNo='+window.orderNum,
        {'orderNo':''},
        {emulateJSON: true}
      ).then(response => {


        this.uiAy = response.data;


        console.log(this.uiAy)

      }, response => {

      });





    }


  };
</script>
<style rel="stylesheet/stylus">
  .all-wraper{
    background: #eeeeee;
    padding-bottom: 64px;
  }

  .category-wraper{
    display: flex;
    width: 100%;
    margin-top: 10px;
    white-space: normal;
    flex-wrap: wrap;
    background: white;
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
  .category-item3{
    width:50%;
    border-bottom: 1px solid #eeeeee;
    text-align: center;
    vertical-align: middle;
    padding: 5px;
    box-sizing: border-box;
  }

  .category-item:active{
    background: #eeeeee;
  }
  .category-item3:active{
    background: #eeeeee;
  }

  .c3z{
    width: 100%;
    flex-wrap: wrap;
    display: flex;
  }
  .category-item3:nth-child(odd){
    border-right: 1px solid #eeeeee;
  }
  .category-item3-text{
    width: 60%;
    display: inline-block;
    text-align: left;

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

  .product-wraper-item2{
    /*width: 100%;*/
    border-bottom: 1px solid #eeeeee;
    padding: 10px;
    display: flex;
  }
  .client-wrapper{
    display: flex;
  }
  .client-wrapper-item{
    /*margin: 5px;*/
    width: 16.5%;
    padding: 10px;
  }
  .ico_style1{
    display: inline-block;
    width: 14px;
    height: 14px;
    background-size: 14px 14px;
    background-repeat: no-repeat;
    background-image: url("../../assets/images/dpj/address.png");
  }

  .ico_style2{
    display: inline-block;
    width: 14px;
    height: 14px;
    background-size: 14px 14px;
    background-repeat: no-repeat;
    background-image: url("../../assets/images/dpj/tel.png");
  }


  .news-wrapper-item1{
    width: 100%;
    padding: 10px 5px;
    border-bottom: 1px solid #eeeeee;
    display: flex;
  }
  .hot-class{
    width: 20px;
    height: 20px;
  }
  .category-item4{
    width: 50%;
  }

  .ggt-wraper{
    width: 100%;
    display: flex;
  }
  .ggt-wrapper-item1{
    width: 50%;
    padding: 5px;
  }
  .ggt-wraper-img1{
    width: 100%;
  }
  .item-icon{
    display: block;
    width: 14px;
    height: 4px;
    background-size: 14px 14px;
    /*float: left;*/
  }
</style>
