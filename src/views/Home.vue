<template>
  <div>
    <Header></Header>
    <HamburgerMenu></HamburgerMenu>
    <IntrosContainer></IntrosContainer>
  </div>
</template>

<script>

import HamburgerMenu from "@/components/HamburgerMenu";
import Header from "@/components/Header";
import IntrosContainer from "@//components/HomeComponents/IntrosContainer"
export default {
  name: "Home",
  components: {IntrosContainer, Header, HamburgerMenu}
}
</script>

<style scoped>

</style>