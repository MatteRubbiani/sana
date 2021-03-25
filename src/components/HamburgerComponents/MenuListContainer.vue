<template>
<div>
  <MenuListComponent v-for="category in allCategories" :key="category" :category="category"></MenuListComponent>
</div>
</template>

<script>
import MenuListComponent from "./MenuListCategory";
import allCategories from "../../constants/allCategories";

export default {
  name: "MenuListContainer",
  components: {
    MenuListComponent
  },
  data: function (){
    return {
      allCategories: allCategories
    }
  }
}
</script>

<style scoped>

</style>