<template>
  <div class="input">
    <input
      id="search-meal"
      v-model="searchValue"
      type="text"
      class="form-control"
      placeholder="Enter meal you want to search..."
      @input="debounceSearch"
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    ...mapGetters(['getAllMeals']),
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.searchValue = event.target.value;
        // console.log(this.searchValue);
        console.log(this.getAllMeals());
      }, 600);
    },
  },
};
</script>

<style scoped>
    #search-meal {
      min-width: 30rem;
    }
</style>
