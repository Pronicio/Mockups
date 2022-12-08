<template>
  <section>
    <nav>
      <img class="bitcoin" src="../assets/NFT-01/images/svg/bitcoin.svg" alt="bitcoin-logo"/>
      <div class="search-bar">
        <img class="search-icon" src="../assets/NFT-01/images/svg/search.svg" alt="search-logo"/>
        <input type="search" id="site-search" placeholder="Search related to NFT, Artist...">
      </div>
      <div class="navigation">
        <a href="#">Discover</a>
        <a href="#">About</a>
        <a href="#">Artists</a>
        <a href="#">Help</a>
      </div>
      <div class="connect-wallet-btn">
        <p>Connect Wallet</p>
      </div>
    </nav>

    <main>
      <div class="home">
        <div class="back"></div>
        <div class="stars s1"></div>
        <div class="stars s2"></div>
        <h1>Next Biggest Expedition in the World<br>
          of Cryptocurrency</h1>
        <img class="background" src="../assets/NFT-01/images/background.png" alt="background"/>
      </div>
      <div class="treasures">
        <h2>Rare and Super Unique<br>
          NFT that you’ll love!</h2>
        <div class="items">
          <button id="before"></button>
          <img src="../assets/NFT-01/images/items/NFT-base.png" alt="NFT-01"/>
          <img src="../assets/NFT-01/images/items/NFT-exemple.png" alt="NFT-01"/>
          <img src="../assets/NFT-01/images/items/NFT-base.png" alt="NFT-01"/>
          <button id="after"></button>
        </div>
        <button class="discover-btn">Discover More Treasures</button>
      </div>
      <div class="travel">
        <img src="../assets/NFT-01/images/travel.png" alt="Travel Image"/>
        <div class="travel-right">
          <h3>Travel With Us To<br>
            A Land of Adventure</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br> Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown</p>
          <div class="social">
            <button id="discord">Join Discord<i></i></button>
            <button id="instagram"></button>
            <button id="facebook"></button>
          </div>
        </div>
      </div>
      <div class="creators">
        <h3>Meet Our Creators</h3>
        <p>We believe artists need to be compensated<br> for every sale,not just the first one!</p>
        <div class="pictures">
          <img src="../assets/NFT-01/images/creators/1.png" alt="">
          <img src="../assets/NFT-01/images/creators/2.png" alt="">
          <img src="../assets/NFT-01/images/creators/3.png" alt="">
          <img src="../assets/NFT-01/images/creators/4.png" alt="">
          <img src="../assets/NFT-01/images/creators/5.png" alt="">
          <img src="../assets/NFT-01/images/creators/6.png" alt="">
          <img src="../assets/NFT-01/images/creators/7.png" alt="">
          <img src="../assets/NFT-01/images/creators/8.png" alt="">
          <img src="../assets/NFT-01/images/creators/9.png" alt="">
          <img src="../assets/NFT-01/images/creators/10.png" alt="">
        </div>
      </div>
    </main>

    <footer>
      <div class="footer-content">
        <img src="../assets/NFT-01/images/svg/logo-footer.svg" alt="logo-footer"/>
        <div class="site-map">
          <h6>SITEMAP</h6>
          <p>
            Home<br>
            Abouts<br>
            Growers<br>
            Merchants<br>
            Contact<br>
          </p>
        </div>
        <div class="socials">
          <h6>SOCIALS</h6>
          <p>
            Facebook<br>
            Linkedin<br>
            Instagram<br>
            Twitter<br>
          </p>
        </div>
        <div class="head-office">
          <h6>HEAD OFFICE</h6>
          <p>Xilliams Corner Wine © 2017. 1112 A Market St<br> # Ste B22, Charlottesville, CA 45565</p>
        </div>
        <div class="news-letter">
          <h6>NEWS LETTER</h6>
          <p>TODO !</p>
        </div>
        <div class="footer-bottom">
          <p>contact@lift.agency</p>
          <p>(123) 456-7890</p>
          <p>© 2020 Lift Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'NFT-01',
})
</script>

<style scoped>
@import '../assets/NFT-01/style.css';
</style>

<style>
body {
  overflow-y: auto;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
