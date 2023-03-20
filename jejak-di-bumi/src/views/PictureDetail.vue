<template>
  <div class="picture-detail">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/pictures" class="text-dark"
                  >Pictures</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Picture Info
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="'../assets/images/' + picture.gambar"
            class="img-fluid shadow"
          />
        </div>
        <div
          class="col-md-6"
          style="font-family: 'Edu NSW ACT Foundation', cursive"
        >
          <h2>
            <strong>{{ picture.nama }}</strong>
          </h2>
          <hr />
          <h5>
            <label for="rating-inline">Beri Nilai Bintang : </label>
            <b-form-rating
              color="orange"
              id="rating-inline-no-border"
              inline
              no-border
              value="4"
            ></b-form-rating>
          </h5>
          <h4>
            Tanggal :
            <strong>{{ picture.tanggal }}</strong>
          </h4>
          <h4 class="mb-3">
            <strong>Tema :</strong>
            {{ picture.tema }}
            | Nomor :
            <strong>{{ picture.kode }}</strong>
          </h4>
          <h4 style="font-size: 18px">
            <strong> Alamat : </strong>{{ picture.lokasi }}
          </h4>
          <hr />

          <b-card>
            <b-card-text>
              <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </b-card-text>
          </b-card>

          <!-- <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="nilai_kasih_sayang">Nilai Kasih Sayang :</label>
              <input
                type="number"
                class="form-control"
                placeholder="Nilai 1-10.."
                v-model="pesan.nilai_kasih_sayang"
              />
            </div>
            <div class="form-group">
              <label for="sampaikan_sesuatu">Sampaikan Sesuatu :</label>
              <textarea
                v-model="pesan.sampaikan_sesuatu"
                class="form-control"
                placeholder="Sampaikan sesuatu dan ungkapkan isi hati tentang gambar ini .."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-success" @click="pemesanan">
              Sampaikan Sekarang <b-icon-chat-left-text></b-icon-chat-left-text>
            </button>
          </form> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "PictureDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      picture: {},
      pesan: {},
    };
  },
  methods: {
    setPicture(data) {
      this.picture = data;
    },
    pemesanan() {
      if (this.pesan.nilai_kasih_sayang) {
        this.pesan.pictures = this.picture;
        axios
          .post("http://localhost:3000/bii", this.pesan)
          .then(() => {
            this.$router.push({ path: "/bii" });
            this.$toast.success("Sukses Masuk bii", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Nilai Kasih Sayang Harus diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/pictures/" + this.$route.params.id)
      .then((response) => this.setPicture(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>