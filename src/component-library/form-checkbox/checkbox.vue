<template>
  <input :value="modelValue" :checked="modelValue" @input="updateInput" />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateInput(event) {
      const value = event.target.value;

      if (value === "false") {
        this.$emit("update:modelValue", true);
      } else {
        this.$emit("update:modelValue", false);
      }
    },
  },
};
</script>
