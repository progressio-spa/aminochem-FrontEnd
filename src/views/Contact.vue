<template>
    <div class="contact">
        <Navbar></Navbar>
        <section class="hero is-medium has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/Contact/slider.jpg"
            />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1" id="main-title">{{ $t('Contact.title') }}</h1>
                </div>
            </div>
        </section>
        <section class="hero is-medium" v-if="!isMobile">
            <div class="hero-body">
                <div class="container" id="maps">
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=1PSfvjj8mK4C0JncN7buDpp6uzaVEx_cy"
                        width="1000"
                        height="500"
                        frameborder="0"
                        style="border:0;"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </section>
        <ContactBox></ContactBox>
        <br />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import ContactBox from '@/components/ContactBox.vue'

export default {
    name: 'home',
    components: {
        Navbar,
        ContactBox,
    },
    setup() {
        const isMobile = window.innerWidth < 425;
        return {
            isMobile
        };
    },
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

#maps {
    height: 500px;
}

iframe {
    width: 100%;
    height: 500px;
}
#main-title {
    display: flex;
    color: white;
}
</style>
