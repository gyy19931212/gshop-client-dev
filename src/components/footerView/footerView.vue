<template>
  <div class="footer-view">
      <span class="footer-item" :class="{on:'/home' === $route.path}" @click="goto('/home')">
        <i class="iconfont icon-waimai"></i>
        <span class="icon-test"> 首页</span>
      </span>

    <span class="footer-item" :class="{on:'/search' === $route.path}" @click="goto('/search')">
        <i class="iconfont icon-search"></i>
        <span class="icon-test"> 搜索</span>
      </span>

    <span class="footer-item" :class="{on:'/order' === $route.path}" @click="goto('/order')">
        <i class="iconfont icon-dingdan"></i>
        <span class="icon-test"> 订单</span>
      </span>

    <span class="footer-item" :class="{on:'/mine' === $route.path}" @click="goto('/mine')">
        <i class="iconfont icon-geren"></i>
        <span class="icon-test"> 我的</span>
      </span>

  </div>
</template>

<script>
  export default {
    name: 'footerView',

    data () {
      return {}
    },
    methods: {
      goto(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .footer-view {
    height 55px
    position  fixed
    left 0
    right 0
    bottom 0
    display flex
    align-items center
    color #999999
    .on {
      color $green
    }
    .footer-item {
      flex 1
      display flex
      flex-direction column
      align-items center
      font-size 14px
      .icon-test {
        margin-top 5px
      }
    }
  }
</style>
