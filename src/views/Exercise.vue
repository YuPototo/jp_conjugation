<template>
  <div>
    <h1>练习 - {{ title }}</h1>
    <ExerciseCard
      :card='cards[cardId]'
      :isFront='this.showFront'
      class="exercise-card"
    />
    <button
      @click='goHome'
      class="btn btn-outline-secondary mr-2"
    >回到首页</button>
    <button
      @click='turnCard'
      class="btn btn-primary mr-2"
    >查看答案</button>
    <button
      @click='nextCard'
      class="btn btn-outline-primary"
    >下一题</button>
    <div
      v-if="msg"
      class="alert alert-warning mt-2"
    >{{ msg }}</div>
  </div>
</template>

<script>
import ExerciseCard from '@/components/ExerciseCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Exercise',
  data () {
    return {
      partId: parseInt(this.$route.params.partId, 10),
      cardId: 0,
      showFront: true,
      msg: ""
    }
  },
  components: {
    ExerciseCard,
  },
  methods: {
    turnCard () {
      this.showFront = false;
    },
    nextCard () {
      if (this.cardId + 2 <= this.cardCount) {
        this.cardId++;
        this.showFront = true;
      } else {
        this.msg = '没有题目啦'
      }
    },
    goHome () {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState({
      title (state) {
        let part = state.cardGroups.filter(part => part.id === this.partId)[0];
        return part.title;
      },
      cardCount (state) {
        let part = state.cardGroups.filter(part => part.id === this.partId)[0];
        return part.cards.length;
      },
      cards (state) {
        let part = state.cardGroups.filter(part => part.id === this.partId)[0];
        return part.cards;
      }
    })
  }
}
</script>

<style scoped>
.exercise-card {
  margin: 10px 0;
  height: 150px;
}
</style>