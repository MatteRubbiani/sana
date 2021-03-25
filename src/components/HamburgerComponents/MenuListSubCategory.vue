<template>
<div class="main-sub-category__panel" :class="{'hidden':open}">
  <p>{{subCategory.name}}</p>
</div>
</template>

<script>
export default {
name: "MenuListSubCategory",
  props:{
    subCategory: Object,
    open: Boolean
  },

}
</script>

<style scoped lang="scss">
.main-sub-category__panel{
  position: relative;
  color: gray;
  text-align: left;
  font-size: 30px;

  &.hidden{
    display: none;
  }

  p{
    padding-left: 30%;
  }
}
</style>