<template>
  <div id="app">
    <img src="./assets/boot-lab.png">
    <router-view/>
  </div>
</template>

<script>
  import Footer from './components/footer'
  export default {
    name: 'App',
    data(){
      return{
        footer_show:true,
      }
    },
    comments:{
      'app-footer':Footer,
    },
    methods:{
      // 是否显示底部
      footer:function(bool){
        this.footer_show=bool;
      }
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
