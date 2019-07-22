<template>
  <div>
    <div class="toolbar">
      <div class="search-anchor">
        搜索您喜欢的活动
      </div>
      <div class="filter-text-btn">
        筛选
      </div>
    </div>
    <div class="content">
      <router-link :to="{name:'activityDetail'}">
        <ActivityItem v-for="(item,index) in list" />
      </router-link>

    </div>

  </div>
</template>

<script>
import ActivityItem from "_c/ActivityItem";
export default {
  name: "ActivityPage",
  components: {
    ActivityItem
  },
  data: () => ({
    list: [1, 2, 3, 4, 5, 6]
  })
};
</script>

<style lang="scss" scoped>
.content {
  padding-top: 40px;
  padding-bottom: 50px;
}
.toolbar {
  box-sizing: border-box;
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: #ff7b33;
  box-shadow: 0 1px 6px #ccc;
}
.search-anchor {
  background-color: #fff;
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 12px;
  border-radius: 20px;
  padding-left: 20px;
  color: #999;
}
.filter-text-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 8px;
  color: #fff;
  font-size: 14px;
}
</style>
