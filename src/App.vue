<template>

  <div id="app">
    <div class="layout">
      <div class="content">
        <div class="content-left">
          <div class="logo">
            I am like a drop in the ocean.
          </div>
          <mu-list @change="handleListChange" :value="activeList">
            <mu-list-item title="Intro" value="list1" >
              
            </mu-list-item>
            <mu-list-item title="Articles" value="list2">
              
            </mu-list-item>
          </mu-list>
        </div>

        <div class="content-right">
          <img src="./assets/Manhattan_Skyline_night.jpg">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" color="0,0,255" opacity='0.8' zIndex="-2" count="99" src="./js/canvas-nest.js">

export default {
  data () {
    return {
      activeList: 'list1'
    }
  },
  methods: {
    handleListChange (val) {
      this.activeList = val
    }
  },
  name: 'app'
}
</script>

<style scoped>

.logo{
  font-size: 24px;
  color: black;
  text-align: center;
  padding: 10px 20px;
}

.content{
  overflow: hidden;
}

.content-left{
  width: 30%;
  float: left;
  margin-bottom: -4000px;
  padding-bottom: 4000px;
  padding-left: 100px;
}

.content-right{
  width: 70%;
  display: inline-block;
  float: right;
}

.header{
  background-color: white;
  height: 40px;
}

.body{
  min-height: 500px;
  background-color: white;
  margin: 10px 20px;
}

.footer{
  padding: 10px 0;
  text-align: center;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
