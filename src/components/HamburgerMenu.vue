<template>
<div class="main-hamburger-panel" :class="{'hidden': !show}">
  <div class="hamburger-icon" @click="toggleMenu">
    <img src="@/assets/hamburger.png">
  </div>
  <div class="main-hamburger-menu">
<MenuListContainer></MenuListContainer>
  </div>
</div>
</template>

<script>
import MenuListContainer from "./HamburgerComponents/MenuListContainer";
export default {
  name: "HamburgerMenu",
  components: {MenuListContainer},
  props: {
  },
  methods: {
    toggleMenu(){
      this.show = !this.show
    }
  },
  data: function(){
    return {
      show: false
    }
}
}
</script>

<style scoped lang="scss">

.main-hamburger-panel{
  //lo nascondo fino a ulteriori disosozioni
  display: none;
  transition: all 0.5s;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 25vw;
  background-color: #f8f8f8;
  z-index: 5;
  @media (max-width: 500px) {
    width: 70% !important;
  }
  @media (max-width: 700px) {
    width: 40%;
  }

  &.hidden{
    transform: translateX(-100%);
  }

 .hamburger-icon{
   position: absolute;
   width: 25px;
   height: min-content;
   right: calc(-10% - 20px);
   top: 30px;

   img{
     width: 100%;
   }
 }

  .main-hamburger-menu{
    width: 80%;

  }
}

</style>