<template>
  <div id="app">
    <ul>
      <li><router-link tag="a" :to="{ name: 'Home'}">Home</router-link></li>
      <li><router-link tag="a" :to="{ name: 'Posts'}">Posts</router-link></li>
    </ul>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
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
