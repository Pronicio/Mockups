<template>
  <header>
    <p id="logo">Travelopia</p>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Premium</a>
      <a href="#">Blogs</a>
      <button>Explore</button>
    </nav>
  </header>
  <main>
    <h2>Mountains | Plains | Beaches</h2>
    <h1>Spend your<br> vacation with our<br> activites & places </h1>
    <p>The traveller where you can select your desired<br> activity and destinations of your choice for vacations.</p>
    <h3>Activity List</h3>
    <section class="activities">
      <div class="card c1">
        <img class="t1" src="../assets/Travelopia/images/activities/beach.png" alt="Beach Walking image" width="220">
        <h4>Beach Walking</h4>
        <div class="peoples">
          <div class="ic-peoples"></div>
          <p>60 people going</p>
        </div>
      </div>
      <div class="card c2">
        <img class="t2" src="../assets/Travelopia/images/activities/surfing.png" alt="Water surfing image" width="220">
        <h4>Water surfing</h4>
        <div class="peoples">
          <div class="ic-peoples"></div>
          <p class="light">12 people going</p>
        </div>
      </div>
      <div class="card c3">
        <img class="t3" src="../assets/Travelopia/images/activities/kayaking.png" alt="Kayaking image" width="220">
        <h4>Kayaking</h4>
        <div class="peoples">
          <div class="ic-peoples"></div>
          <p>31 people going</p>
        </div>
      </div>
    </section>
    <div class="boat"></div>
  </main>
  <footer>
    <div class="plate">
      <div class="icon camp"></div>
      <div class="text">
        <h6>Activity</h6>
        <h5>Sky Diving</h5>
      </div>
    </div>
    <div class="plate">
      <div class="icon location"></div>
      <div class="text">
        <h6>Location</h6>
        <h5>Dubai Marina</h5>
      </div>
    </div>
    <div class="plate">
      <div class="icon calendar"></div>
      <div class="text">
        <h6>Date</h6>
        <h5>24.06.2023</h5>
      </div>
    </div>
    <div class="plate">
      <div class="icon user"></div>
      <div class="text">
        <h6>Participant</h6>
        <h5>4 adults</h5>
      </div>
    </div>
    <div class="arrow">
      <div class="icon"></div>
    </div>
  </footer>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Travelopia',
})
</script>

<style scoped lang="scss">
@import '../assets/Travelopia/style.scss';
</style>

<style>
@import url('https://fonts.cdnfonts.com/css/amalfi-coast');
@import url('https://fonts.cdnfonts.com/css/circular-std');

@font-face {
  font-family: 'Romana BT';
  font-style: normal;
  font-weight: 700;
  src: local('Romana BT'), url('../assets/Travelopia/font/RomanaBT.woff') format('woff');
}

@font-face {
  font-family: 'Romana BT';
  font-style: normal;
  font-weight: 900;
  src: local('Romana BT'), url('../assets/Travelopia/font/RomanaBoldBT.woff') format('woff');
}

body {
  margin: 0;
  background: url("../assets/Travelopia/images/bg.png") no-repeat #F6F8FA;
  background-size: cover;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
