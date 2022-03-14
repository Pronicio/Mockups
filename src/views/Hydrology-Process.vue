<script setup>

import {onMounted, onUnmounted} from "vue";

onMounted(() => {
  document.body.style.overflow = "hidden";
})

onUnmounted(() => {
  document.body.style.overflow = "auto";
})

function clickOnMe() {
  window.open("https://pronicio.dev")
}

</script>

<template>
  <div class="HydrologyProcess">
    <div class="items_absolute">
      <div id="circle"></div>
      <div id="rectangle"></div>
      <div id="square"></div>
      <div id="triangle"></div>
    </div>

    <nav>
      <div class="logo"></div>
      <li class="navigation">
        <ul><a href="#">Accueil</a></ul>
        <ul><a href="#">Page 2</a></ul>
        <ul><a href="#">Page 3</a></ul>
      </li>
    </nav>

    <main>
      <div class="title">
        <h3>FAVOURITE TOPIC</h3>
        <h1>Hydrology <br> Process</h1>
      </div>

      <img class="island" src="../assets/HydrologyProcess/images/island.png" alt="island"/>

      <p class="description">Understanding the Hydrological Cycle: <br> Types and Processes Occurrence</p>

      <div class="next">
        <a class="btn">GO</a>
        <p>Go to the next design</p>
        <a class="lets-go"></a>
      </div>

      <div class="me" @click="clickOnMe"></div>
    </main>
  </div>
</template>

<style scoped>
@import "../assets/HydrologyProcess/style.css";
</style>
