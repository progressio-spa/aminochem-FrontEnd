<template>
    <div id="app">
        <div
            class="loader-wrapper"
            :class="{ 'loader-active': loaderIsActive }">
            <div class="loader is-loading"></div>
        </div>
        <div id="nav">
            <!-- <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>-->
        </div>
        <vue-progress-bar></vue-progress-bar>
        <!-- <Header></Header> -->
        <router-view />
        <Footer></Footer>
    </div>
</template>

<script>
import { computed } from 'vue-function-api';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'home',
    components: {
        Header,
        Footer,
    },
    setup(props, { root }) {
        const loaderIsActive = computed(() => root.$store.getters.getLoadingState);
        return {
            loaderIsActive,
        };
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400&display=swap');

#app {
    font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #585858;
}

.slider {
    outline: none !important;
}

.loader {
    height: 80px !important;
    width: 80px !important;
    border-left-color: rgba(252, 74, 26, 1) !important;
    border-bottom-color: rgba(252, 74, 26, 1) !important;
}

.loader-active {
    opacity: 1 !important;
    z-index: 1 !important;
}

.loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    opacity: 0;
    z-index: -1;
    transition: opacity .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
}

</style>
