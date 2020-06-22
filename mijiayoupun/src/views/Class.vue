<template>
  <div class="classBox">
    <div class="search">
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search"></el-input>
    </div>

    <div class="navBox">
      <ul>
        <li>
          <router-link to>
            <p>有品推荐</p>
          </router-link>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style lang="less" scoped>
.classBox {
  width: 100%;
  height: 1.5rem;
  background-color: gainsboro;
  .search {
    width: 7rem;
    line-height: 1rem;
    box-sizing: border-box;
    margin: 0 0.2rem;
  }
}
</style>