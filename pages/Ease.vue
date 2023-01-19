<template>
  <header>
    <div class="logo"></div>
    <nav>
      <a href="#">Collesctions</a>
      <a href="#">Blog</a>
      <a href="#">About</a>
      <a href="#">Contacts</a>
    </nav>
  </header>
  <main>
    <section class="left">
      <p>Collection of lighting is inspired by the geometric works of the great Suprematist artists Kissitzky and
        Kazimir Malevich.
        Suprematism is a modernist movement in the art of the early twentieth century, focused on the basic geometric
        forms, such as circles, squares, lines and rectangles. The geometric structure of the lamps will always look
        like a small art objects in your house.
      </p>
      <div class="selection">
        <div class="characteristics">
          <p>Material: Copper</p>
          <p>Dimensions (cm): H 33 x W 15 x D 15</p>
          <p>Net Weight: 2,5 kg</p>
          <p>Electrification: LED 10W | G9 |  220-240V | 50 Hz</p>
        </div>
        <div class="ellipse"></div>
        <div class="selected-lamp" id="1"></div>
        <div class="selector"></div>
      </div>
    </section>
    <section class="right"></section>
  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Ease',
})
</script>

<style scoped lang="scss">
@import '@/assets/Ease/style.scss';
</style>

<style>
@import url('https://fonts.cdnfonts.com/css/sf-compact-display');

body {
  background: #DBEEEE;
  font-family: 'SF Compact Display', sans-serif;
  overflow: hidden;
  margin: 16px;
}
</style>
