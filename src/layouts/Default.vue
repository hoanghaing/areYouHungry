<template>
  <div>
    <nav class="d-flex justify-content-start navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link
        :to="{ name: 'home.index' }"
        class="navbar-brand"
      >
        Meal Finder
      </router-link>
      <search />
      <button
        id="randomBtn"
        type="button"
        class="btn btn-secondary btn-sm"
      >
        Random
      </button>
    </nav>

    <div>
      <div class="row">
        <div class="col col-12">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* ============
 * Default Layout
 * ============
 *
 * Used for the home and account pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */
import Search from '@/views/Search/Index.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  /**
   * The name of the layout.
   */
  name: 'DefaultLayout',
  components: {
    Search,
  },
  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      menuCollapsed: false,
      API_URL: 'https://www.themealdb.com/api/json/v1/1/search.php?f=b',
    };
  },
  computed: {

  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions(['setMealsAction']),
    ...mapGetters([
      'getAllMeals',
    ]),
    toggleMenu() {
      this.menuCollapsed = !this.menuCollapsed;
    },
    init() {
      fetch(this.API_URL)
        .then((response) => response.json())
        .then((data) => {
          const { meals } = data;
          this.setMealsAction(meals);
        });
    },
  },
};
</script>
<style scoped>
  #randomBtn{
    right: 1rem;
    position: fixed;
  }
</style>
