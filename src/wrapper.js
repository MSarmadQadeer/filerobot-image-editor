import component from "./index.js";

// Declaration of the installation method used via Vue.use(...)
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueFilerobotImageEditor", component);
}

// Creation of the destination module Vue.use(...)
const plugin = {
  install,
};

// Automatic installation if Vue is detected (for example in a navigation via the tag <script>)
let GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Export as module (for npm/webpack/etc.)
export default component;
