<template>
  <div class="d-flex mt-2 ml-2">
    <span class="mt-1">Or, find meal by first letter: </span>
    <ul class="pagination ml-2">
      <li
        v-for="letter in letters"
        :key="letter"
        class="page-item"
      >
        <a
          class="page-link"
          @click="getMealByFirstLetter(letter)"
        >{{ letter }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NavFilter',
  data() {
    return {
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    };
  },
  methods: {
    ...mapActions(['setMealsAction']),
    async getMealByFirstLetter(letter) {
      this.setMealsAction([]);
      this.$router.push({ path: '/home', query: { firstletter: letter } });
    },
  },
};
</script>

<style>

</style>
