<template>
  <div class="p-4 bg-gray-600 shadow-sm text-center text-black">
    <!-- <Navbar /> -->
    <Header />
    <b-card
      class="mb-3"
      overlay
      img-src="https://img.freepik.com/free-vector/paper-hearts-banner-with-text-space_1017-30232.jpg?w=1380&t=st=1679137984~exp=1679138584~hmac=a2966d616f2e879780c7e5717055872041d1cce5b3bc27122e2928d2d26ac468"
      img-alt="Card Image"
      text-variant="black"
      title="Teruntuk MyLOVE:"
      sub-title="Meilisa Dwi Ervinda"
    >
      <div>
        <b-card-text>
          <div>
            <p class="p-4 text-center text-black" style="font-size: 14px">
              Pernah kutuliskan sesuatu yang sangat menakjubkan, tertulis dari
              proses pengamatan dan pembelajaran. Lima tahun yang lalu
              <br />saya tidak pernah merasakan terhadap apa yang telah ku
              tuliskan di kalimat terakhir, namun saat ini saya telah belajar
              mengenain <br />sebuah kasih dan Sayang serta izinkan lah kini
              hinga seterusnya untuk menjalin kasih dan sayang.
            </p>
            <p style="font-family: 'Caveat', cursive; font-size: 24px">
              Setiap Sesuatu Memiliki Rumus<br />
              Jika Rumus Angka adalah Bilangan<br />
              Rumus setipa kehidupan adalah Filosofi<br />
              Maka Rumus Cinta adalah Kasih Sayang
            </p>
            <strong>Sabtu, 7 Oktober 2017<br /> </strong><br />
          </div>
        </b-card-text>
      </div>
    </b-card>

    <div>
      <!-- 3 Gambar -->
      <div>
        <b-card-group deck>
          <b-card
            img-src="https://cdn.shopify.com/s/files/1/0090/4799/8500/collections/bouquet-583663.jpg?v=1634800091"
            img-alt="Card image"
            img-top
          >
            <b-card-text class="mt-3 text-justify" style="font-size: 18.5px">
              <h3>MEWA BOUQUET :</h3>
              <br />
              <strong>Sesuatu yang harus dirawat</strong> namun entah sampai
              kapan merawatnya. Hal yang membuat senang ketika buket telah jadi
              dengan hasil yang cantik dikasih ke pelanggan dan kata orang wahh
              cantik serta mendapatkan respon positif. Something yg bikin berat
              karena susah mengontrol mood, bahkan bikin males. Hal yang
              dipikirerkan saat mood melanda adalah "cape.. mood nggk okee!!
              dasar propesionalitas". Hal yang diperjuangkan agar suatu saat
              nanti ketika checkout sesuatu nggak perlu pikir panjang dan
              langsung beli.
            </b-card-text>
          </b-card>

          <b-card
            img-src="https://images.hdqwalls.com/wallpapers/acoustic-love-1h.jpg"
            img-alt="Card image"
            img-bottom
          >
            <b-card-text>
              <p
                class="p-4 bg-gray-600 shadow-sm text-center text-black"
                style="
                  font-family: 'Edu NSW ACT Foundation', cursive;
                  font-size: 24px;
                "
              >
                Kalau mendung hitam sudah diatas kepala,<br />
                jangan larang hujan turun ke bumi.<br />
                Kalau angin bertiup dengan kencangnya,<br />
                jangan larang daun-daun kecil berguguran.<br />
                Kalau senyummu selalu mekar dalam hatiku,<br />
                jangan larang aku tetap setia dan rindu padamu.<br />
                <strong class="text-secondary">Zawawi Imran.</strong>
              </p>
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <div class="mt-4">
        <b-card
          style="width: 100%"
          img-src="https://rare-gallery.com/thumbnail/78803-Minimalist-LandscapeArtistic-Sunrise-4k-Ultra-HD-Wallpaper.jpg"
          img-alt="Card image"
          img-left
          class="mb-3"
        >
          <b-card-text class="text-justify ml-3 mr-3" style="font-size: 14px">
            <h2 class="text-center">
              Cahaya Harapan di <strong> Warna Kasih Sayang</strong>
            </h2>
            <p class="mt-3">
              <strong>Matahari adalah sumber kehangatan</strong> dan penerang dari perjuangan
              melewati malam [1]. Dimana tinggal matahari ?. Seorang pemenang
              juara melukis mengatakan, Ia tinggal di pegunungan dan di hempit
              dua gunung besar. Bangunnya ditandai dgn suara ayam dan tidurnya
              ditandai sekawanan burung, kata people di bangku TK tersebut [2].
              Dia dapat memantulkan bayang-bayang ekspektasi yang bisa kita
              lihat melalui air. Air adalah senyawa yang penting bagi semua
              bentuk kehidupan [3] <strong>memantulkan warna kehidupan</strong> Merah Muda yang
              berarti <strong>Kasih Sayang.</strong> 
            </p>

            <p>
              <strong>Referensi : </strong> 
              [1]. Berlin, The Capital City of German Uni Eropa. [2].
              People di bangku Tk, Letak Keberadaan Gunung. [3]. Wikipedia, Air,
              [4]. Manusia Manis
            </p>
          </b-card-text>
        </b-card>

        <b-card
          class=""
          img-src="data:image/jpeg;base64,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"
          img-alt="Card image"
          img-right
        >
          <b-card-text>
            <strong class="text-center" style="font-size: 36px">
              Kita Persembahkan Manusia yang suka Tidur dan Berprestasi.</strong
            ><br />
            Keras Kepala | Egois | Gengsian | Ngantuan Kayak Bayi | Moodian |
            kalau disuruh gerak ngeluh soal propesionalitas | Dasar ManuSIA
            Venus | Bii Sayang
          </b-card-text>
        </b-card>

        <!-- <b-card> -->
        <!-- <div class="carousel-item">
            <img
            :src="'../assets/images/' + picture.gambar"
            class="img-fluid shadow"
            alt="..."
          />
            <div class="carousel-caption d-none d-md-block">
              <h5>TITLE</h5>
              <p>Sub Title</p>
            </div>
          </div> -->

        <!-- </b-card> -->
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
// import axios from "axios";

export default {
  name: "Ayy",
  props: ["picture"],
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Navbar,
    Header,
  },
  // data() {
  //   return {
  //     pictures: [],
  //   };
  // },
  // methods: {
  //   setPictures(data) {
  //     this.pictures = data;
  //   },
  // },
  // mounted() {
  //   axios
  //     .get("http://localhost:3000/pictures/" + this.$route.params.id)
  //     .then((response) => this.setPictures(response.data))
  //     .catch((error) => console.log(error));
  // },
};
</script>
<style>
</style>