<template>
    <div class="BlogCardView">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/AboutUs/cerezas.jpg"
            />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1" id="main-title">{{ $t('TechnicalSection.title') }}</h1>
                </div>
            </div>
        </section>
        <section class="hero is-white">
            <div class="hero-body">
                <div class="container">
                    <div class="title is-3">{{title}}</div>
                    <br />
                    <div class="subtitle is-3" v-html="body"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    components: {
        Navbar,
    },
    props: ['title', 'body'],
}
</script>

<style scoped>
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

#main-title {
    display: flex;
    font-size: 3rem;
}

.hero.is-white .title,
.subtitle {
    color: #3d3d3d;
}

.subtitle {
    font-size: 14pt !important;
    text-align: left;
}

p {
    text-align: left;
    color: #585858;
}

@media screen and (max-width: 480px) {
    #main-title {
        font-size: 2rem;
    }
}
</style>