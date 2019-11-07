<template>
    <div id="app">
        <div id="nav">
            <!-- <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>-->
        </div>
        <Header></Header>
        <router-view />
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Header,
    Footer,
  },
};
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
</style>
