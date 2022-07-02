<template>
  <div style="width:100%; height:100%">
    <div
      v-if="lists && lists.length > 0"
      class="ml-2 d-flex"
      style="flex-flow: row wrap"
    >
      <div
        v-for="item in lists"
        :key="`meal-${item.idMeal}`"
        class="card list-item"
        style="width: 16rem; display: block; margin: 0.5rem 0.5rem;"
        @click="clickMeal(item.idMeal)"
      >
        <img
          class="card-img-top"
          :src="item.strMealThumb"
          alt="Card image cap"
        >
        <div class="card-body">
          <h5 class="card-title">
            {{ item.strMeal }}
          </h5>
        </div>
      </div>
    </div>
    <div
      v-else
      class="loader"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Meals',
  data() {
    return {
      lists: this.$store.state.meals,
    };
  },
  computed: {
  },
  watch: {
    $route: 'fetchData',
  },
  mounted() {
    console.log(this.$store.state.meals);
  },
  methods: {
    ...mapGetters([
      'getAllMeals',
    ]),
    ...mapActions(['setMealsAction']),
    fetchData() {
      if (this.$route.query.firstletter && this.$route.query.firstletter.length > 0) {
        const { firstletter } = this.$route.query;
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstletter}`)
          .then((response) => response.json())
          .then((data) => {
            const { meals } = data;
            this.setMealsAction(meals);
            this.lists = meals;
          });
      } else if (this.$route.query.name && this.$route.query.name.length > 0) {
        const { name } = this.$route.query;
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
          .then((response) => response.json())
          .then((data) => {
            const { meals } = data;
            this.setMealsAction(meals);
            this.lists = meals;
          });
      } else if (this.$route.query.filter && this.$route.query.filter.length > 0) {
        const { filter, val } = this.$route.query;
        let url = '';
        switch (filter) {
          case 'area':
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${val}`;
            break;
          case 'category':
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${val}`;
            break;
          case 'ingredients':
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${val}`;
            break;
          default:
            break;
        }
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const { meals } = data;
            console.log(meals);
            this.setMealsAction(meals);
            this.lists = meals;
          });
      }
    },
    clickMeal(id) {
      this.$router.push({ name: 'meal.index', query: { id } });
    },
  },
};
</script>

<style scoped>
.loader {
  width: 100%;
  height: 100%;
  z-index: 10;
  background:
  url('//upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Phi_fenomeni.gif/50px-Phi_fenomeni.gif')
    50% 50% no-repeat rgb(249,249,249);
}

.list-item {
  border: solid 1px #0050e6;
  transition: border-width 0.2s linear;
}

.list-item:hover {
  border-width: 5px;
}
</style>
