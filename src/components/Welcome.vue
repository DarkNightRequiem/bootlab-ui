<template>
  <div id="main-container" class="container" >
    <div class="jumbotron" style="height: 95%; margin-top: 2%;position: relative">
      <h1>Welcome to BootLab</h1>

      <div style="margin-top: 10%">
        <img src={{imgUrl}}>
      </div>

      <div class="btn-toolbar"  style="margin-top: 10%; padding:0; width: 100%;">
        <div class="btn-group">
          <button type="button" class="btn btn-danger">按钮 1</button>
          <button type="button" class="btn btn-warning" onclick="newsAppONClick()">简单新闻推荐程序</button>
          <button id="sblearn" type="button" class="btn btn-success" onclick=sblearnOnClick()>Spring Boot 案例学习</button>
        </div>
        <div class="btn-group">
          <a class="btn btn-primary" href="#" role="button">Learn more</a>
        </div>
      </div>

      <div style="bottom: 0;position: absolute;width: 100%;left: 0">
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: 'Welcome',
      data(){
          return{
            imgUrl:'./assets/boot-lab.png'
          }
      }
    }
</script>

<style scoped>

</style>
