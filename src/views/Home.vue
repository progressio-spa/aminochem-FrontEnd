<template>
    <div class="home">
        <section class="hero is-success is-fullheight has-carousel" id="main">
            <div id="carousel-demo" class="hero-carousel">
                <div class="item-1">
                    <img
                        alt="Grass"
                        class="hero-background-home is-transparent"
                        src="@/assets/Home/cherry3.png"
                    />
                </div>
                <div class="item-2">
                    <img
                        alt="Grass"
                        class="hero-background-home is-transparent"
                        src="@/assets/Home/berries2.png"
                    />
                </div>
                <div class="item-3">
                    <img
                        alt="Grass"
                        class="hero-background-home is-transparent"
                        src="@/assets/Home/Home.png"
                    />
                </div>
            </div>
            <Navbar></Navbar>
            <div class="hero-body">
                <div class="container has-text-left" id="mainText">
                    <h1 class="title">
                        {{ $t('Home.MainText') }}
                    </h1>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h1 class="title">{{ $t('Home.products') }}</h1>
                <div class="columns">
                    <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="@/assets/Home/hoja.jpg" alt="leave" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">{{ $t('Home.card1') }}</p>
                                    </div>
                                </div>

                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris.

                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="@/assets/Home/tierra.jpg" alt="earth" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">{{ $t('Home.card2') }}</p>
                                    </div>
                                </div>

                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris.

                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="@/assets/Home/raiz.png" alt="seeder" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">{{ $t('Home.card3') }}</p>
                                    </div>
                                </div>

                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris.

                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero is-large has-background">
            <img alt="Bee" class="hero-background is-transparent" src="@/assets/Home/Footer.png" />
            <div class="hero-body"></div>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min'
import getAccessToken from '@/api/requests/authorization'

export default {
    name: 'home',
    components: {
        Navbar,
    },
    mounted() {
        getAccessToken()
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
}

#mainText {
    position: absolute;
    left: 10%;
    max-width: 49%;
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
