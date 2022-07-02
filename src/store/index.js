import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// Modules

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    meals: [],
    filterBy: 'category',
  },
  mutations: {
    SET_MEALS(state, payload) {
      state.meals = payload;
    },
    SET_FILTER_BY(state, payload) {
      state.filterBy = payload;
    },
  },
  getters: {
    getAllMeals(state) {
      return state.meals;
    },
    getFilterBy(state) {
      return state.filterBy;
    },
  },
  actions: {
    setMealsAction(context, payload) {
      context.commit('SET_MEALS', payload);
    },
    setFilterByAction(context, payload) {
      context.commit('SET_FILTER_BY', payload);
    },
  },
  modules: {
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
