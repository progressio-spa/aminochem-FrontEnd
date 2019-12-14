<template>
    <div class="products">
        <section class="hero is-white is-fullheight">
            <p>no ta funcionando esto</p>
        </section>
        <br /><br />
    </div>
</template>

<script>
// vue-function-api imports

// Import Fertilizer products
import { mapState, mapMutations } from 'vuex'
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
    computed: {
        ...mapState(['componentView']),
    },
    methods: {
        ...mapMutations(['toggle']),
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
