const app = Vue.createApp({
  template: `
   
  <ul>
  <li v-for="gun in gunler">{{gun}}</li>
  </ul>

  <ul>
  <li v-for="person in persons">Çalışan Adı:{{person.isim}}- Maaşı:{{person.maas}}</li>
  </ul>
    `,
  data() {
    return {
      gunler:["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"],
      persons:[
        {isim:"Varol",maas:4250},
        {isim:"Ahmet",maas:3000},
        {isim:"Mehmet",maas:1990}
      ]
    };
  },
  methods: {},
});
app.mount("#app");
