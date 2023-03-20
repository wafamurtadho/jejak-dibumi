<template>
  <div class="card shadow card-picture"> 
    <img
      :src="'assets/images/' + picture.gambar"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title"><strong style="font-size:24px">{{ picture.nama }}</strong></h5>
      <h5 class="card-text"><size style="font-size:18px"> Tanggal : {{ picture.tanggal }}</size></h5>
      <h5 class="card-text"><size style="font-size:18px">Tema : {{ picture.tema }}</size></h5>
      <h5 class="card-text"><size style="font-size:18px">{{ picture.lokasi }}</size></h5>
      <i class="bi bi-ticket-detailed"></i>
      <router-link class="btn btn-success" :to="'/pictures/' + picture.id"
        ><b-icon-emoji-smile></b-icon-emoji-smile> Details</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["picture"],
};
</script>

<style>
</style>