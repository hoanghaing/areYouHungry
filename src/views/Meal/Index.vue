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
  mounted() {
    if (this.$route.query.id && this.$route.query.id.length > 1) {
      const { id } = this.$route.query;
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const { meals } = data;
          const [meal] = meals;
          this.detail = meal;
          console.log(this.detail);
        });
    }
  },
};
</script>

<style>

</style>
