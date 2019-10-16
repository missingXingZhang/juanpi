<template>
  <div class="footer">
      <div class="card active" >
          <span >
						<img src="https://s1.juancdn.com/bao/171127/7/0/5a1bce9f8150a16b8658e657_72x72.png" alt="">
					</span>
          <span>首页</span>
      </div>
      <div class="card">
          <span>
						<img src="https://s1.juancdn.com/bao/171127/9/6/5a1bcef08150a176c87f92be_72x72.png" alt="">
					</span>
          <span >分类</span>
      </div>
      <div class="card">
          <span>
						<img src="https://s1.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png" alt="">
					</span>
          <span >购物车</span>
      </div>
      <div class="card">
          <span>
						<img src="https://s1.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png" alt="">
					</span>
          <span >我的卷皮</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.footer
	width 100%
	height 50px
	background-color #eee
	position absolute
	bottom 0
	left 0
	display flex
	.card
		width 25%
		height 100%
		font-size 12px
		text-align center
		line-height 50px
		display flex
		flex-direction column
		justify-content center
		color black
		&.active
				color #dd2727
		span 
			margin-top -10px
			width 100%
			height 50%
		img 
			width 20px
			height 20px


</style>