import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import store from "./store";

import "primevue/resources/themes/md-light-deeppurple/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

// Importing css for flexgrid
// import "primeflex/src/_variables.scss";
// import "primeflex/src/_grid.scss";
// import "primeflex/src/_formlayout.scss";
// import "primeflex/src/_display.scss";
// import "primeflex/src/_text.scss";
// import "primeflex/src/flexbox/_flexbox.scss";
// import "primeflex/src/_spacing.scss";
// import "primeflex/src/_elevation.scss";

const app = createApp(App);
app.use(PrimeVue);
app.use(store);
app.use(router);
app.mount("#app");
