<template>
  <div>
    <Menubar :model="items">
      <template #start>
         Place Logo Here       
      </template>
      <template #end>
          
      </template>
    </Menubar>
  </div>
    <!-- <useDark v-slot="{isDark, toggleDark}">
         <button @click="toggleDark()">
           Is Dark:{{isDark}}
          </button>
    </useDark>   -->
  <router-view />
</template>

<script>
import { ref } from "vue";
// import{useDark, useToggle } from '@vueuse/core'
import Menubar from "primevue/menubar";
export default {
  components: { Menubar },

  setup() {
    // const isDark = useDark({
    //   selector:'body',
    //   attribute:'color_scheme',
    //   valueDark :'dark',
    //   valueLight:'light'
    // })

    // const toggleDark = useToggle(isDark)
    
    const items = ref([
      {
        label: "COLLECTIONS",
        icon: "pi pi-fw pi-file",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-plus",
            items: [
              {
                label: "Bookmark",
                icon: "pi pi-fw pi-bookmark",
              },
              {
                label: "Video",
                icon: "pi pi-fw pi-video",
              },
            ],
          },
          {
            label: "GROWTH",
            icon: "pi pi-fw pi-trash",
          },
          {
            separator: true,
          },
          {
            label: "Export",
            icon: "pi pi-fw pi-external-link",
          },
        ],
        to: "/collections",
      },
      {
        label: "SHIPLIST",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Left",
            icon: "pi pi-fw pi-align-left",
          },
          {
            label: "Right",
            icon: "pi pi-fw pi-align-right",
          },
          {
            label: "Center",
            icon: "pi pi-fw pi-align-center",
          },
          {
            label: "Justify",
            icon: "pi pi-fw pi-align-justify",
          },
        ],
        to: "/shiplist",
      },
      {
        label: "LIBRARY",
        icon: "pi pi-fw pi-user",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-user-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-user-minus",
          },
          {
            label: "Search",
            icon: "pi pi-fw pi-users",
            items: [
              {
                label: "Filter",
                icon: "pi pi-fw pi-filter",
                items: [
                  {
                    label: "Print",
                    icon: "pi pi-fw pi-print",
                  },
                ],
              },
              {
                icon: "pi pi-fw pi-bars",
                label: "List",
              },
            ],
          },
        ],
        to: "/library",
      },
      {
        label: "ABOUT",
        icon: "pi pi-fw pi-calendar",
        items: [
          {
            label: "Edit",
            icon: "pi pi-fw pi-pencil",
            items: [
              {
                label: "Save",
                icon: "pi pi-fw pi-calendar-plus",
              },
              {
                label: "Delete",
                icon: "pi pi-fw pi-calendar-minus",
              },
            ],
          },
          {
            label: "Archive",
            icon: "pi pi-fw pi-calendar-times",
            items: [
              {
                label: "Remove",
                icon: "pi pi-fw pi-calendar-minus",
              },
            ],
          },
        ],
        to: "/about",
      },
      {
        label: "MUSEUM",
        icon: "pi pi-fw pi-power-off",
      },
    ]);

    
    return { items };
  },
};
</script>

<style>

</style>
