import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/css/main.css";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const pinia = createPinia();
createApp(App)
  .use(
    createVuetify({
      components,
      directives,
      icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
          mdi,
        },
      },
    })
  )
  .use(createPinia())
  .use(router)
  .mount("#app");
