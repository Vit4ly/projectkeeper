<template>
  <navbar></navbar>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/layout/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
.app {
}
</style>
