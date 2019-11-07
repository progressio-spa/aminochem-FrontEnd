<template>
    <div class="about">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
            <img alt="Grass" class="hero-background is-transparent" src="@/assets/Home/Home.png" />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {{ $t('AboutUs.title') }}
                    </h1>
                </div>
            </div>
        </section>
        <br />
        <br />
        <section class="main-content">
            <div class="container">
                <h1 class="subtitle is-3">{{ $t('AboutUs.subtitle') }}</h1>
                <br />
                <div class="content">
                    <p>{{ $t('AboutUs.paragraph1') }}</p>
                    <br />
                    <p>{{ $t('AboutUs.paragraph2') }}</p>
                </div>
                <br />
                <div class="columns">
                    <div class="column">
                        <figure class="image is-square">
                            <img src="https://bulma.io/images/placeholders/480x480.png" />
                        </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="https://bulma.io/images/placeholders/480x480.png" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <br /><br />
        <section class="team">
            <div class="container">
                <h1 class="subtitle is-3">{{ $t('AboutUs.team') }}</h1>
                <br />
                <div class="content">
                    <p>{{ $t('AboutUs.paragraph1') }}</p>
                    <br />
                    <p>{{ $t('AboutUs.paragraph2') }}</p>
                </div>
                <br />
            </div>
        </section>
        <br /><br />
        <section class="hero is-info is-large has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/AboutUs/Salmon.jpg"
            />
            <div class="hero-head">
                <div class="container">
                    <h1 class="title">
                        {{ $t('AboutUs.history') }}
                    </h1>
                </div>
            </div>
            <div class="hero-body"></div>
        </section>
        <br /><br />
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
.hero-head > .container {
    padding-top: 2%;
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
</style>
