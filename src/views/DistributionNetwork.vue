<template>
    <div class="distributionNetwork">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/Network/Chile.jpg"
            />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {{ $t('Network.title') }}
                    </h1>
                </div>
            </div>
        </section>
        <section class="main-content">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h1 class="subtitle is-4 has-text-grey-darker">
                            {{ $t('Network.option1') }}
                        </h1>
                    </div>
                    <div class="column">
                        <h1 class="subtitle is-4 has-text-grey-darker">
                            {{ $t('Network.option2') }}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero is-light is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Vista interactiva mapas :)
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
.subtitle {
    text-decoration: underline;
    text-decoration-color: orange;
}

.main-content {
    background-color: lightgray;
    height: 5rem;
    display: flex;
}

.main-content > .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
