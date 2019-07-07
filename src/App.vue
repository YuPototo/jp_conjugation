<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    contents: state => state.contents
  }),
  created () {
    console.log('App Created')
    this.$store.dispatch('initData');
  }
}
</script>
