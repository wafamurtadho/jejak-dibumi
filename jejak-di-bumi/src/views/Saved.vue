<template>
  <div>
    <Navbar />
    <div class="container">
      <b-card>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/watch?v=TrVW14OoIA0"
            allowfullscreen
          ></iframe>
        </div>
      </b-card>

    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Saved",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>