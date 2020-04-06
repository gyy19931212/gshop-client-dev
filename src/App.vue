<template>
  <div id="app">
    <router-view/>
    <FooterView/>
  </div>
</template>


<script>
  import {mapActions} from 'vuex'
  import FooterView from './components/footerView/footerView.vue'

  export default {
    name: 'app',
    mounted() {
      //获取用户信息，获取地址
      this.getAddress()
      this.getUserInfo()
    },
    methods: {
      ...mapActions(['getAddress','getUserInfo'])
    },
  components: {
    FooterView
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
