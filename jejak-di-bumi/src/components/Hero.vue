<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2 class="">
                <strong>Jejak Perjalanan Satu Tahun di Bumi,</strong>
                Momen ini diabadikan untuk Venus kecilku yg manis.
              </h2>
              <p>
                Dahulu kala, orang Mars berjumpa dgn orang Venus. Mereka jatuh
                cinta dan Menjalin Hubungan yang Membahagiakan karena Mereka
                Saling Menghormati & Menerima Perbedaan-Perbedaan Mereka. "John
                Gray. Ph.D."
              </p>
              <router-link class="btn btn-lg btn-success" to="/pictures">
                <b-icon-arrow-right></b-icon-arrow-right> Selengkapnya..
              </router-link>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-6">
          <img src="../assets/images/hero.png" width="100%" />
        </div> -->

        <!-- <div class="col-md-6">
          <video-embed css="embed-responsive-16by9" src="../assets/images/rumah.mp4"></video-embed>
        </div> -->
        

        <!-- <div class="col-md-6 embed-responsive embed-responsive-4by3">
          <iframe class="embed-responsive-item" src=".../assets/images/rumah.mp4" width="100%"></iframe>
        </div> -->

        <div class="col-md-6">
          <video class="img-fluid" autoplay loop muted>
            <source
              src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
              type="video/mp4"
            />
          </video>
        </div>

      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">

        <div class="col-md-6">
          <video class="img-fluid" autoplay loop muted>
            <source
              src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <!-- <div class="col-md-6 mb-3">
          <img src="../assets/images/hero.png" width="100%" />
        </div> -->

        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Jejak Perjalanan Satu Tahun di Bumi,</strong>
                Momen ini diabadikan untuk Venus kecilku yg manis.
              </h2>
              <p style="text-justify">
                Dahulu kala, orang Mars berjumpa dgn orang Venus. Mereka jatuh
                cinta dan Menjalin Hubungan yang Membahagiakan karena Mereka
                Saling Menghormati & Menerima Perbedaan-Perbedaan Mereka. "John
                Gray. Ph.D."
              </p>
              <button class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right>Selengkapnya..
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>