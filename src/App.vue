<template>
  <div class="flex">
    <!-- routes -->
    <div class="w-1/5 h-screen p-5">
      <h1 class="text-2xl text-green-500">Vue Components</h1>

      <div class="mt-4">
        <router-link
          v-for="(item, index) in routes"
          :key="index"
          :to="{ name: item.routeName }"
          class="text-lg mt-1"
        >
          <div
            class="w-full p-1 hover:bg-gray-100"
            :class="{ 'bg-gray-100': $route.name === item.routeName }"
            v-text="item.name"
          />
        </router-link>
      </div>
    </div>
    <!-- content -->
    <div class="bg-gray-50 w-full p-5">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      routes: [
        { name: "Home", routeName: "home-page", route: "/" },
        { name: "Input", routeName: "input-page", route: "/input" },
      ],
    };
  },
};
</script>