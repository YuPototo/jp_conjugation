<template>
  <div class="home">
    <h1>问题列表</h1>
    <TableContent />
  </div>
</template>

<script>
import TableContent from '@/components/TableContent.vue'

export default {
  name: 'Home',
  components: {
    TableContent
  }
}
</script>
