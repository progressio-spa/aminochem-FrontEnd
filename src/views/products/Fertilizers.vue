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
                    <h1 class="title" id="main-title">{{ $t('Products.fertilizers.title') }}</h1>
                </div>
            </div>
        </section>
        <section class="hero is-white is-fullheight">
            <div class="hero-body">
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
                                        <img :src="product.imgURL" />
                                    </figure>
                                </div>
                                <div class="card-header">
                                    <div class="card-header-title is-centered">
                                        <div class="title is-4">
                                            <router-link
                                                :to="{
                                                    name: 'fertilizers-show',
                                                    params: { name: index },
                                                }"
                                            >{{ product.name }}</router-link>
                                        </div>
                                    </div>
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
import Products from '@/components/Products.vue'

import { fertilizers } from '@/constants/products'

export default {
    name: 'home',
    components: {
        Navbar,
        ProductView,
        Products,
    },
    setup() {
        const products = fertilizers
        const url = '/static/product-logo/Variantes-productosColor-03.png'
        return {
            products,
            url,
        }
    },
    data() {
        return {
            products: fertilizers,
        }
    },
    mounted() {
        console.log(this.products)
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
