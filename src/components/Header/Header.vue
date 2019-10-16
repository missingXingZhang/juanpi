<template>
  <div class="header">
      <slot name="header" class="header_name"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.header
    width 100%
    height 50px
    background-color #dd2727
    text-align center
    line-height 50px
    color white
    font-size 20px
</style>