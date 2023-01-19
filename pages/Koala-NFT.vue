<template>
  <div class="filter"></div>
  <div class="ellipse"></div>
  <nav>
    <div class="left">
      <h3>Koala<b>.</b></h3>
    </div>
    <div class="right">
      <a href="#">Home</a>
      <a href="#">Gallery</a>
      <a href="#">Blog</a>
      <a href="#">Knet</a>
    </div>
  </nav>
  <main>
    <div class="title">
      <h1>Koala<br>
        <b>Intelligence</b><br>
        Agency<br>
      </h1>
      <p>A collection of 10,000 worldly Koalas each with their unique skillsets.<br>
        Their mission is to protect the world from evil.</p>
      <div class="circle">
        <div class="logo"></div>
        <div class="btn-round">
        </div>
      </div>
    </div>
    <div class="other">
      <img src="../assets/Koala-NFT/images/Koala.png" alt="Koala" width="550"/>
      <div class="links">
        <div id="twitter"></div>
        <div id="discord"></div>
        <div id="instagram"></div>
        <div id="facebook"></div>
        <div id="tiktok"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Koala-NFT"
}
</script>

<style scoped lang="scss">
@import '@/assets/Koala-NFT/style.scss';
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
@import url('https://api.fontshare.com/v2/css?f[]=general-sans@400&display=swap');

body {
  background: #060707;
  font-family: 'IBM Plex Mono', sans-serif;
  overflow: hidden;
}

::selection {
  color: #082419;
  background: #082419;
}

span {
  position: absolute;
  left: 50%;
  font-size: 1.2rem;
  transform-origin: 0 80px;
  text-transform: uppercase;
  font-family: 'IBM Plex Mono', sans-serif;
}
</style>
