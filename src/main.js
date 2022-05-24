import { createApp } from "vue";
import i18n from "@/plugins/i18n";
import App from "@/App.vue";
import "@/assets/css/index.css";
import components from "@/components/ui";
const app = createApp(App);

app.use(i18n);

// load components UI
components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
