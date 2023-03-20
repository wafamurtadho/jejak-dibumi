<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />

      <div class="row mt-4">
        <div class="col text-center">
          <h2>
            Best
            <strong>Pictures <b-icon-camera></b-icon-camera> </strong>
          </h2>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="picture in pictures" :key="picture.id">
          <Card :picture="picture"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Card,
  },
  data() {
    return {
      pictures: [],
    };
  },
  methods: {
    setPictures(data) {
      this.pictures = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-pictures")
      .then((response) => this.setPictures(response.data))
      .catch((error) => console.log(error))
  },
};
</script>
