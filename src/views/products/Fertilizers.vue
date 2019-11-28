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
        <keep-alive>
            <component v-bind:is="component" />
        </keep-alive>
        <br /><br />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import ProductView from '@/components/ProductView.vue'
import Products from '@/components/Products.vue'
// vue-function-api imports

export default {
    name: 'home',
    components: {
        Navbar,
        ProductView,
        Products,
    },
    data() {
        return {
            component: 'Products',
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
