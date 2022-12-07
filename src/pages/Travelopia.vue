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
    <section class="activities">
      <div class="card c1">
        <img class="t1" src="../assets/Travelopia/images/activities/beach.png" alt="Beach Walking image" width="220">
        <h4>Beach Walking</h4>
        <p>60 people going</p>
      </div>
      <div class="card c2">
        <img class="t2" src="../assets/Travelopia/images/activities/surfing.png" alt="Water surfing image" width="220">
        <h4>Water surfing</h4>
        <p>12 people going</p>
      </div>
      <div class="card c3">
        <img class="t3" src="../assets/Travelopia/images/activities/kayaking.png" alt="Kayaking image" width="220">
        <h4>Kayaking</h4>
        <p>31 people going</p>
      </div>
    </section>
  </main>
  <footer></footer>
</template>

<script>
export default {
  name: "Travelopia"
}
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

body {
  margin: 0;
  background: url("../assets/Travelopia/images/bg.png") no-repeat;
  background-size: cover;
}
</style>
