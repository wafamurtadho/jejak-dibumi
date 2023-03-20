<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand href="#">Jejak di Bumi</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/pictures">Picture</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ayy">For My Little Venus</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/saved">Saved</router-link>
            </li>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/bii">
                Mr. Mars
                <b-icon-person></b-icon-person>
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Navbar",
  // data() {
  //   return {
  //     jumlah_pesanans: [],
  //   };
  // },
  // props: ["updateKeranjang"],
  // methods: {
  //   setJumlah(data) {
  //     this.jumlah_pesanans = data;
  //   },
  // },
  // mounted() {
  //   axios
  //     .get("http://localhost:3000/keranjangs")
  //     .then((response) => this.setJumlah(response.data))
  //     .catch((error) => console.log(error));
  // },
};
</script>

<style></style>
