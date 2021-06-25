<template>
  <div>
    <section-card heading="Input type[text]">
      <div class="mt-3">
        <input-component
          id="text"
          type="number"
          v-model="text"
          placeholder="Some value..."
        ></input-component>

        <p v-text="text"></p>
      </div>
    </section-card>
  </div>
</template>

<script>
import SectionCard from "../components/SectionCard.vue";
import InputComponent from "../components/Input.vue";
export default {
  components: {
    SectionCard,
    InputComponent,
  },
  data: function () {
    return {
      text: "",
    };
  },
  watch: {
    text(value) {
      console.log("Value", value);
    },
  },
};
</script>