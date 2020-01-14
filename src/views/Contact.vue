<template>
    <div class="contact">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
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
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container" id="maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.6699177581363!2d-70.72903213671648!3d-34.18035601296084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663434fdc75591b%3A0x2b22977ac88c2f81!2sCalle%20Bello%20Horizonte%20869%2C%20Rancagua%2C%20O&#39;Higgins!5e0!3m2!1ses-419!2scl!4v1578177395787!5m2!1ses-419!2scl"
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
}
</style>
