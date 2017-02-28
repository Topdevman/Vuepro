<template>
  <div id="app">
    <img src="./assets/bootsImg/bootsImg@2x.png" class="img1">
    <img src="./assets/profileImg/profileImg@2x.png" class="img2">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style src="./style/my-project.sass"></style>