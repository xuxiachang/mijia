<template>
  <div class="home">
    <!-- 搜索框 -->
    <header class="headerBox">
      <img src="../images/logotitle.png" alt />
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="content"></el-input>
    </header>
    <!-- 轮播图 -->
    <main class="mainBox">
      <el-carousel :interval="2000" arrow="never">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </main>

    <!-- 推荐内容 -->
    <div class="container">
      
      <div class="listBox">
        <ul>
          <li>
            <img src="../images/icon4.png" alt />
            <p>每日上新</p>
          </li>
          <li>
            <img src="../images/icon5.png" alt />
            <p>每日上新</p>
          </li>
          <li>
            <img src="../images/icon.png" alt />
            <p>每日上新</p>
          </li>
          <li>
            <img src="../images/icon8.png" alt />
            <p>每日上新</p>
          </li>
          <li>
            <img src="../images/icon4.png" alt />
            <p>每日上新</p>
          </li>
          <li>
            <img src="../images/icon8.png" alt />
            <p>每日上新</p>
          </li>
          <li>
            <img src="../images/icon11.png" alt />
            <p>每日上新</p>
          </li>
          <li>
            <img src="../images/icon4.png" alt />
            <p>每日上新</p>
          </li>
          <li>
            <img src="../images/icon4.png" alt />
            <p>每日上新</p>
          </li>
          <li>
            <img src="../images/icon4.png" alt />
            <p>每日上新</p>
          </li>
        </ul>
      </div>

      <div class="ingB">
        <div class="imgBox">
          <router-link to="/user">
            <img src="../images/icon9.png" alt />
          </router-link>
        </div>
        <div class="imgBox">
          <router-link to="/user">
            <img src="../images/s.png" alt />
          </router-link>
        </div>
      </div>

      <div class="imgsBox">
        <div>
          <router-link to="/brand">
            <img src="../images/d8.png" alt />
          </router-link>
        </div>
        <div>
          <router-link to="/brand">
            <img src="../images/d8.png" alt />
          </router-link>
        </div>
        <div>
          <router-link to>
            <img src="../images/d8.png" alt />
          </router-link>
        </div>
      </div>
    </div>

    <!-- 底部导航 -->
    <nav class="navBox">
      <div>
        <router-link to="/home">
          <i class="iconfont icon-shouye shouye"></i>
          <p>首页</p>
        </router-link>
      </div>
      <div>
        <router-link to="/class">
          <i class="iconfont icon-fenlei fenlei"></i>
          <p>分类</p>
        </router-link>
      </div>
      <div>
        <router-link to="/goodCar">
          <i class="iconfont icon-gouwuche gouwuche"></i>
          <p>购物车</p>
        </router-link>
      </div>
      <div>
        <router-link to="/user">
          <i class="iconfont icon-geren geren"></i>
          <p>个人</p>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      content: ""
    };
  }
};
</script>



<style lang="less" scoped>
.home {
  .headerBox {
    display: flex;
    background: #845d32;
    padding: 0 0.3rem;
    height: 1rem;
    img {
      padding: 0.2rem 0;
      width: 0.7rem;
    }
    .el-input {
      margin: 0.1rem 0 0 0.1rem;
      border-radius: 0.4rem;
      border-radius: 1rem;
    }
  }
  .mainBox {
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background: url("../images/logo.gif");
    }

    .el-carousel__item:nth-child(2n + 1) {
      background: url("../images/df3.jpg");
    }
  }

  .container {
    .listBox {
      height: 3rem;
      background-color: paleturquoise;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      ul {
        list-style: none;

        li {
          display: inline-block;
          margin: -6rem 0 0 0.1rem;
          img {
            width: 1rem;
            height: 1rem;
            margin: -0.6rem 0.2rem;
          }
          p {
            font-size: 0.2rem;
            padding: -0.8rem 0 0 0.5rem;
          }
        }
      }
    }

    .ingB {
      display: flex;
      .imgBox {
        width: 3.75rem;
        height: 2rem;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }

    .imgsBox {
      display: flex;
      justify-content: space-evenly;
      div {
        width: 2.15rem;
        height: 2.4rem;
        padding: 0.1rem 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .navBox {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    font-size: 0.2rem;
    padding-top: 0.2rem;
    background-color: lightgray;
    div {
      margin: 0.2rem 0.7rem;
      i {
        font-size: 0.4rem;
        text-align: center;
      }
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
