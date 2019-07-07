<template>
  <ul class='list-group list-group-flush'>
    <router-link
      v-for="(part, index) in contents"
      :key="index"
      tag="li"
      class="list-group-item"
      :to="{ name: 'exercise', params: { partId: part.id }}"
    ><a>{{ part.title }}</a></router-link>

  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TableContent',
  computed: {
    ...mapGetters({
      contents: 'getContents'
    })
  }

}
</script>

<style>
</style>
