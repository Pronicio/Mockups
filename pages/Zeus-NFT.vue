<template>
  <header>
    <nav>
      <a href="#">Home</a>
      <a href="#">University</a>
      <a href="#">Courses</a>
    </nav>
    <div class="logo"></div>
    <nav>
      <a href="#">Use cases</a>
      <a href="#">Plans</a>
      <a href="#">Resources</a>
    </nav>
  </header>
  <main>
    <section id="home">
      <div class="back"></div>
      <div class="objects">
        <img src="../assets/Zeus-NFT/images/objects/object1.png" alt="Object 1" id="obj1">
        <img src="../assets/Zeus-NFT/images/objects/object2.png" alt="Object 2" id="obj2">
        <img src="../assets/Zeus-NFT/images/objects/object3.png" alt="Object 3" id="obj3">
        <img src="../assets/Zeus-NFT/images/objects/object4.png" alt="Object 4" id="obj4">
      </div>
      <h1>Create & sell<br> your NFTs today</h1>
      <p>Velit, odio bibendum eu, viverra sit laoreet posuere. Ut scelerisque posuere massa amet.<br> Ornare lacinia
        vitae
        at vestibulum morbi. Volutpat libero curabitur feugiat risus dui pulvinar. Elementum.</p>
      <button>Let’s sell</button>
      <div class="brands">
        <img src="../assets/Zeus-NFT/images/brands/brand1.png" alt="Brand 1">
        <img src="../assets/Zeus-NFT/images/brands/brand2.png" alt="Brand 2">
        <img src="../assets/Zeus-NFT/images/brands/brand3.png" alt="Brand 3">
        <img src="../assets/Zeus-NFT/images/brands/brand4.png" alt="Brand 4">
        <img src="../assets/Zeus-NFT/images/brands/brand5.png" alt="Brand 5">
        <img src="../assets/Zeus-NFT/images/brands/brand6.png" alt="Brand 6">
      </div>
    </section>
    <section id="collection">
      <h2>Hottest Collections</h2>
      <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.<br> Morbi
        rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
      <div class="collection">
        <div class="nft" v-for="nft in nfts" :key="nft.name">
          <img :src="`_nuxt/assets/Zeus-NFT/images/nfts/${nft.name}.png`" :alt="nft.name">
          <h4>{{ nft.name }}</h4>
          <p>{{ nft.description }}</p>
        </div>
      </div>
    </section>
    <section id="team">
      <h2>Our Team</h2>
      <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.<br> Morbi
        rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
      <div class="team">
        <div class="user" v-for="user in team" :key="user.name">
          <img :src="`_nuxt/assets/Zeus-NFT/images/team/${user.name}.png`" :alt="user.name">
          <h4>{{ user.name }}</h4>
          <p>{{ user.status }}</p>
        </div>
      </div>
    </section>
    <section id="services">
      <h2>We Provide</h2>
      <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.<br> Morbi
        rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
      <div class="services">
        <div class="service">
          <img src="../assets/Zeus-NFT/images/services/home.svg" alt="Home Icon">
          <h4>Host your NFTs</h4>
          <p>Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices</p>
        </div>
        <div class="service">
          <img src="../assets/Zeus-NFT/images/services/stats.svg" alt="Stats Icon">
          <h4>See your sales</h4>
          <p>Integer ante non nunc, eget est justo vel semper nunc. Lacus</p>
        </div>
        <div class="service">
          <img src="../assets/Zeus-NFT/images/services/lock.svg" alt="Lock Icon">
          <h4>Secure wallet</h4>
          <p>Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.</p>
        </div>
        <div class="service">
          <img src="../assets/Zeus-NFT/images/services/toilet-paper.svg" alt="Toilet paper Icon">
          <h4>No scam</h4>
          <p>Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Zeus-NFT',
})

const nfts = [
  {
    name: "Moonbirds",
    description: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit."
  },
  {
    name: "Clone X - X Takashi Murakami",
    description: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac."
  },
  {
    name: "Mutant Ape Yacht Club",
    description: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus."
  },
  {
    name: "MOAR by Joan Cornella",
    description: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit."
  },
  {
    name: "Doodles",
    description: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac."
  },
  {
    name: "KIWAMI Genesis",
    description: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus."
  },
  {
    name: "Arcade Land",
    description: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit."
  },
  {
    name: "Goons of Balatroon",
    description: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac."
  },
  {
    name: "Meta Toy DragonZ",
    description: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus."
  }
]

const team = [
  { name: "Guy Hawkins", status: "CEO" },
  { name: "Jane Cooper", status: "COO" },
  { name: "Darrell Steward", status: "CTO" },
  { name: "Dianne Russell", status: "CDO" }
]
</script>

<style scoped lang="scss">
@import '@/assets/Zeus-NFT/style.scss';
</style>

<style>
@import url(https://fonts.bunny.net/css?family=space-grotesk:400,500|syne:400,500,600,700);

body {
  background: #FCFAFF;
  font-family: 'Space Grotesk', sans-serif;
  margin: 0;
  overflow-x: hidden;
}

::selection {
  color: #532C59;
  background: #FFFFFF;
}
</style>
