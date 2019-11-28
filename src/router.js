import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import DistributionNetwork from './views/DistributionNetwork.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Forgot from './views/Forgot.vue'
import Fertilizers from './views/products/Fertilizers.vue'
import Amendments from './views/products/Amendments.vue'
import Insecticide from './views/products/Insecticide.vue'
import RootBiostimulant from './views/products/RootBiostimulant.vue'
import TechnicalSection from './views/TechnicalSection.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
        {
            path: '/distributionNetwork',
            name: 'DistributionNetwork',
            component: DistributionNetwork,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/forgot',
            name: 'forgot',
            component: Forgot,
        },
        {
            path: '/products/fertilizers',
            name: 'fertilizers',
            component: Fertilizers,
        },
        {
            path: '/products/amendments',
            name: 'amendments',
            component: Amendments,
        },
        {
            path: '/products/insecticide',
            name: 'insecticide',
            component: Insecticide,
        },
        {
            path: '/products/rootBiostimulant',
            name: 'rootBiostimulant',
            component: RootBiostimulant,
        },
        {
            path: '/technicalSection',
            name: 'technicalSection',
            component: TechnicalSection,
        },
    ],
})
