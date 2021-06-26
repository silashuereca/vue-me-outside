<template>
  <section-card heading="Sliding Cards">
    <CardCarousel class="vcc" :items="listOfTodos" />
  </section-card>
</template>

<script>
import SectionCard from "../components/SectionCard.vue";
import CardCarousel from "../components/sliding-cards/CardCarousel.vue";
export default {
  components: {
    SectionCard,
    CardCarousel,
  },
  data: function () {
    return {
      listOfTodos: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  },
};
</script>

<style scoped>
.vcc {
  height: 50vh;
  width: 60vw;
}
</style>