<template>
  <div class="p-5 bg-white rounded w-full shadow-md">
    <h2 class="text-xl font-medium" v-text="heading" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: "",
    },
  },
};
</script>
