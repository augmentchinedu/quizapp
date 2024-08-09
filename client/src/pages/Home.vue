<template>
  <div id="home" class="flex flex-col justify-center items-center gap-4">
    <RouterLink
      :to="category.path"
      v-for="(category, i) in categories"
      :key="i"
    >
      <div class="grid gap-2 text-center">
        <img
          :src="'./assets/images/' + category.name + '.jpg'"
          class="mx-auto rounded-md"
        />
        <strong class="capitalize">{{ category.name }}</strong>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const categories = reactive([
  {
    name: "student",
    path: "/student",
  },
  {
    name: "teacher",
    path: "/teacher",
  },
]);
</script>

<style scoped>
#home img {
  width: 50%;
}
</style>
