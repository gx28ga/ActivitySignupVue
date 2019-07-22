<template>
  <div>
    <router-view />
    <Tab />
  </div>
</template>

<script>
import Tab from "_c/Tab";
export default {
  name: "index",
  components: {
    Tab
  }
};
</script>

<style>
</style>
