<template>
  <div class="d-flex mt-2 ml-2">
    <select
      class="custom-select ml-2 mr-2"
      style="width: 8rem"
      @change="onSelectChange($event)"
    >
      <option
        value="category"
        selected
      >
        Category
      </option>
      <option value="area">
        Area
      </option>
      <option value="ingredients">
        Ingredients
      </option>
    </select>
    <filter-list :lists="filterLists" />
    <ul
      class="pagination ml-auto mr-4"
    >
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
import FilterList from '@/views/FilterList/Index.vue';

export default {
  name: 'NavFilter',
  components: {
    FilterList,
  },
  data() {
    return {
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      filterLists: [],
    };
  },
  mounted() {
    this.getCategoryList();
  },
  methods: {
    ...mapActions(['setMealsAction', 'setFilterByAction']),
    async getMealByFirstLetter(letter) {
      this.$router.push({ path: '/home', query: { firstletter: letter } });
    },
    getCategoryList() {
      const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const { meals } = data;
          this.filterLists = meals;
        });
    },
    fetchCategoryList(value) {
      let url;
      switch (value) {
        case 'category':
          url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
          break;
        case 'area':
          url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
          break;
        case 'ingredients':
          url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
          break;
        default:
          url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
          break;
      }
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const { meals } = data;
          this.filterLists = meals;
        });
    },
    onSelectChange(event) {
      this.fetchCategoryList(event.target.value);
      this.setFilterByAction(event.target.value);
    },
  },

};
</script>

<style scoped>
 /* The container must be positioned relative: */
.custom-select {
  position: relative;
  font-family: Arial;
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}

.select-selected {
  background-color: DodgerBlue;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
