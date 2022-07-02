<template>
  <v-layout>
    <NavFilter />
    <ListMeal />
  </v-layout>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import VLayout from '@/layouts/Default.vue';
import NavFilter from '../NavFilter/Index.vue';
import ListMeal from '../ListMeal/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'HomeIndex',

  /**
   * The components that the page can use.
   */
  components: {
    VLayout,
    NavFilter,
    ListMeal,
  },
};
</script>
