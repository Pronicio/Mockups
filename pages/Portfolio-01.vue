<template>
  <section>
    <nav>
      <a>About</a>
      <a>Portfolio</a>
      <a>Reference</a>
      <a>Contact</a>
    </nav>
    <main>
      <section class="home">
        <img src="../assets/Portfolio-01/images/main.png" alt="Main Picture" width="600"/>
        <div class="details">
          <h1>Hello, I`m a <br><b>UX/UI Designer</b><br> Illia Frunza</h1>
          <div class="buttons">
            <button class="hire selected">Hire me <div class="arrow"></div></button>
            <button class="portfolio">Portfolio <div class="arrow"></div></button>
            <button class="telegram"><div class="telegram"></div>Get in touch by Telegram <div class="arrow"></div></button>
          </div>
        </div>
      </section>
      <section class="description">
        <h3 class="author">Massimo Vignelli:</h3>
        <p>“The life of a designer is a constant struggle. Fight against ugliness. Just like a doctor fights a disease. For us, visual disease is what we have around us, and what we are trying to do is, one way or another, cure the environment through design.”</p>
      </section>
      <section class="projects">
        <h2>Portfolio</h2>
        <div class="mockups">
          <div class="file">
            <img src="../assets/Portfolio-01/images/Dribbble-1.png" alt="Dribbble Mockup"/>
            <h4>App Design</h4>
          </div>
          <div class="file">
            <img src="../assets/Portfolio-01/images/Behance-Travel.png" alt="Behance-Travel Mockup"/>
            <h4>Browse Service</h4>
          </div>
          <div class="file">
            <img src="../assets/Portfolio-01/images/Behance-S.png" alt="Behance-S Mockup"/>
            <h4>Web Design</h4>
          </div>
        </div>
        <div class="links">
          <p>See more</p>
          <button>Dribbble <div class="arrow"></div></button>
          <button class="selected">Behance <div class="arrow"></div></button>
          <button>Figma files <div class="arrow"></div></button>
        </div>
      </section>
      <section class="references">
        <h2>Reference</h2>
        <div class="cards">
          <div class="card">
            <h6>CEO of IT2School</h6>
            <h5>Valentina Gorodetki</h5>
            <div class="buttons">
              <button>LinkedIn <div class="arrow"></div></button>
              <button class="call"></button>
            </div>
          </div>
          <div class="card">
            <h6>CEO and Founder of Atom Space</h6>
            <h5>Ann Derevyanko</h5>
            <div class="buttons">
              <button>LinkedIn <div class="arrow"></div></button>
              <button class="call"></button>
            </div>
          </div>
          <div class="card next">
            <div class="plus"></div>
            <h4>You can be next</h4>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div class="contact">
        <p>Based in Maidstone, United Kingdom</p>
        <p>+44 7360 784977</p>
        <p>illia_frunza@ukr.net</p>
      </div>
      <div class="right">
        <div class="portfolio">
          <h5>Portfolio</h5>
          <a>Dribbble</a>
          <a>Behance</a>
          <a>Figma Files</a>
        </div>
        <div class="social_media">
          <h5>Social media</h5>
          <a>LinkedIn</a>
          <a>Facebook</a>
          <a>Instagram</a>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Portfolio-01',
})
</script>

<style scoped lang="scss">
@import '@/assets/Portfolio-01/style.scss';
</style>

<style>
body {
  background: #2D2D2D;
  overflow-y: auto;
}

::-webkit-scrollbar {
  width: 14px;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  box-shadow: inset 0 0 8px 8px #212226;
  border: solid 3px transparent;
}

::-webkit-scrollbar-track {
  border-radius: 8px;
  box-shadow: inset 0 0 8px 8px rgb(0 0 0 / 0%);
  border: solid 3px transparent;
}
</style>
