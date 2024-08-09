<template>
  <div class="grid items-center h-full">
    <div id="home" class="flex flex-col justify-center items-center gap-4">
      <div v-for="(category, i) in categories" :key="i">
        <div class="grid gap-2 text-center">
          <router-link :to="category.path">
            <div>
              <img
                :src="'./assets/images/' + category.name + '.jpg'"
                class="mx-auto rounded-md min-w-1/2 max-w-1/2"
              />
              <strong class="capitalize">{{ category.name }}</strong>
            </div>
          </router-link>
        </div>
      </div>
    </div>
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
