<template>
  <v-responsive class="border rounded">
    <v-app class="h-screen">
      <v-app-bar :elevation="2" color="#4A148C">
        <template v-slot:prepend>
          <v-avatar color="#FFFFFF">QA</v-avatar>
        </template>

        <v-app-bar-title>{{ route.name }}</v-app-bar-title>
      </v-app-bar>

      <v-main>
        <v-container class="h-full">
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.name);
</script>
