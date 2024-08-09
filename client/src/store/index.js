import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useActions } from "./actions";

export const useAppStore = defineStore("quizapp", () => {
  const app = reactive({
    isInitialized: false,
  });
  const subjects = reactive([]);

  return { app, subjects, ...useActions() };
});
