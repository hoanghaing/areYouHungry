<template>
  <div>
    <div
      class="d-flex title mb-4"
      style="flex-wrap: wrap;"
    >
      <div class="item item-left">
        <span>
          <b>{{ item.strMeal }}</b>
        </span>
      </div>
      <div class="item-right">
        <span>
          Ingredients
        </span>
      </div>
    </div>
    <div
      class="row d-flex"
      style="flex-wrap: wrap;"
    >
      <div class="image item-left">
        <img :src="item.strMealThumb">
      </div>
      <div class="instruction item-right">
        <ul class="ingredients">
          <li
            v-for="i in arr"
            :key="`ins-${i}`"
          >
            {{ getInsAt(item, i) }}
          </li>
        </ul>
        <p>
          <b>Instructions</b>
        </p>
        <p>{{ item.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Detail',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      arr: [...Array(20).keys()],
    };
  },
  methods: {
    getInsAt(item, i) {
      const keyIns = `strIngredient${i}`;
      const keyAmount = `strMeasure${i}`;
      if (item[keyIns]) {
        return `${item[keyIns]}: ${item[keyAmount]}` || '';
      }
      return '...';
    },
  },
};
</script>

<style>
.title {
  flex-wrap: wrap;
}
.title > .item-left {
  flex: 30%;
}
.title > .item-right {
  flex: 70%;
}
.item {
  width: 100%;
  text-align: center;
}
.image {
  width: 30%;
}
.instruction {
  width: 60%;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
ul {
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
}
</style>
