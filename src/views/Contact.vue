<template>
    <div class="contact">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/Contact/tierra.jpg"
            />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1" id="main-title">
                        {{ $t('Contact.title') }}
                    </h1>
                </div>
            </div>
        </section>
        <br /><br />
        <section class="hero is-light is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        mapa :)
                    </h1>
                </div>
            </div>
        </section>
        <br /><br />
        <ContactBox></ContactBox>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import ContactBox from '@/components/ContactBox.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    ContactBox,
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

#main-title {
    display: flex;
}
</style>
