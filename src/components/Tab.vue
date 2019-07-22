<template>

  <van-tabbar :route="route">

    <van-tabbar-item
      name="activity"
      icon="home-o"
      :replace="replace"
      to="/"
    >发现</van-tabbar-item>
    <van-tabbar-item
      icon="search"
      to="/mySignup"
      :replace="replace"
    >我的活动</van-tabbar-item>
    <!-- <van-tabbar-item
      icon="setting-o"
      :to="{name:'my'}"
    >我的</van-tabbar-item> -->
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem, Icon } from "vant";
export default {
  name: "Tab",
  data: () => ({
    route: true,
    replace: true
  }),
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
  }
};
</script>

<style scoped>
</style>
