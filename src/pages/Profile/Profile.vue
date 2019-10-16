<template>
  <div id="profileContainer">
    <!-- 上方红色区域 -->
    <div class="profileHeader">
      <!-- 顶部 -->
      <div class="profileHeader-user">
        <span class='out-left iconfont icon-return'></span>
        <span>个人中心</span>
        <span class="our-right">退出</span>
      </div>
      <!-- 登录 -->
      <div class="profileHeader-login">
        <a href="javascript:;">注册</a>
        <span class="line"></span>
        <a href="javascript:;" @click="$router.replace('/login')">登录</a>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="profileBody">
      <!-- 我的订单 -->
      <a class="order" href="javascript:;">
        <span class="myOrder">我的订单</span>
        <span class="allOrder">全部订单</span>
      </a>
      <!-- 4个导航 -->
      <div class="naveItem">
        <a href="javascript:;">
          <em class="iconfont icon-daifukuan"></em>
          <span>待付款</span>
        </a>
        <a href="javascript:;">
          <em class="iconfont icon-daichengtuan"></em>
          <span>待成团</span>
        </a>
        <a href="javascript:;">
          <em class="iconfont icon-daishouhuo"></em>
          <span>待收货</span>
        </a>
        <a href="javascript:;">
          <em class="iconfont icon-tuikuanshouhou"></em>
          <span>退款/售后</span>
        </a>
      </div>
      <!--  分割线  -->
      <hr />
      <!-- 长导航 -->
      <div class="profileList">
        <a href="javascript:;">我的优惠券</a>
        <a href="javascript:;">我的收藏</a>
        <a href="javascript:;">我的拼团</a>
        <a href="javascript:;">
          <span>我的免单券</span>
          <span class="itemRight">0张</span>
        </a>
        <a href="javascript:;">
          <span>借钱</span>
          <span class="itemRight">新用户免费领1000元</span>
        </a>
        <a href="javascript:;">
          <span>余额</span>
          <span class="itemRight">0.00元</span>
        </a>
      </div>
      <hr />
      <!-- 客服中心和关于卷皮 -->
      <div class="profileFoot">
        <a href="javascript:;">客服中心</a>
        <a href="javascript:;">关于卷皮</a>
      </div>
      <hr />
    </div>
    <!-- 底部导航 -->
    <div class="foot-nav">
      <a href="javascript:;">返回首页</a>
      <a href="javascript:;">客户端</a>
      <a href="javascript:;">电脑版</a>
    </div>
    <!-- 底部导航栏Tab -->
      <Footer />
  </div>
</template>
<script>
// 引入Footer组件
import Footer from '../../components/Footer/Footer.vue'
export default {
  // 注册组件
  components:{
    Footer
  }
}
</script>
<style lang='stylus'	rel='stylesheet/stylus' scoped>
@import './images/iconfont/iconfont.css'
a 
  color black
#profileContainer
  width 100%
  height 100%
  .profileHeader 
    width 100%
    height 2.88rem
    background-image url('./images/user_center_bg.png')
    .profileHeader-user
      width 100%
      height 0.88rem
      display flex
      justify-content space-between
      color white
      text-align center
      line-height 0.88rem
      .out-left
        margin-left 0.28rem
        img
          width 0.5rem
      .our-right
        margin-right 0.28rem
      span 
        font-size 0.36rem
    .profileHeader-login
      width 100%
      height 2rem
      font-size 0.4rem
      text-align center
      line-height 2rem
      position relative
      a
        text-decoration none 
        color white
        padding 0 0.96rem
      .line
        position absolute 
        left 50%
        top 50%
        width 0.02rem
        height 0.4rem
        background-color white
        transform translateY(-50%)
  .profileBody
    width 100%
    .order
      width 90%
      height 0.96rem
      display block
      margin 0 auto
      font-size 0.3rem
      color black
      border-bottom 0.001rem solid #cccccc
      line-height 0.96rem
      padding 0 0.1rem
      .allOrder
        float right
        font-size 0.28rem
        color rgb(153,153,153)
    .naveItem
      width 100%
      display flex
      padding 0.3rem 0 0.24rem 0
      a
        flex 1
        display flex
        flex-direction column
        color #666666
        justify-content center
        align-items center
        em
          font-size 0.56rem
        span 
          margin-top 0.1rem
          font-size 0.24rem
    hr
      height 0.2rem
      background-color #f4f4f8
      border none
    .profileList
      width 90%
      margin 0 auto
      a 
        display block
        height 0.96rem
        line-height 0.96rem
        font-size 0.30rem
        border-bottom 0.01rem solid #cccccc
        .itemRight
          float right
          color #999
          font-size 0.28rem
    .profileFoot
      width 90%
      margin 0 auto
      a 
        display block
        height 0.96rem
        line-height 0.96rem
        font-size 0.30rem
        border-bottom 0.01rem solid #cccccc
  .foot-nav
    width 100%
    padding 0 0 1.1rem 0
    display flex
    text-align center

    a
      font-size 0.24rem
      flex 1
      color #666
</style>