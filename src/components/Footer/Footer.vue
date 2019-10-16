<template>
  <div class="footer">
      <div class="card" @click="goto(0)" :class="selected === 0?'active':''"> 
          <span>
						<img :src="selected===0?'https://s1.juancdn.com/bao/171127/7/0/5a1bce9f8150a16b8658e657_72x72.png':'https://goods4.juancdn.com/bao/171127/6/0/5a1bce9a8150a16b4e766a8d_72x72.png'" alt="">
					</span>
          <span>首页</span>
      </div>
      <div class="card" @click="goto(1)" :class="selected === 1?'active':''">
          <span>
						<img :src="selected === 1?'https://goods7.juancdn.com/bao/171127/c/3/5a1bcef5a9fcf842f140cb1d_72x72.png':'https://s1.juancdn.com/bao/171127/9/6/5a1bcef08150a176c87f92be_72x72.png'" alt="">
					</span>
          <span >分类</span>
      </div>
      <div class="card" @click="goto(2)" :class="selected === 2?'active':''">
          <span>
						<img :src="selected === 2?'https://s1.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png':'https://s1.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png'" alt="">
					</span>
          <span >购物车</span>
      </div>
      <div class="card" @click="goto(3)" :class="selected === 3?'active':''">
          <span>
						<img :src="selected === 3?'https://goods1.juancdn.com/bao/170411/0/d/58ecaec6a43d1f5e7a188a96_72x72.png':'https://s1.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png'" alt="">
					</span>
          <span >我的卷皮</span>
      </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			selected:0
		}
	},
	methods: {
		goto(index){
			console.log(index)
			this.selected = index
		}
	}

}
</script>

<style lang="stylus" scoped>
.footer
	width 100%
	height 1rem
	background-color #fff
	position fixed
	bottom 0
	left 0
	display flex
	.card
		width 25%
		height 100%
		font-size 0.24rem
		text-align center
		line-height 1rem
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
			width 0.4rem
			height 0.4rem
</style>