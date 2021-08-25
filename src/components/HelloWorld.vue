<template>
  <div class="hello">
    <h1>{{ msg }} <i class="pi pi-apple"> </i></h1>
  </div>
  <div>
    <Card class="p-shadow-24">
      <template #title>
        <h3>My First Card</h3>
      </template>
      <template #content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, earum
          veritatis? Dolor maxime delectus aperiam odit quas molestias vel
          doloribus officiis animi? Sit voluptatibus accusantium porro eligendi,
          veniam quaerat minus?
        </p>
        <p>
          Architecto voluptate delectus reiciendis minus eligendi veniam eius
          voluptates, quisquam deserunt inventore impedit, dolor animi amet
          provident consequatur. Rerum sint tenetur impedit architecto
          blanditiis saepe aliquid, officia dolorum veniam corrupti.
        </p>
        <p>
          Fugit ullam vitae, sed alias omnis excepturi, earum molestias ad,
          numquam assumenda adipisci nemo possimus dolor error. Fuga in
          accusantium, reprehenderit error consequatur ad atque? Amet alias
          facere vitae incidunt?
        </p>
      </template>
      <template #footer>
        <Button>Next</Button>
        <Button>Previous</Button>
      </template>
    </Card>
    <ToggleButton
      v-model="checked"
      onLabel="I confirm"
      offLabel="I reject"
      onIcon="pi pi-check"
      offIcon="pi pi-times"
    />
  </div>
  <div>
    <SplitButton label="Save" icon="pi pi-plus" :model="items"></SplitButton>
  </div>
  <div>
    <ColorPicker v-model="color" />
  </div>

  <div>
    <ProgressBar :value="value"> Percentage Complete:{{ value }}% </ProgressBar>
  </div>
</template>

<script>
import Button from "primevue/button";
import Card from "primevue/card";
import ToggleButton from "primevue/togglebutton";
import SplitButton from "primevue/splitbutton";
import ColorPicker from "primevue/colorpicker";
import ProgressBar from "primevue/progressbar";

export default {
  name: "HelloWorld",
  components: {
    Button,
    Card,
    ToggleButton,
    SplitButton,
    ColorPicker,
    ProgressBar,
  },
  props: {
    msg: String,
  },

  data() {
    return {
      color: "1976D2",
      value: 50,
      checked: true,
      content: [
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
      items: [
        {
          value: 0,
          label: "Update",
          icon: "pi pi-refresh",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          command: () => {
            this.$toast.add({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000,
            });
          },
        },
        {
          label: "Vue Website",
          icon: "pi pi-external-link",
          command: () => {
            window.location.href = "https://vuejs.org/";
          },
        },
        {
          label: "Upload",
          icon: "pi pi-upload",
          to: "/fileupload",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-card {
  width: 600px;
  height: 600px;
}

.pi-apple {
  font-size: 1em;
  color: green;
  font-weight: bold;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
