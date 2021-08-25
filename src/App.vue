<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/sample">Sample</router-link> |

    <TabMenu :model="items"></TabMenu>
  </div>
  <router-view />
</template>

<script>
import TabMenu from "primevue/tabmenu";
export default {
  components: {
    TabMenu,
  },
  data() {
    return {
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/tabmenu" },
        {
          label: "Calendar",
          icon: "pi pi-fw pi-calendar",
          to: "/tabmenu/calendar",
        },
        { label: "Edit", icon: "pi pi-fw pi-pencil", to: "/tabmenu/edit" },
        {
          label: "Documentation",
          icon: "pi pi-fw pi-file",
          to: "/tabmenu/documentation",
        },
        { label: "Settings", icon: "pi pi-fw pi-cog", to: "/tabmenu/settings" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
