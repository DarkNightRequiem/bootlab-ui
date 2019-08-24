<template>
  <div id="main-container" class="container">
    <div class="jumbotron"
         style="height: 95%; margin-top: 2%;position: relative;background-color: rgba(255,248,220,0.09);border:10px solid #1b0814;">
      <h1>Welcome to BootLab</h1>

      <div style="margin-top: 10%">
        <img v-bind:src="logo">
      </div>

      <div class="btn-toolbar" style="margin-top: 10%; padding:0; width: 100%;">
        <div class="btn-group">
          <button type="button" class="btn btn-outline-danger" v-on:click="jumpToPomdpSalClick">PomdpSal</button>
          <button type="button" class="btn btn-outline-success" >新闻推送程序</button>
          <button type="button" class="btn btn-outline-dark"> 宠物租赁电商</button>
          <button id="sblearn" type="button" class="btn btn-outline-primary" onclick=sblearnOnClick()>Spring Boot 案例学习
          </button>
        </div>

        <div class="btn-group">
          <a class="btn btn-primary" href="#" role="button">Learn more</a>
        </div>
      </div>

    </div>

    <MyFooter></MyFooter>
  </div>
</template>

<script>
  // 导入其他资源
  import logo from '../assets/boot-lab.png'

  // 导入其他vue组件
  import MyFooter from './common/MyFooter'

  export default {
    name: 'Welcome',
    data() {
      return {
        logo: logo
      }
    },
    components: {
      MyFooter
    },
    methods: {
      jumpToPomdpSalClick: function () {
        this.$router.push({path:'/ps'})
      }
    }
  }
</script>

<style scoped>

</style>
