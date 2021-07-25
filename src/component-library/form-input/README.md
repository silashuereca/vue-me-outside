# Form Input Component

A simple reusable input component primarily used for Tailwind projects.

## version 1.0

## Copy Vue Component

```vue
<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  emits: ["update:modelValue"],
};
</script>
```

## Usage

```vue
<template>
  <div>
    //text value
    <input-component id="text" v-model="text" type="text" placeholder="Some value..."><input-component>
    //number value
    <input-component id="number" v-model="number" type="number" placeholder="Some value.."><input-component>
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
      number: 0,
    };
  },
};
</script>
```
