import { createApp } from "vue";
import router from "./router";
import "./assets/css/main.css";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

createApp(App)
  .use(
    createVuetify({
      components,
      directives,
    })
  )
  .use(router)
  .mount("#app");
