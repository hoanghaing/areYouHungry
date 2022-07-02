<template>
  <select
    class="custom-select ml-2 mr-2"
    style="width: 12rem"
    @change="onSelectChange($event)"
  >
    <option
      v-for="(item, index) in lists"
      :key="`item-${index}`"
      :value="getValue(item)"
    >
      {{ getName(item) }}
    </option>
  </select>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FilterList',
  props: {
    lists: {
      type: Array,
      default: () => [],
    },
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    ...mapGetters(['getFilterBy']),
    getName(x) {
      if (x.strIngredient) return x.strIngredient;
      if (x.strArea) return x.strArea;
      if (x.strCategory) return x.strCategory;
      return '---';
    },
    handleString(name) {
      const result = name.toLowerCase().trim().replace(' ', '_');
      return result;
    },
    getValue(x) {
      if (x.strArea) return x.strArea;
      if (x.strCategory) return x.strCategory;
      if (x.strIngredient) return this.handleString(x.strIngredient);
      return '';
    },
    onSelectChange(event) {
      const filterBy = this.getFilterBy();
      this.$router.push({ path: '/home', query: { filter: filterBy, val: event.target.value } });
    },
  },
};
</script>

<style>

</style>
