<template>
  <div class="main-header-panel">
    <img src="@/assets/title.png">
    <h3>CALZATURA COMODA</h3>
  </div>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped lang="scss">
@import "../styles/global";
.main-header-panel{
  position: relative;
  top: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  text-align: center;
  z-index: 2;
  background-color: white;
  img{
    margin-top: 8px;
    width: calc(50% + 10px);
  }
  h3{
    color: black;
    @media (max-width: 700px) {
      font-size: 15px;
    }
  }
}

</style>