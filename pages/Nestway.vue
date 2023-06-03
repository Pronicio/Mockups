<template>
    <div class="banner">
        <div class="left">
            <p>Get the most up-to-date information on the measures.</p>
            <b>Read post now
                <div class="arrow-icon"></div>
            </b>
        </div>
        <div class="right">
            <a href="#">Help Center</a>
            <a href="#">Blog</a>
            <a href="#">Currency - €</a>
            <a href="#">English</a>
        </div>
    </div>
    <div class="page">
        <header>
            <div class="left">
                <div class="logo"></div>
                <nav>
                    <a href="#">Explore anywhere</a>
                    <a href="#">Unique Activities</a>
                    <a href="#">More</a>
                </nav>
            </div>
            <nav class="right">
                <a href="#">Moscow</a>
                <div class="separator"></div>
                <a href="#">Login</a>
                <div class="light"></div>
            </nav>
        </header>
        <main>
            <form>
                <input type="text" placeholder="Where you want to go?">
                <div class="icon-container">
                    <div class="search-icon"></div>
                </div>
            </form>
            <div class="main-container">
                <div class="left">
                    <h2>Visit Sidney today.</h2>
                    <h1>Your home,<br>
                        your way.</h1>
                    <button>Explore Australia</button>
                </div>
                <div class="right">
                    <img src="https://i.imgur.com/z5jhlkl.png" alt="Portrait of a designer">
                    <div class="name">
                        <h6>Host by</h6>
                        <p>Melissa Melsony</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <footer></footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import '@/assets/Nestway/style.scss';
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Podkova:wght@700&display=swap');

body {
    background: #000000;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #FFFFFF;
    margin: 0;
}

::-webkit-scrollbar {
    height: 3px;
    width: 5px;
}

::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 4px;
}

::-webkit-scrollbar-track {
    background: transparent;
}
</style>
