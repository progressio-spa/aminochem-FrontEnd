<template>
    <div class="technicalSection">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/AboutUs/Salmon.jpg"
            />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {{ $t('TechnicalSection.title') }}
                    </h1>
                </div>
            </div>
        </section>
        <section class="hero is-light is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Contenido blog
                    </h1>
                </div>
            </div>
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

.main-content {
    background-color: lightgray;
    height: 5rem;
    display: flex;
}
</style>
