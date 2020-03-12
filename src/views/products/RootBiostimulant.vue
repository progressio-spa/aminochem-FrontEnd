<template>
    <div class="rootBioestimulant">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/Products/hoja.jpg"
            />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title" id="main-title">{{ $t('Products.rootBiostimulant.title') }}</h1>
                </div>
            </div>
        </section>
        <section class="hero is-white is-fullheight">
            <div class="hero-body" style="display: inline-block;">
                <div class="container">
                    <div class="columns is-multiline is-desktop">
                        <div
                            class="column is-one-third"
                            v-for="(product, index) in products"
                            :key="index"
                        >
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <router-link
                                            :to="{
                                                    name: 'rootBiostimulant-show',
                                                    params: { name: index },
                                                }"
                                        >
                                            <img :src="product.imgURL" />
                                        </router-link>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import ProductView from '@/components/ProductView.vue'

// vue-function-api imports

// Import Fertilizer products
import { naturalOil } from '@/constants/products'

export default {
    name: 'home',
    components: {
        Navbar,
        ProductView,
    },
    setup() {
        const products = naturalOil
        return {
            products,
        }
    },
    data() {
        return {
            products: naturalOil,
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

.card {
    max-width: 70%;
    margin: auto;
}

.card-header {
    background-color: gray;
}

.hero.is-white .title {
    color: white;
}

a {
    color: white;
}

@media (max-width: 767px) {
    #main-title {
        font-size: 2rem;
    }
}
</style>
