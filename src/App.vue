<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('initData');
  }
}
</script>
