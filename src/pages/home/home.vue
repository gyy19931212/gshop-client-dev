<template>
  <div class="home">
    <!-- 顶部 -->
    <header-view :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" to="/login">
        <span class="header_login_text">
          登录|注册
        </span>
      </router-link>
    </header-view>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
          <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
            <div class="food_container">
              <img :src="baseImageUrl+category.image_url">
            </div>
            <span>{{category.title}}</span>
          </a>
        </div>

      </div>
    </div>

    <!-- 列表 头-->
    <div class="list-title">
      <i> </i>
      <span> 附近商家</span>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  import HeaderView from '../../components/headerView/headerView.vue'

  export default {
    name: 'home',
    data () {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted () {
      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')
    },
    computed: {
      ...mapState(['address', 'userInfo', 'categorys']),

      /*
      根据categorys一维数组生成一个2维数组
      小数组中的元素个数最大是8
       */
      categorysArr () {
        const {categorys} = this
        // 准备空的2维数组
        const arr = []
        // 准备一个小数组(最大长度为8)
        let minArr = []
        // 遍历categorys
        categorys.forEach(c => {
          // 如果当前小数组已经满了, 创建一个新的
          if (minArr.length === 8) {
            minArr = []
          }
          // 如果minArr是空的, 将小数组保存到大数组中
          if (minArr.length === 0) {
            arr.push(minArr)
          }
          // 将当前分类保存到小数组中
          minArr.push(c)
        })

        return arr
      }
    },
    watch: {
      categorys (value) { // categorys数组中有数据了, 在异步更新界面之前执行
        // 界面更新就立即创建Swiper对象
        this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })

          // new BScroll('.miste-content-wrapper', {
          //   click: true
          // })

        })

      }
    },

    components: {
      HeaderView
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .home {
    width 100%
    height 100%
    display flex
    position relative
    flex-direction column
    .swiper-container {
      top $header
      position absolute
      width 100%
      height: 220px
      background-color aqua
      .swiper-wrapper {
        width 100%
        height 100%
        .swiper-slide {
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food {
            width 25%
            text-align center
            .food_container {
              width 100%
              padding-top 10px
              font-size 0
              img {
                width 50px
                height 50px
              }
            }
            .span {
              width 100%
              font-size 13px
              color #666
            }
          }

        }
      }

    }
    .list-title {
      position absolute
      top $header + $header_banner
      background-color red
    }
  }


</style>
