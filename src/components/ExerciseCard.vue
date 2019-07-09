<template>
  <div>
    <div class="card-content">
      <div
        v-if="isFront"
        class="front"
      >
        {{ card.front }}
      </div>
      <div
        v-else
        class="back"
      >
        {{ card.back }}
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: [
    'card',
    'isFront'
  ]
}
</script>

<style scoped>
.card-content {
  margin: 10px 0;
  font-size: 30px;
}
</style>
