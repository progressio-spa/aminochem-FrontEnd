<template>
    <div class="products">
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
                                            <button @click="$store.commit('toggle')">
                                                {{ products[0].name }}
                                            </button>
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
// vue-function-api imports

// Import Fertilizer products
import { fertilizers } from '@/constants/products'

export default {
    name: 'home',
    components: {},
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
