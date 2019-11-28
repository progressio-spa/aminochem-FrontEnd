<template>
    <div class="fertilizers">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/Products/hoja.jpg"
            />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title" id="main-title">
                        {{ $t('Products.fertilizers.title') }}
                    </h1>
                </div>
            </div>
        </section>
        <section class="hero is-white is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-desktop">
                        <div class="column is-one-third">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img
                                            src="https://bulma.io/images/placeholders/480x480.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div class="card-header">
                                    <div class="card-header-title is-centered">
                                        <div class="title is-4">
                                            {{ products[0].name }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                        <div class="column is-one-third">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img
                                            src="https://bulma.io/images/placeholders/480x480.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div class="card-header">
                                    <div class="card-header-title is-4 is-centered">
                                        <div class="title is-4">
                                            {{ products[1].name }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                        <div class="column is-one-third">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img
                                            src="https://bulma.io/images/placeholders/480x480.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div class="card-header">
                                    <div class="card-header-title is-centered">
                                        <div class="title is-4">
                                            {{ products[2].name }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                    <div class="columns is-desktop">
                        <div class="column is-one-third">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img
                                            src="https://bulma.io/images/placeholders/480x480.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div class="card-header">
                                    <div class="card-header-title is-centered">
                                        <div class="title is-4">
                                            {{ products[3].name }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                        <div class="column is-one-third">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img
                                            src="https://bulma.io/images/placeholders/480x480.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div class="card-header">
                                    <div class="card-header-title is-centered">
                                        <div class="title is-4">
                                            {{ products[4].name }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                        <div class="column is-one-third">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img
                                            src="https://bulma.io/images/placeholders/480x480.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div class="card-header">
                                    <div class="card-header-title is-centered">
                                        <div class="title is-4">
                                            {{ products[5].name }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                    <div class="columns is-desktop">
                        <div class="column is-one-third is-offset-one-third">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img
                                            src="https://bulma.io/images/placeholders/480x480.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div class="card-header">
                                    <div class="card-header-title is-centered">
                                        <div class="title is-4">
                                            {{ products[6].name }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br /><br />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

// vue-function-api imports
import { onMounted, value, computed } from 'vue-function-api'

// Import Fertilizer products
import { fertilizers } from '../../constants/products'

export default {
    name: 'home',
    components: {
        Navbar,
    },
    setup() {
        const products = fertilizers
        return {
            products,
        }
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

#main-title {
    display: flex;
    font-size: 3rem;
}

.card-header {
    background-color: gray;
}

.hero.is-white .title {
    color: white;
}

@media (max-width: 767px) {
    #main-title {
        font-size: 2rem;
    }
}
</style>
