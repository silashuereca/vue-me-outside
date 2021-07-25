<template>
  <div>
    <input-component id="text" v-model="text" type="text" placeholder="Some value..."></input-component>
  </div>
</template>

<script>
import InputComponent from "../component-library/form-input/Input.vue";
export default {
  components: {
    InputComponent,
  },
  data: function () {
    return {
      text: "",
    };
  },
};
</script>