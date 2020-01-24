<template>
    <div class="products">
        <section class="hero is-white is-fullheight">
            <p>no ta funcionando esto</p>
        </section>
        <br />
        <br />
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
</style>
