<!--  -->
<template>
  <div class="home">
    <!-- 头部组件 -->
    <Header>
      <div slot="header">首页</div>
    </Header>
    <div class="home_header">
      <!-- 输入框 -->
      <input type="text" class="input" placeholder="请输入你要搜索的内容">

      <!-- 轮播图 -->
      <div class="swiper">
        <mt-swipe :show-indicators="false">
          <mt-swipe-item>
            <img
              src="https://goods2.juancdn.com/jas/191014/3/f/5da4409533b0896c6d3ea030_1080x418.png"
              alt
            />
          </mt-swipe-item>
          <mt-swipe-item>
            <img
              src="https://goods5.juancdn.com/jas/190422/8/2/5cbd6608b6f8ea54ff237631_1080x418.png"
              alt
            />
          </mt-swipe-item>
          <mt-swipe-item>
            <img
              src="https://goods1.juancdn.com/jas/191012/0/a/5da18d7a33b0896b827995f0_1080x418.png"
              alt
            />
          </mt-swipe-item>
          <mt-swipe-item>
            <img
              src="https://goods5.juancdn.com/jas/190422/8/2/5cbd6608b6f8ea54ff237631_1080x418.png"
              alt
            />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 四个图标 -->
      <div class="fourIcon">
          <div class="card">
            <img src="https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png" alt="">
          </div>
          <div class="card">
            <img src="https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png" alt="">
          </div>
          <div class="card">
            <img src="https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png" alt="">
          </div>
          <div class="card">
            <img src="https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png" alt="">
          </div>
      </div>

      <!-- 广告 -->
      <div class="gif">
        <img src="https://s2.juancdn.com/jas/191016/6/5/5da66e8033b08907220939d7_1080x364.gif" alt="">
      </div>
      <div class="adv">
        <img src="https://goods3.juancdn.com/jas/191015/5/6/5da5206733b089744d37c879_540x328.png" alt="">
        <img src="https://goods8.juancdn.com/jas/191012/f/3/5da1a64cb6f8ea5ae07d7429_540x328.png" alt="">
      </div>

      <!--底部  -->
    <Footer/>
    </div>


  </div>
</template>

<script>
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  },
  computed: {},

  methods: {},

  mounted() {}
};
</script>
<style lang="stylus" scoped>
.home
  width 100%
  .home_header
    width 100%
    height 160px
    .input
      width 90%
      height 30px
      background-color #f2f2f2
      outline none
      margin 10px 
      border-radius 6px 
    .swiper
      width 100%
      height 100%
      img
        width 100%
        height 100%
    .fourIcon
      width 100%
      height 90px
      display flex
      .card 
        width 25%
        height 100%
        img 
          width 100%
          height 100%
    .gif
      width 100%
      height 150px
      img 
        width 100%
        height 100%
    .adv
      width 100%
      height 100px
      display flex
      img 
        width 50%
        height 100%
</style>