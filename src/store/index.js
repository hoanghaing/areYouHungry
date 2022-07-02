import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// Modules

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    meals: [],
  },
  mutations: {
    SET_MEALS(state, payload) {
      state.meals = payload;
    },
  },
  getters: {
    getAllMeals(state) {
      return state.meals;
    },
  },
  actions: {
    setMealsAction(context, payload) {
      context.commit('SET_MEALS', payload);
    },
  },
  modules: {
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
