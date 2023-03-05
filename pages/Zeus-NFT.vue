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
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div class="testimonials">
        <div class="card" v-for="user in testimonials" :key="user.name">
          <div class="user">
            <img :src="user.avatar" alt="User avatar" width="48">
            <div class="name">
              <h5>{{ user.name }}</h5>
              <h6>@{{ user.tag }}</h6>
            </div>
          </div>
          <p>{{ user.comment }}</p>
        </div>
      </div>
    </section>
    <section id="faq">
      <div class="title">
        <h2>Frequently<br> Asked Questions</h2>
        <p>Risus commodo id odio turpis pharetra elementum.<br> Pulvinar porta porta feugiat scelerisque in elit.<br>
          Morbi
          rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
      </div>
      <div class="faq">
        <div class="column">
          <div class="card" v-for="item in faq[0]" :key="item.question">
            <div class="view">
              <h4>{{ item.question }}</h4>
              <div class="btn" @click="showAnswer"></div>
            </div>
            <p>{{ item.answer }}</p>
          </div>
        </div>
        <div class="column">
          <div class="card" v-for="item in faq[1]" :key="item.question">
            <div class="view">
              <h4>{{ item.question }}</h4>
              <div class="btn" @click="showAnswer"></div>
            </div>
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </section>
    <section id="call-to-action">
      <div class="objects">
        <img src="../assets/Zeus-NFT/images/objects/object1.png" alt="Object 1" id="obj1">
        <img src="../assets/Zeus-NFT/images/objects/object2.png" alt="Object 2" id="obj2">
        <img src="../assets/Zeus-NFT/images/objects/object3.png" alt="Object 3" id="obj3">
        <img src="../assets/Zeus-NFT/images/objects/object4.png" alt="Object 4" id="obj4">
      </div>
      <h2>Ready to sell your NFTs?</h2>
      <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.<br> Morbi
        rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
      <button>Sell right now</button>
    </section>
  </main>
  <footer>
    <div class="links">
      <nav>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </nav>
      <div class="logo"></div>
      <nav>
        <a href="#">Cookies</a>
        <a href="#">Refunds</a>
        <a href="#">License</a>
      </nav>
    </div>
    <div class="divider"></div>
    <p class="copyright">Copyright 2022 Zeus UI</p>
  </footer>
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

const testimonials = [
  {
    name: "Brooklyn Simmons",
    tag: "brooklynsimmons",
    comment: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.",
    avatar: "https://i.imgur.com/8vXaE76.png"
  },
  {
    name: "Esther Howard",
    tag: "estherhhoward",
    comment: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.",
    avatar: "https://i.imgur.com/CBPKH92.png"
  },
  {
    name: "Kristin Watson",
    tag: "KristinWatson",
    comment: "Lectus dolor fermentum gravida ut sit vel. Enim. Lorem ipsum will never be the same again so purchase Zeus UI now or web trying.",
    avatar: "https://i.imgur.com/qxqC7ei.png"
  },
  {
    name: "Dianne Russell",
    tag: "DianneRussell",
    comment: "Eu luctus tincidunt vulputate praesent interdum proin. Magna gravida at pretium vitae. Viverra.",
    avatar: "https://i.imgur.com/G73WNyc.png"
  },
  {
    name: "Arlene McCoy",
    tag: "ArleneMcCoy",
    comment: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.",
    avatar: "https://i.imgur.com/xA1EXqz.png"
  },
  {
    name: "Leslie Alexander",
    tag: "LeslieAlexander",
    comment: "Varius bibendum quis ipsum sit. Enim ante donec erat neque semper. Consectetur sed imperdiet tortor duis nulla aliquet at integer.",
    avatar: "https://i.imgur.com/UrHLRbc.png"
  },
  {
    name: "Eleanor Pena",
    tag: "EleanorPena",
    comment: "Amet quam velit nisl et et. Fusce ante facilisi vulputate eget aliquet mi sem eu vulputate.",
    avatar: "https://i.imgur.com/EyKlVFI.png"
  },
  {
    name: "Jane Cooper",
    tag: "JaneCooper",
    comment: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis.",
    avatar: "https://i.imgur.com/CBPKH92.png"
  },
  {
    name: "Darlene Robertson",
    tag: "DarleneRobertson",
    comment: "Imperdiet sed tellus tempor vitae elit a. Arcu a.",
    avatar: "https://i.imgur.com/8vXaE76.png"
  },
]

const faq = [
  [
    {
      question: "What kind of websites I can build with Zeus UI?",
      answer: "This FAQ section is now in the expanded state, so you see how it looks. Rhoncus sed facilisi sed amet. Tristique commodo sodales."
    },
    {
      question: "What makes Zeus UI literally the best Web UI kit in the Internet?",
      answer: "This FAQ section is now in the expanded state, so you see how it looks. Rhoncus sed facilisi sed amet. Tristique commodo sodales."
    },
    {
      question: "How much does Zeus UI cost?",
      answer: "This FAQ section is now in the expanded state, so you see how it looks. Rhoncus sed facilisi sed amet. Tristique commodo sodales."
    },
    {
      question: "How long will you support Zeus UI?",
      answer: "This FAQ section is now in the expanded state, so you see how it looks. Rhoncus sed facilisi sed amet. Tristique commodo sodales."
    }
  ],
  [
    {
      question: "Can I use Zeus UI in commercial projects?",
      answer: "This FAQ section is now in the expanded state, so you see how it looks. Rhoncus sed facilisi sed amet. Tristique commodo sodales."
    },
    {
      question: "Can I resell Zeus UI?",
      answer: "This FAQ section is now in the expanded state, so you see how it looks. Rhoncus sed facilisi sed amet. Tristique commodo sodales."
    },
    {
      question: "Could you make me a website using Zeus UI?",
      answer: "This FAQ section is now in the expanded state, so you see how it looks. Rhoncus sed facilisi sed amet. Tristique commodo sodales."
    },
    {
      question: "Is that easy to design a website with Zeus UI?",
      answer: "This FAQ section is now in the expanded state, so you see how it looks. Rhoncus sed facilisi sed amet. Tristique commodo sodales."
    }
  ]
]

function showAnswer(event) {
  const element = event.target.parentNode.parentNode.querySelector("p")

  if (element.style.display === "block") {
    element.style.display = "none"
    event.target.style.transform = "none"
  } else {
    element.style.display = "block"
    event.target.style.transform = "rotate(180deg)"
  }

  setTimeout(function () {
    element.classList.toggle("show")
  }, 20);
}
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
