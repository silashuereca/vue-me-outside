<template>
  <div class="min-w-full bg-gray-900 p-10 flex justify-center overflow-x-scroll max-width">
    <!-- card sections -->
    <ul class="flex">
      <li v-for="item in list" :key="item.id" class="rounded-lg p-5 relative" :class="[selectedCard(item, true)]">
        <!-- fill up space when card is highlighted -->
        <h2 class="text-lg text-center" :class="[selectedCard(item)]" v-text="item.name"></h2>
        <h3 class="text-2xl text-center mt-1" :class="[selectedCard(item)]" v-text="item.price"></h3>
        <div class="w-full h-auto mt-1">
          <img src="./hvac-image.png" alt="havc image" />
        </div>
        <ul class="mt-2">
          <li v-for="(feature, index) in item.features" :key="index" class="flex py-2">
            <div>
              <icon-check-mark class="w-10" :class="[selectedCard(item)]"></icon-check-mark>
            </div>

            <p class="text-xs" :class="[selectedCard(item)]" v-text="feature"></p>
          </li>
        </ul>
        <!-- fill the absolute gap where the absolute button will be -->
        <div class="p-5 w-full"></div>
        <div class="w-full absolute bottom-0 left-0 right-0 p-5">
          <button class="uppercase w-full p-2 rounded-md font-bold" :class="{ 'custom-bg text-gray-100': item.id === selected, 'bg-gray-100 text-black': item.id !== selected }" @click="selectCard(item)">Select</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import IconCheckMark from "./IconCheckMark.vue";
export default {
  components: {
    IconCheckMark,
  },
  props: {
    list: {
      type: Array,
      default: () => [
        {
          id: 1,
          name: "Good",
          price: "$5,650",
          // there should just be an array of listed features so they can be dynamically rendered
          features: ["10 year warranty", "All aluminum spare-fin outdoor coil", "96% AFUE & 1 stage of heat", "Single speed outdoor fan motor", "Heavy duty steel louvered panels", "Constant torque ECM blower motor", "Insulated blowerr compartment", "Stainless steel heat exchangers"],
        },
        {
          id: 2,
          name: "Better",
          price: "$6,723",
          features: ["10 year warranty", "All aluminum spare-fin outdoor coil", "96% AFUE & 1 stage of heat", "Single speed outdoor fan motor", "Heavy duty steel louvered panels", "Constant torque ECM blower motor", "Insulated blowerr compartment", "Stainless steel heat exchangers some more words here", "more features here blah blah"],
        },
        {
          id: 3,
          name: "Best",
          price: "$8,120",
          features: ["10 year warranty", "All aluminum spare-fin outdoor coil", "96% AFUE & 1 stage of heat", "Single speed outdoor fan motor", "Heavy duty steel louvered panels", "Constant torque ECM blower motor", "Insulated blowerr compartment", "Stainless steel heat exchangers some more words here", "more features here blah blah"],
        },
        {
          id: 4,
          name: "Fantastic",
          price: "$12,120",
          features: ["10 year warranty", "All aluminum spare-fin outdoor coil", "96% AFUE & 1 stage of heat", "Single speed outdoor fan motor", "Heavy duty steel louvered panels", "Constant torque ECM blower motor", "Insulated blowerr compartment", "Stainless steel heat exchangers some more words here", "more features here blah blah"],
        },
      ],
    },
    selectedDefault: {
      type: Number,
      default: 2,
    },
  },
  emits: ["select-proposal"],
  data: function () {
    return {
      selected: null,
    };
  },
  mounted() {
    this.selected = this.selectedDefault;
    const item = this.list.filter((item) => item.id === this.selectedDefault);
    if (this.list.length) {
      this.$emit("select-proposal", item);
    }
  },
  methods: {
    selectCard(item) {
      this.selected = item.id;
      this.$emit("select-proposal", item);
    },
    selectedCard(item, container) {
      if (!container) {
        // alter text color
        if (item.id === this.selected) {
          return "custom-text";
        } else {
          return "text-gray-100";
        }
      } else {
        if (this.selected === item.id) {
          return "bg-gray-100 w-56 -my-5";
        } else if (this.selected !== item.id) {
          return "custom-bg w-52 mx-2";
        }
      }
    },
  },
};
</script>

<style scoped>
.max-width {
  max-width: 800px;
}

.custom-bg {
  background-color: #406384;
}

.custom-text {
  color: #406384;
}
</style>