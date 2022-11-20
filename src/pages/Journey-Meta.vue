<template>
  <header>
    <div class="logo">
      <img src="../assets/Journey-Meta/images/logo.svg" width="22" alt="Logo of journey.meta">
      <p>journey.meta</p>
    </div>
    <nav>
      <a href="#">nos service</a>
      <a href="#">nos destinations</a>
      <a href="#">nos offres</a>
      <button>votre espace</button>
    </nav>
  </header>
  <section class="bg"></section>
  <main>
    <div class="action">
      <button>s’évader</button>
    </div>
    <div class="arrows"></div>
    <section class="takeoff">
      <h2>.une simple phrase et vous décollez</h2>
      <p>Demandez à notre intelligence artificielle où vous souhaitez voyager et nous nous chargerons de vous guider
        vers la destination qui vous convient. Grâce à sa commande vocale, il est facile de s'adapter à votre style de
        vie et de répondre à vos envies du moment. N'attendez plus et dites-lui où vous souhaitez aller !</p>
      <div class="dialog">
        <button>Bonjour</button>
        <button class="me fill">Bonjour Clara</button>
        <button>Où voulez-vous aller aujourd'hui ?</button>
        <button class="me fill">Je ne sais pas, qu'est-ce que vous suggérez ?</button>
        <button>Nous pourrions aller à la plage ?</button>
        <button class="me fill">D'accord, allons-y !</button>
      </div>
      <img src="../assets/Journey-Meta/images/users/1.png" width="382" alt="User 1">
    </section>
    <section class="travel">
      <h2>.une méthode de voyage respectueuse</h2>
      <p class="paragraph">Pour éviter les émissions de CO2, les vols sont à éviter. Mais pas les voyages ! Grâce à la réalité virtuelle,
        il est possible de découvrir des paysages de toute la planète sans bouger de chez soi. Il suffit de disposer
        d’un casque de réalité virtuelle et d’une manette de jeu. Une fois équipés de cet ensemble, l’utilisateur peut
        naviguer dans l’espace virtuel autour de lui comme s’il se trouvait en plein cœur de la jungle amazonienne, dans
        les ruelles de Rio de Janeiro ou sur les bords de la mer Morte.</p>
      <div class="engines">
        <div class="engine">
          <img src="../assets/Journey-Meta/images/engines/1.png" width="100" alt="Engine 1">
          <p>Réduisez les emissions de CO2</p>
        </div>
        <div class="engine">
          <img src="../assets/Journey-Meta/images/engines/2.png" width="100" alt="Engine 2">
          <p>Plongez vous dans un monde immersif</p>
        </div>
        <div class="engine">
          <img src="../assets/Journey-Meta/images/engines/3.png" width="100" alt="Engine 3">
          <p>Voyagez sans bouger de chez vous</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "AI",
  mounted() {
  }
}
</script>

<style scoped lang="scss">
@import '../assets/Journey-Meta/style.scss';
</style>

<style>
@import url('https://api.fontshare.com/v2/css?f[]=clash-display@400&f[]=epilogue@400,300,500&display=swap');

body {
  background: linear-gradient(180deg, #E2563F 18.72%, #9360FF 62.34%);
  font-family: 'Clash Display', sans-serif;
  font-weight: 400;
}

::selection {
  color: #082419;
  background: #082419;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
