<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from "./components/FooterGuide/FooterGuide";

export default {
  name: 'App',

  mounted() {
    //法一
    // this.$store.dispatch('getAddress')
    //法二
    this.getAddress()
  },

  methods:{
    ...mapActions(['getAddress'])
  },

  components:{
    FooterGuide
  },
  created () {
    // 异步获取 address
    this.$store.dispatch('getAddress')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
</style>
