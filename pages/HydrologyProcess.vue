<template>
  <section>
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

      <img class="island" src="@/assets/HydrologyProcess/images/island.png" alt="island"/>

      <p class="description">Understanding the Hydrological Cycle: <br> Types and Processes Occurrence</p>

      <div class="next">
        <a class="btn">GO</a>
        <p>Go to somewhere</p>
        <a class="lets-go"></a>
      </div>

      <div class="me"></div>
    </main>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Hydrology Process',
})
</script>

<style scoped>
@import '@/assets/HydrologyProcess/style.css';
</style>

<style>
body {
  background: none;
  overflow: hidden;
}
</style>
