const app = Vue.createApp({
  template: `
    <h1>Başlık:{{baslik}}</h1>
    <h3>İçerik:{{icerik}}</h3>
    <p>Yorum Sayısı:{{yorumSayisi}}</p>
    <button @click="ekle()">EKLE</button>
    <p>{{yazi}}</p>
    `,
  data() {
    return {
      baslik: "Vue Data Kavramı",
      icerik: "Vue 3 Konuları",
      yorumSayisi: 0,
      yazi:"Yorum eklemek için tıklayın."
    };
  },
  methods: {
    ekle() {
      console.log('ekle çalıştı');
      this.yorumSayisi++;
      this.yazi = this.yorumSayisi + ' tane yorum girildi';

    }
  },
});
app.mount("#app");
