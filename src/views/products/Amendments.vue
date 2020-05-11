<template>
    <div class="amendments">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/Products/hoja.jpg"
            />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title" id="main-title">{{ $t('Products.amendments.title') }}</h1>
                </div>
            </div>
        </section>
        <section class="hero is-white is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column is-half">
                            <div class="content">
                                <div class="title">{{ $t('Products.amendments.name') }}</div>
                                <p align="left">{{ $t('Products.amendments.description1') }}</p>
                                <p align="left">{{ $t('Products.amendments.description2') }}</p>
                                <p align="left">{{ $t('Products.amendments.description3') }}</p>
                                <p align="left">{{ $t('Products.amendments.description4') }}</p>
                                <p align="left">{{ $t('Products.amendments.description5') }}</p>
                            </div>
                        </div>
                        <div class="column is-half">
                            <figure class="image is-5by4">
                                <img :src="url" />
                            </figure>
                        </div>
                    </div>
                    <br />
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
                                    <a :href="dataSheetSource" target="_blank">
                                        <span class="icon">
                                            <i class="fas fa-file-alt"></i>
                                        </span>
                                        <span>{{ $t('Products.buttons.datasheet') }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            class="tabs is-toggle is-medium is-fullwidth is-centered is-toggle-rounded"
                        >
                            <ul>
                                <li>
                                    <a :href="safetySheetSource" target="_blank">
                                        <span class="icon">
                                            <i class="fas fa-exclamation-triangle"></i>
                                        </span>
                                        <span>{{ $t('Products.buttons.safetysheet') }}</span>
                                    </a>
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
// @ is an alias to /src
import { onMounted, value, computed } from 'vue-function-api'
import Navbar from '@/components/Navbar.vue'

// vue-function-api imports

// Import Fertilizer products
import { amendments } from '../../constants/products'

import labelPdf from '../../assets/Products/bioamino1.pdf'
import dataSheetPdf from '../../assets/Products/bioamino2.pdf'
import safetySheetPdf from '../../assets/Products/bioamino3.pdf'

export default {
    name: 'home',
    components: {
        Navbar,
    },
    setup() {
        const products = amendments
        const url = '/static/product-logo/Variantes-productosColor-06.png'
        return {
            products,
            url,
            labelPdf,
            dataSheetPdf,
            safetySheetPdf,
        }
    },
    computed: {
        dataSheetSource() {
            return this.$root.$i18n.locale === 'es'
                ? require(`../../assets/Products/bioamino2.pdf`)
                : require(`../../assets/Products/bioamino2EN.pdf`)
        },
        safetySheetSource() {
            return this.$root.$i18n.locale === 'es'
                ? require(`../../assets/Products/bioamino3.pdf`)
                : require(`../../assets/Products/bioamino3EN.pdf`)
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
    bottom: 10vh;
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
</style>
