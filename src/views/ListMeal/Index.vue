<template>
  <div style="width:100%; height:100%">
    <div
      v-if="lists"
      class="ml-2 d-flex"
      style="flex-flow: row wrap"
    >
      <div
        v-for="item in lists"
        :key="`meal-${item.idMeal}`"
        class="card"
        style="width: 16rem; display: block; margin: 0.5rem 0.5rem;"
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
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Meals',
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      lists: (state) => state.meals,
    }),
  },
  watch: {
    $route(to) {
      if (to.name === 'home.index') {
        if (this.$route.query.firstletter && this.$route.query.firstletter.length > 1) {
          const { firstletter } = this.$route.query;
          const url = `www.themealdb.com/api/json/v1/1/search.php?f=${firstletter}`;
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              const { meals } = data;
              this.lists = meals;
              // this.setMealsAction(meals);
            });
        }
      }
    },

  },
  mounted() {
    this.lists = this.getAllMeals();
    console.log(this.lists);
  },
  methods: {
    ...mapGetters([
      'getAllMeals',
    ]),
  },
};
</script>

<style scoped>
.loader{
  width: 100%;
  height: 100%;
  z-index: 10;
  background:
  url('//upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Phi_fenomeni.gif/50px-Phi_fenomeni.gif')
    50% 50% no-repeat rgb(249,249,249);
}
</style>
