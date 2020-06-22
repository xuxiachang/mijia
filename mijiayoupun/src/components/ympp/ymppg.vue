<template>
  <div class="brundBox">
    <div class="header">
      <i class="iconfont icon-zuojiantou"></i>
      <span class="title">618爆款小家电正式会场</span>
    </div>
    <div class="imgBox">
      <img src="../../images/pp2.jpeg" alt />
    </div>

    <ul class="active">
      <li>
        <span>18日</span>
        <span>18:00</span>
        <span>已结束</span>
      </li>
      <li>
        <span>18日</span>
        <span>18:00</span>
        <span>已结束</span>
      </li>
      <li>
        <span>18日</span>
        <span>18:00</span>
        <span>已结束</span>
      </li>
      <li>
        <span>18日</span>
        <span>18:00</span>
        <span>已结束</span>
      </li>
      <li>
        <span>18日</span>
        <span>18:00</span>
        <span>已结束</span>
      </li>
    </ul>

    <div class="listBox">
      <div class="coupon">
        <div class="price">
          <p>400元</p>
          <p class="til">仅限6.1-6.18使用，不包含限时购其他特殊商品</p>
        </div>
        <span>已结束</span>
      </div>
      <div class="coupon">
        <div class="price">
          <p>400元</p>
          <p class="til">仅限6.1-6.18使用，不包含限时购其他特殊商品</p>
        </div>
        <span>已结束</span>
      </div>
    </div>

    <nav class="navBox">
      <div>
        <router-link to="/youpin618">
          <img src="../../images/brund23.png" alt />
          <p>主会场</p>
        </router-link>
      </div>
      <div>
        <router-link to="/youpin618">
          <img src="../../images/brund23.png" alt />
          <p>全部会场</p>
        </router-link>
      </div>
      <div>
        <router-link to="/youpin618">
          <img src="../../images/brund23.png" alt />
          <p>超级直播</p>
        </router-link>
      </div>
      <div>
        <router-link to="/youpin618">
          <img src="../../images/brund23.png" alt />
          <p>万件减免</p>
        </router-link>
      </div>
      <div>
        <router-link to="/youpin618">
          <img src="../../images/brund23.png" alt />
          <p>我的</p>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.brundBox {
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    .icon-zuojiantou {
      font-size: 0.8rem;
    }
    .title {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      display: block;
      font-size: 0.4rem;
      text-align: center;
      background: #ffffff;
    }
  }
  .imgBox {
    width: 100%;
    width: 7.5rem;
    img {
      width: 100%;
      width: 100%;
    }
  }

  .active {
    display: flex;
    justify-content: space-evenly;
    background: rgb(167, 35, 156);
    height: 1.2rem;
    margin-top: -0.3rem;
    li {
      width: 0.75rem;
      height: 0.5rem;
      font-size: 0.2rem;
      text-align: center;
      margin: 0.2rem 0;
      color: white;
      span {
        border-radius: 0.5rem;
        padding: 0.1rem 0.03rem;
      }
    }
  }

  .navBox {
    width: 100%;
    position: fixed;
    bottom: 0;
    font-size: 0.25rem;
    padding-top: 0.2rem;
    background-color: lightgray;
    display: flex;
    justify-content: space-evenly;
    div {
      margin: 0 0 0.2rem 0;
      img {
        width: 0.5rem;
        height: 0.5rem;
        margin-left: 0.1rem;
      }
      p {
        text-align: center;
      }
    }
  }

  .listBox {
    height: 7.5rem;
    background: rgb(167, 35, 156);
    .coupon {
      display: flex;
      justify-content: space-between;
      font-size: 0.4rem;
      background-color: rgb(253, 248, 192);
      margin: 0.2rem 0.2rem;
      height: 1.5rem;
      border-radius: 0.04rem;
      p {
        width: 5.5rem;
        // background-color: darkseagreen;
        font-size: 0.7rem;
        margin: 0.2rem 0 0 0.3rem;
        color: rgb(217, 65, 49);
      }
      .til {
        font-size: 0.25rem;
        margin: 0 0.2rem;
        color: rgba(51, 51, 51, 0.7);
      }
      span {
        height: 0.2rem;
        width: 1.2rem;
        display: block;
        font-size: 0.3rem;
        margin: 0.5rem 0;
        padding: 0.2rem 0.15rem;
        background: rgb(183, 181, 164);
        line-height: 0.2rem;
        border-radius: 0.4rem;
        color: #ffffff;
      }
    }
  }
}
</style>

