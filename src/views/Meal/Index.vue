<template>
  <v-layout>
    <NavFilter />
    <detail :item="detail" />
  </v-layout>
</template>

<script>
import VLayout from '@/layouts/Default.vue';
import NavFilter from '../NavFilter/Index.vue';
import Detail from './Detail.vue';

export default {
  name: 'MealDetail',
  components: {
    VLayout,
    NavFilter,
    Detail,
  },
  data() {
    return {
      detail: {},
    };
  },
  watch: {
    $route: 'fetchData',
  },
  mounted() {
    if (this.$route.query.id && this.$route.query.id.length > 1) {
      const { id } = this.$route.query;
      let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      if (id === 'random') {
        url = 'https://www.themealdb.com/api/json/v1/1/random.php';
      }
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const { meals } = data;
          const [meal] = meals;
          this.detail = meal;
        });
    }
  },
  methods: {
    fetchData() {
      if (this.$route.query.id && this.$route.query.id === 'random') {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
          .then((response) => response.json())
          .then((data) => {
            const { meals } = data;
            const [meal] = meals;
            this.detail = meal;
          });
      }
    },
  },
};
</script>

<style>

</style>
