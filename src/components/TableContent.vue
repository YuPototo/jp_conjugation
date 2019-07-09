<template>
  <ul class="list-group list-group-flush">
    <router-link
      v-for="(part, index) in tableOfContents"
      :key="index"
      tag="li"
      class="list-group-item"
      :to="{ name: 'exercise', params: { partId: part.id }}"
    ><a>{{ part.title }}</a></router-link>

  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TableContent',
  computed: {
    ...mapState({
      tableOfContents: state => state.cardGroups
    })
  }

}
</script>

<style>
</style>
