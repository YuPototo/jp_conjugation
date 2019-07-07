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
    <button
      v-show="isFront"
      @click='isFront=!isFront'
      class="btn btn-primary"
    >查看答案</button>
  </div>

</template>

<script>
export default {
  data () {
    return {
      isFront: true
    }
  },
  props: [
    'partId',
    'cardId'
  ],
  computed: {
    card () {
      // eslint-disable-next-line
      this.isFront = true;
      return this.$store.getters.getCard(this.partId, this.cardId);
    },
  }
}
</script>

<style scoped>
.card-content {
  margin: 10px 0;
  font-size: 30px;
}
</style>
