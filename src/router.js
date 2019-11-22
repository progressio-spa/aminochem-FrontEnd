import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import DistributionNetwork from './views/DistributionNetwork.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Forgot from './views/Forgot.vue'
import Products from './views/Products.vue'
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
            path: '/products',
            name: 'products',
            component: Products,
        },
        {
            path: '/technicalSection',
            name: 'technicalSection',
            component: TechnicalSection,
        },
    ],
})
