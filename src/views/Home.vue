/* eslint-disable indent */
<template>
    <div class="home">
        <section class="hero is-fullheight has-carousel" id="main">
            <div id="carousel-demo" class="hero-carousel">
                <div class="item-1">
                    <img
                        alt="Grass"
                        class="hero-background-home is-transparent"
                        src="@/assets/Home/prueba-01.png"
                    />
                </div>
                <div class="item-2">
                    <img
                        alt="Grass"
                        class="hero-background-home is-transparent"
                        src="@/assets/Home/prueba-02.png"
                    />
                </div>
                <div class="item-3">
                    <img
                        alt="Grass"
                        class="hero-background-home is-transparent"
                        src="@/assets/Home/prueba-03.png"
                    />
                </div>
            </div>
            <Navbar></Navbar>
            <div class="hero-body">
                <div class="container has-text-left" id="mainText">
                    <!-- <h1 class="title">{{ $t('Home.MainText') }}</h1> -->
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h1 class="title">{{ $t('Home.products') }}</h1>
                <div class="columns">
                    <div class="column">
                        <div class="card aux">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="@/assets/Home/hoja.jpg" alt="leave" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">
                                            <router-link
                                                to="/products/fertilizers"
                                            >{{ $t('Home.card1') }}</router-link>
                                        </p>
                                    </div>
                                </div>

                                <div class="content">
                                    {{ $t('Home.description1') }}
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card aux">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="@/assets/Home/raices.jpg" alt="earth" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">
                                            <router-link
                                                to="/products/amendments"
                                            >{{ $t('Home.card2') }}</router-link>
                                        </p>
                                    </div>
                                </div>

                                <div class="content">
                                    {{ $t('Home.description2') }}
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card aux">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="@/assets/Home/gotas.jpg" alt="seeder" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">
                                            <router-link
                                                to="/products/rootBiostimulant"
                                            >{{ $t('Home.card3') }}</router-link>
                                        </p>
                                    </div>
                                </div>

                                <div class="content">
                                    {{ $t('Home.description3') }}
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero is-medium is-light">
            <div class="hero-body video-container">
                <div class="title-video">
                    <h1 class="title">Conócenos</h1>
                </div>
                <video width="1200" autoplay controls>
                    <source src="@/assets/Home/Video1.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min'
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'home',
    components: {
        Navbar,
    },
    mounted() {
        bulmaCarousel.attach('#carousel-demo', {
            slidesToScroll: 1,
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 10000,
            pagination: false,
        })
    },
}
</script>

<style scoped>
.media-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.hero.is-success {
    color: #23d160;
}
.hero.has-background {
    position: relative;
    overflow: hidden;
}
.hero-background {
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
}

.hero-background-home {
    position: relative;
    width: 100%;
}

#main .hero-body {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 5%;
}

.hero-body > .container > .title {
    font-size: 4.5rem;
}
.title {
    color: #585858;
    /*align-items: center;*/
    display: flex;
    flex-direction: column;
    align-items: center;
}

#mainText {
    position: absolute;
    left: 10%;
    max-width: 30%;
}

.divider {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid white;
    margin: 0 3%;
    padding: 0;
    z-index: 2;
}

a {
    color: #585858;
    cursor: pointer;
    text-decoration: none;
}

.video-container {
    padding-bottom: 4rem !important;
    padding-top: 4rem !important;
}

.title-video {
    margin-bottom: 6vh;
}

.aux {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
        0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
        0 16px 32px rgba(0, 0, 0, 0.07);
}
@media (max-width: 767px) {
    #mainText {
        left: 10%;
        max-width: 80%;
    }
    .hero-body > .container > .title {
        font-size: 3.5rem;
    }
}
@media (max-width: 1020px) {
    #mainText {
        left: 10%;
        max-width: 80%;
    }
}
</style>
