<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@font-face {
  font-family: Staatliches-Regular;
  src: local("IndieFlower-Regular"), url(./fonts/Staatliches-Regular.ttf) format("truetype");
}
#app{
  width: 100%;
  height: 100%;
  font-family: Staatliches-Regular, sans-serif;
  font-size: 150%;
}
</style>
