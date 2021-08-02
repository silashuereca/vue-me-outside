<template>
  <div>
    <input-checkbox id="checkbox" v-model="test" type="checkbox"></input-checkbox>
  </div>
</template>

<script>
import InputCheckbox from "../component-library/form-checkbox/checkbox.vue";
export default {
  components: {
    InputCheckbox,
  },
  data: function () {
    return {
      test: true,
    };
  },
  watch: {
    test(value) {
      console.log("Checkbox", value);
    },
  },
};
</script>