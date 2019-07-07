<template>
  <div>
    <h1>练习 - {{ title }}</h1>
    <ExerciseCard
      :partId='partId'
      :cardId='cardId'
      class="exercise-card"
    />
    <button
      @click='goHome'
      class="btn btn-outline-secondary mr-2"
    >回到首页</button>
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

export default {
  name: 'home',
  data () {
    return {
      partId: parseInt(this.$route.params.partId, 10),
      cardId: 0,
      msg: ""
    }
  },
  components: {
    ExerciseCard,
  },
  methods: {
    nextCard () {
      if (this.cardId + 2 <= this.partLength) {
        this.cardId++;
      } else {
        this.msg = '没有题目啦'
      }
    },
    goHome () {
      this.$router.push('/')
    }
  },
  computed: {
    title () {
      return this.$store.getters.getTitle(this.partId);
    },
    partLength () {
      return this.$store.getters.getPartLength(this.partId);
    }
  }
}
</script>

<style scoped>
.exercise-card {
  margin: 10px 0;
  height: 150px;
}
</style>