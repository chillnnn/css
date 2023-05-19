<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <div class="app-breadcrumb">
      江苏传智播客教育科技股份有限公司
      <span class="breadBtn">体验版</span>
    </div>

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img v-imgUrl="defaultImg" src="@/assets/common/bigUserHeader.png" class="user-avatar">
          <span class="name">{{ name }}</span>
          <i class="el-icon-caret-bottom" style="color:#fff" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              主页
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>项目地址</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

// import { userInfo } from '@/api/user'
// import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {

    Hamburger
  },
  data() {
    return {
      userName: '',
      defaultImg: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&hs=0&pn=0&spn=0&di=7214885350303334401&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=4219168975%2C3201797297&os=4210309995%2C3248724412&simid=4219168975%2C3201797297&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=%E5%9B%BE%E7%89%87&objurl=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F210916%2F3-210916110348.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B1wt42_z%26e3Bv54AzdH3Fri5p5AzdH3Fdad8alAzdH3Fri5p5_d8adm0_z%26e3Bip4s&gsm=&islist=&querylist=&dyTabStr=MCwzLDEsNiw0LDIsNSw3LDgsOQ%3D%3D'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'name'
    ])
  },
  created() {
    this.userInfoA()
  },
  methods: {

    ...mapActions('user', ['userInfoA', 'clearInfo']),
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },

    // async logout() {
    //   await this.$store.dispatch('user/logout')
    //   this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    // },
    async logout() {
      // 清除vuex和cooies的token
      await this.$store.dispatch('user/clearInfo')
      // 清除用户信息
      this.$router.push('/login')
      // 跳转路由
    }
    // userApi() {
    //   userInfo().then(res => {
    //     // console.log(res)
    //     this.userName = res.data.data.username
    //   })
    // }
  }

}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: bisque;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .app-breadcrumb {
    display: inline-block;
    font-size: 18px;
    line-height: 50px;
    margin-left: 10px;
    color: blue;
    cursor: text;
    .breadBtn {
      background: #84a9fe;
      font-size: 14px;
      padding: 0 10px;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      border-radius: 10px;
      margin-left: 15px;
    }
  }

  .avatar-wrapper {
    position: relative;

    .user-avatar {
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      vertical-align: middle;
    }
    .name {
      cursor: pointer;
      color: #fff;
      vertical-align: middle;
      margin-left:5px;
    }
    .user-dropdown {
      color: #fff;
    }

    .el-icon-caret-bottom {
      cursor: pointer;
      position: absolute;
      right: -20px;
      top: 20px;
      font-size: 12px;
    }
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }

      }
    }
  }
}
</style>
