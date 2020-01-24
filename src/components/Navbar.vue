<template>
    <div class="hero-head">
        <header class="navbar is-green" :class="{scrolled: scrollPosition > 52}">
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

                            <div class="navbar-dropdown is-boxed" style="top: 11vh">
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
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll)
    },
    computed: {
        currentPage() {
            return this.$route.path
        },
    },
    methods: {
        showNavbarBurger() {
            this.showNavbarMobile = !this.showNavbarMobile
        },
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
    },
}
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 52px;
    background-color: rgba(255, 255, 255, 0.7) !important;
    width: 100vw;
}

.scrolled {
    top: 0;
}

.hero-head {
    background: white;
}

.navbar-item img {
    max-height: 6rem;
    color: black !important;
}

#drop-item,
a:hover,
.active a:hover {
    color: #e96711;
}

a,
.button a,
#drop-item-item,
.active a,
.hero.is-success .navbar-item,
.hero.is-success .navbar-link {
    color: #585858;
}

a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active,
.hero.is-success a.navbar-item:hover,
.hero.is-success a.navbar-item.is-active,
.hero.is-success .navbar-link:hover,
.hero.is-success .navbar-link.is-active {
    background-color: rgba(255, 255, 255, 0.5);
    color: #e96711;
}

.navbar-item.has-dropdown:focus .navbar-link,
.navbar-item.has-dropdown:hover .navbar-link,
.navbar-item.has-dropdown.is-active .navbar-link {
    background-color: rgba(255, 255, 255, 0.3);
}
</style>
