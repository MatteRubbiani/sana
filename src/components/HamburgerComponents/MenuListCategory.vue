<template>
<div class="main-panel-category" @click="changeStatus">
  <div class="category_info_container">
    <p>{{category.name}}</p>
    <img src="@/assets/right_arrow.png" :class="{'rotated': open}">
  </div>
  <MenuListSubCategory v-for="sub in subCategories" :key="sub" :subCategory="sub" :open="!open"></MenuListSubCategory>
</div>
</template>

<script>
import MenuListSubCategory from "./MenuListSubCategory";
export default {
  name: "MenuListComponent",
  components: {MenuListSubCategory},
  props:{
    category: Object
  },
  data: function (){
    return {
      subCategories: this.category.subCategories,
      open: false
    }
  },
  methods: {
    changeStatus(){
      this.open = ! this.open
    }
  }
}
</script>

<style scoped lang="scss">

.main-panel-category{
  .category_info_container{
    position: relative;
    text-align: left;
    padding-left: 10%;
    font-size: 35px;
    vertical-align: center;
    display: flex;
    flex-flow: row;

    img{
      margin: auto;
      width: 30px;
      height: 30px;

      &.rotated{
        transform: rotate(90deg);
      }
    }
  }


}

</style>