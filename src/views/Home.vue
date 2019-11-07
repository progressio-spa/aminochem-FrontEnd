<template>
    <div class="home">
        <section class="hero is-success is-fullheight has-background" id="main">
            <img alt="Grass" class="hero-background is-transparent" src="@/assets/Home/Home.png" />
            <Navbar></Navbar>
            <div class="hero-body">
                <div class="container has-text-left">
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
                                    <img
                                        src="https://bulma.io/images/placeholders/1280x960.png"
                                        alt="Placeholder image"
                                    />
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
                                    <img
                                        src="https://bulma.io/images/placeholders/1280x960.png"
                                        alt="Placeholder image"
                                    />
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
                                    <img
                                        src="https://bulma.io/images/placeholders/1280x960.png"
                                        alt="Placeholder image"
                                    />
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
            <img alt="Bee" class="hero-background is-transparent" src="@/assets/Home/Footer.jpg" />
            <div class="hero-body"></div>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'home',
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.media-content {
    display: flex;
    flex-direction: column;
    align-items: center;
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
</style>
