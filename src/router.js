import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import DistributionNetwork from './views/DistributionNetwork.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Forgot from './views/Forgot.vue';
import Products from './views/products/Products.vue';
import Fertilizers from './views/products/Fertilizers.vue';
import ProductView from './components/ProductView.vue';
import ProductViewOil from './components/ProductViewOil.vue';
import BlogCardView from './components/BlogCardView.vue';
import Amendments from './views/products/Amendments.vue';
import Insecticide from './views/products/Insecticide.vue';
import RootBiostimulant from './views/products/RootBiostimulant.vue';
import TechnicalSection from './views/TechnicalSection.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
      component: Products,
      children: [
        {
          path: 'amendments',
          component: Amendments,
        },
        {
          path: 'insecticide',
          component: Insecticide,
        },
        {
          path: 'rootBiostimulant',
          component: RootBiostimulant,
        },
        {
          path: 'rootBiostimulant/:name',
          name: 'rootBiostimulant-show',
          component: ProductViewOil,
        },
        {
          path: 'fertilizers/',
          component: Fertilizers,
        },
        {
          path: 'fertilizers/:name',
          name: 'fertilizers-show',
          component: ProductView,
        },
      ],
    },
    {
      path: '/technicalSection',
      name: 'technicalSection',
      component: TechnicalSection,
    },
    {
      path: '/technicalSection/:name',
      name: 'technicalSection-show',
      component: BlogCardView,
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
