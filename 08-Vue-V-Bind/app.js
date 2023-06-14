const app = Vue.createApp({
  template: `
  <div v-bind:style="style"> DENEME YAZISI</div>
    `,
  data() {
    return {
      style:"color:red;font-size:25px;text-align:center"
    };
  },
  methods: {},
});
app.mount("#app");
