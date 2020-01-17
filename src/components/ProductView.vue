<template>
    <div class="productView">
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
                    <div class="columns">
                        <div class="column is-half">
                            <div class="content">
                                <div class="title">{{ product.name }}</div>
                                <p align="left">{{ product.description }}</p>
                                <p align="left">{{ product.subdescription1 }}</p>
                                <p align="left">{{ product.subdescription2 }}</p>
                                <p align="left">{{ product.subdescription3 }}</p>
                            </div>
                        </div>
                        <div class="column is-half">
                            <figure class="image is-5by4">
                                <img :src="product.imgURL" />
                            </figure>
                        </div>
                    </div>
                    <br />
                    <div
                        class="tabs is-toggle is-medium is-fullwidth is-centered is-toggle-rounded"
                    >
                        <ul>
                            <li>
                                <a href="#">
                                    <span class="icon">
                                        <i class="fas fa-tag"></i>
                                    </span>
                                    <span>{{ $t('Products.buttons.label') }}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="icon">
                                        <i class="fas fa-file-alt"></i>
                                    </span>
                                    <span>{{ $t('Products.buttons.datasheet') }}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="icon">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </span>
                                    <span>{{ $t('Products.buttons.safetysheet') }}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="icon">
                                        <i class="fas fa-info-circle"></i>
                                    </span>
                                    <span>{{ $t('Products.buttons.brochure') }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// Import Fertilizer products
import { mapState, mapMutations } from 'vuex'
import Navbar from '@/components/Navbar.vue'

import { fertilizers } from '@/constants/products'

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
    data() {
        return {
            product: {},
        }
    },
    beforeMount() {
        this.getProduct()
    },
    methods: {
        getProduct() {
            let name = this.$route.params.name
            this.product = fertilizers[name]
            console.log(this.product)
        },
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

.hero.is-white .title,
p {
    color: #575757;
}

.content > .title {
    display: flex;
    size: 2.5rem;
}

.button {
    background-color: #ff715b;
    color: white;
    padding: 0 3vw 0 3vw;
}

.tabs span {
    color: #2b2b2b;
}

.tabs i {
    color: rgb(252, 74, 26);
}

.image {
    bottom: 15vh;
}

@media (max-width: 767px) {
    .button {
        width: 90vw;
    }
    #main-title {
        font-size: 2rem;
    }
    .tabs {
        color: rgb(252, 74, 26);
    }
}
</style>
