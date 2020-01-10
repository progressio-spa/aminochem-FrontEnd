<template>
    <div class="hero-head">
        <header
          class="navbar is-green"
          :class="{scrolled: scrollPosition > 52}">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <router-link to="/">
                            <img src="@/assets/logo-aminochem.png" alt="Aminochem" />
                        </router-link>
                    </a>
                    <span
                        class="navbar-burger burger"
                        data-target="navbarMenuHeroC "
                        @click="showNavbarBurger"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div
                    id="navbarMenuHeroC"
                    v-bind:class="{
                        'navbar-menu': true,
                        'is-active': showNavbarMobile,
                    }"
                >
                    <div class="navbar-end">
                        <a
                            :class="[
                                currentPage.localeCompare('/') == 0 ? activeClass : '',
                                'navbar-item',
                            ]"
                        >
                            <router-link to="/">{{ $t('Navbar.home') }}</router-link>
                        </a>
                        <a
                            :class="[
                                currentPage.localeCompare('/') == 0 ? activeClass : '',
                                'navbar-item',
                            ]"
                        >
                            <router-link to="/about">{{ $t('Navbar.aboutUs') }}</router-link>
                        </a>
                        <a class="navbar-item has-dropdown is-hoverable" id="drop">
                            <a class="navbar-link is-arrowless">{{ $t('Navbar.products') }}</a>

                            <div class="navbar-dropdown is-boxed">
                                <a class="navbar-item" id="drop-item">
                                    <router-link
                                        to="/products/fertilizers"
                                    >{{ $t('Navbar.dropdown11') }}</router-link>
                                </a>
                                <a class="navbar-item" id="drop-item">
                                    <router-link
                                        to="/products/amendments"
                                    >{{ $t('Navbar.dropdown12') }}</router-link>
                                </a>
                                <a class="navbar-item" id="drop-item">
                                    <router-link
                                        to="/products/rootBiostimulant"
                                    >{{ $t('Navbar.dropdown13') }}</router-link>
                                </a>
                                <!-- <a class="navbar-item" id="drop-item">
                                    <router-link to="/products/insecticide">
                                        {{ $t('Navbar.dropdown2') }}
                                    </router-link>
                                </a>-->
                            </div>
                        </a>
                        <a
                            :class="[
                                currentPage.localeCompare('/') == 0 ? activeClass : '',
                                'navbar-item',
                            ]"
                        >
                            <router-link to="/distributionNetwork">{{ $t('Navbar.network') }}</router-link>
                        </a>
                        <a
                            :class="[
                                currentPage.localeCompare('/') == 0 ? activeClass : '',
                                'navbar-item',
                            ]"
                        >
                            <router-link to="/technicalSection">{{ $t('Navbar.technical') }}</router-link>
                        </a>
                        <span class="navbar-item">
                            <a class="button is-success is-inverted">
                                <router-link to="/contact">{{ $t('Navbar.contact') }}</router-link>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: 'active',
      variablePrueba: 'test',
      showNavbarMobile: false,
      scrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  computed: {
    currentPage() {
      return this.$route.path;
    },
  },
  methods: {
    showNavbarBurger() {
      this.showNavbarMobile = !this.showNavbarMobile;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style scoped>

.navbar {
  position: fixed;
  top: 52px;
  background-color: white !important;
  width: 100vw;
}

.scrolled {
  top: 0;
}

.hero-head{
  background: white;
}

.navbar-item img {
  max-height: 6rem;
  color: black !important;
}

a,
.button a,
#drop-item-item {
  color: #585858;
}
#drop-item {
  color: #e96711;
}

a:hover {
  color: #e96711;
}

.active a {
  color: black;
}

.active a:hover {
  color: rgb(0, 129, 0);
}

.hero.is-success .navbar-item,
.hero.is-success .navbar-link {
  color: black;
}
</style>
