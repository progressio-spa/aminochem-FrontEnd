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
                                <p align="left">{{ product.subdescription4 }}</p>
                                <p align="left">{{ product.subdescription5 }}</p>
                            </div>
                            <figure class="image" style="width:20vw;heigth:auto;bottom:0vh">
                                <img :src="product.certificated" />
                            </figure>
                        </div>
                        <div class="column is-half">
                            <figure class="image is-5by4">
                                <img :src="product.imgURL" />
                            </figure>
                        </div>
                    </div>
                    <div
                        class="tabs tabs-main is-toggle is-medium is-fullwidth is-centered is-toggle-rounded"
                    >
                        <ul>
                            <li>
                                <a :href="labelPdf" target="_blank">
                                    <span class="icon">
                                        <i class="fas fa-tag"></i>
                                    </span>
                                    <span>{{ $t('Products.buttons.label') }}</span>
                                </a>
                            </li>
                            <li>
                                <a :href="dataSheetSource" target="_blank">
                                    <span class="icon">
                                        <i class="fas fa-file-alt"></i>
                                    </span>
                                    <span>{{ $t('Products.buttons.datasheet') }}</span>
                                </a>
                            </li>
                            <li>
                                <a :href="safetySheetSource" target="_blank">
                                    <span class="icon">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </span>
                                    <span>{{ $t('Products.buttons.safetysheet') }}</span>
                                </a>
                            </li>
                            <!-- <li>
                                <a href="#">
                                    <span class="icon">
                                        <i class="fas fa-info-circle"></i>
                                    </span>
                                    <span>{{ $t('Products.buttons.brochure') }}</span>
                                </a>
                            </li>-->
                        </ul>
                    </div>
                    <div class="tabs-mobile" style="display:none;">
                        <div
                            class="tabs is-toggle is-medium is-fullwidth is-centered is-toggle-rounded"
                        >
                            <ul>
                                <li>
                                    <a :href="labelPdf" target="_blank">
                                        <span class="icon">
                                            <i class="fas fa-tag"></i>
                                        </span>
                                        <span>{{ $t('Products.buttons.label') }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            class="tabs is-toggle is-medium is-fullwidth is-centered is-toggle-rounded"
                        >
                            <ul>
                                <li>
                                    <div v-if="this.$root.$i18n.locale === 'es'">
                                        <a :href="dataSheetPdf" target="_blank">
                                            <span class="icon">
                                                <i class="fas fa-file-alt"></i>
                                            </span>
                                            <span>{{ $t('Products.buttons.datasheet') }}</span>
                                        </a>
                                    </div>
                                    <div v-else>
                                        <a :href="dataSheetPdfEN" target="_blank">
                                            <span class="icon">
                                                <i class="fas fa-file-alt"></i>
                                            </span>
                                            <span>{{ $t('Products.buttons.datasheet') }}</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div
                            class="tabs is-toggle is-medium is-fullwidth is-centered is-toggle-rounded"
                        >
                            <ul>
                                <li>
                                    <div v-if="this.$root.$i18n.locale === 'es'">
                                        <a :href="safetySheetPdf" target="_blank">
                                            <span class="icon">
                                                <i class="fas fa-exclamation-triangle"></i>
                                            </span>
                                            <span>{{ $t('Products.buttons.safetysheet') }}</span>
                                        </a>
                                    </div>
                                    <div v-else>
                                        <a :href="safetySheetPdfEN" target="_blank">
                                            <span class="icon">
                                                <i class="fas fa-exclamation-triangle"></i>
                                            </span>
                                            <span>{{ $t('Products.buttons.safetysheet') }}</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// Import Fertilizer products
import Navbar from '@/components/Navbar.vue'

import { fertilizers } from '@/constants/products'

export default {
    name: 'home',
    components: {
        Navbar,
    },
    setup(props, { root }) {
        const products = fertilizers
        const productName = root.$route.params.name
        const labelPdf = require(`../assets/Products/${productName}1.pdf`)
        const dataSheetPdf = require(`../assets/Products/${productName}2.pdf`)
        const safetySheetPdf = require(`../assets/Products/${productName}3.pdf`)

        return {
            products,
            labelPdf,
            dataSheetPdf,
            safetySheetPdf,
            productName,
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
        },
        showSpecs() {
            var pdf = this.product.specs
            window.open('data:application/pdf,' + encodeURI(pdf))
        },
        showSecurity() {
            var pdf = this.product.security
            window.open('data:application/pdf,' + encodeURI(pdf))
        },
    },
    computed: {
        dataSheetSource() {
            return this.$root.$i18n.locale === 'es'
                ? require(`@/assets/Products/${this.productName}2.pdf`)
                : require(`@/assets/Products/${this.productName}2EN.pdf`)
        },
        safetySheetSource() {
            return this.$root.$i18n.locale === 'es'
                ? require(`@/assets/Products/${this.productName}3.pdf`)
                : require(`@/assets/Products/${this.productName}3EN.pdf`)
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

.tabs span {
    color: #2b2b2b;
}
.image {
    bottom: 15vh;
}

.tabs i {
    color: rgb(252, 74, 26);
}
@media screen and (max-width: 480px) {
    #main-title {
        font-size: 2rem;
    }
    .image {
        width: 100%;
        bottom: 0vh;
    }
    .column {
        height: 100%;
    }
    .columns {
        width: 100%;
    }
    .container {
        width: 100%;
    }
    .tabs-main {
        display: none;
    }
    .tabs-mobile {
        display: block !important;
    }
}
/* Mobile Horizontal y tablet vertical */
@media screen and (min-width: 481px) and (max-width: 768px) {
    #main-title {
        font-size: 2rem;
    }
    .image {
        width: 100%;
        bottom: 0vh;
    }
    .column {
        height: 100%;
    }
    .columns {
        width: 100%;
    }
    .container {
        width: 100%;
    }
}
/* Tablet Horizontal y escritorio normal */
@media screen and (min-width: 769px) and (max-width: 1279px) {
}
</style>
