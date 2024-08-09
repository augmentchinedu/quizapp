<template>
  <div id="teacher" class="flex flex-col gap-10">
    <div class="flex flex-row justify-end gap-2">
      <v-btn color="#8E24AA" append-icon="mdi-plus"> Add Subject </v-btn>
      <v-btn color="#8E24AA" append-icon="mdi-minus">Remove Subject</v-btn>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div v-for="i in 4" class="p-2 text-center">
        <img
          src="../assets/images/subject.jpg"
          alt=""
          class="w-full rounded-md"
        />
        <span>Title</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "../store";

const store = useAppStore();
console.log(store);
</script>
