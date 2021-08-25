<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TabView>
      <TabPanel header="Header I">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          possimus aliquam suscipit, quisquam aspernatur labore qui consequatur
          praesentium numquam? Voluptatum dolore earum dolorem corrupti porro
          molestias reprehenderit modi sapiente maiores.
        </p>
        <p>
          Maiores minus at illum ratione fuga dolore eligendi corrupti,
          explicabo rem voluptas iusto? Facilis maxime ex, aut laboriosam
          sapiente rerum magnam, cupiditate reiciendis dolore, necessitatibus
          placeat provident nostrum fugit vero?
        </p>
        <p>
          Velit illum omnis nobis sunt eos dolor quod at consectetur inventore
          voluptates optio, similique repellat ullam labore magnam tenetur, quam
          aliquam consequuntur. Nam tempore veniam sapiente nihil, delectus
          excepturi commodi.
        </p>
        <p>
          Officia adipisci voluptas cupiditate molestiae repellendus dolorum
          dolore, cum quaerat sequi eaque et illum laborum neque distinctio
          quasi dolores! Culpa esse similique qui non ipsa necessitatibus sit.
          Saepe, molestiae rem.
        </p>
        <p>
          Numquam, molestiae reprehenderit nemo provident maiores distinctio,
          eveniet officiis blanditiis hic autem ad totam, tenetur expedita
          voluptate nisi corporis ipsa. Mollitia sapiente unde molestiae, totam
          quas reprehenderit quos pariatur illum?
        </p>
      </TabPanel>
      <TabPanel header="Header II"> Content II </TabPanel>
      <TabPanel header="Header III"> Content III </TabPanel>
    </TabView>
    <div>
      <div class="grid formgrid text-center">
        <div class="field col-4">
          <h5>Basic</h5>
          <Knob v-model="value1" />
        </div>
        <div class="field col-4">
          <h5>Readonly</h5>
          <Knob v-model="value2" readonly />
        </div>
        <div class="field col-4">
          <h5>Disabled</h5>
          <Knob v-model="value3" disabled />
        </div>
        <div class="field col-4">
          <h5 class="p-mt-3">Min/Max</h5>
          <Knob v-model="value4" :min="-50" :max="50" />
        </div>
        <div class="field col-4">
          <h5 class="p-mt-3">Step</h5>
          <Knob v-model="value5" :step="10" />
        </div>
        <div class="field col-4">
          <h5 class="p-mt-3">Template</h5>
          <Knob v-model="value6" valueTemplate="{value}%" />
        </div>
        <div class="field col-4">
          <h5 class="p-mt-3">Stroke</h5>
          <Knob v-model="value7" :strokeWidth="5" />
        </div>
        <div class="field col-4">
          <h5 class="p-mt-3">Size</h5>
          <Knob v-model="value8" :size="200" />
        </div>
        <div class="field col-4">
          <h5 class="p-mt-3">col-4or</h5>
          <Knob
            v-model="value9"
            valuecol-4or="SlateGray"
            rangecol-4or="MediumTurquoise"
          />
        </div>
      </div>
      <div class="grid col">
        <div
          class="col flex flex-wrap align-items-center justify-content-center"
        >
          <div class="box shadow-none m-3">shadow-none</div>
          <div class="box shadow-1 m-3">shadow-1</div>
          <div class="box shadow-2 m-3">shadow-2</div>
        </div>
        <div
          class="col flex flex-wrap align-items-center justify-content-center"
        >
          <div class="box shadow-3 m-3">shadow-3</div>
          <div class="box shadow-4 m-3">shadow-4</div>
          <div class="box shadow-5 m-3">shadow-5</div>
        </div>
        <div
          class="col flex flex-wrap align-items-center justify-content-center"
        >
          <div class="box shadow-6 m-3">shadow-6</div>
          <div class="box shadow-7 m-3">shadow-7</div>
          <div class="box shadow-8 m-3">shadow-8</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Knob from "primevue/knob";
export default {
  components: {
    TabView,
    TabPanel,
    Knob,
  },
  data() {
    return {
      visibleTop: false,
      value1: 0,
      value2: 50,
      value3: 75,
      value4: 10,
      value5: 40,
      value6: 60,
      value7: 40,
      value8: 60,
      value9: 50,
    };
  },
};
</script>
