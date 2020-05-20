<template>
    <div class="hero-head">
        <header class="navbar is-green" :class="{scrolled: scrollPosition > 52}">
            <div class="container" style="max-width: 90%">
                <div class="navbar-brand">
                    <a class="navbar-item" style="position: relative; left: 0;">
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
                                'navbar-item bold-title',
                            ]"
                        >
                            <router-link to="/">{{ $t('Navbar.home') }}</router-link>
                        </a>
                        <a
                            :class="[
                                currentPage.localeCompare('/') == 0 ? activeClass : '',
                                'navbar-item bold-title',
                            ]"
                        >
                            <router-link to="/about">{{ $t('Navbar.aboutUs') }}</router-link>
                        </a>
                        <a class="navbar-item has-dropdown is-hoverable" id="drop">
                            <a class="navbar-link is-arrowless bold-title">{{ $t('Navbar.products') }}</a>

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
                            </div>
                        </a>
                        <a
                            :class="[
                                currentPage.localeCompare('/') == 0 ? activeClass : '',
                                'navbar-item bold-title',
                            ]"
                        >
                            <router-link to="/distributionNetwork">{{ $t('Navbar.network') }}</router-link>
                        </a>
                        <a
                            :class="[
                                currentPage.localeCompare('/') == 0 ? activeClass : '',
                                'navbar-item bold-title',
                            ]"
                        >
                            <router-link to="/technicalSection">{{ $t('Navbar.technical') }}</router-link>
                        </a>
                        <span class="navbar-item">
                            <a class="button is-success bold-title is-inverted">
                                <router-link to="/contact">{{ $t('Navbar.contact') }}</router-link>
                            </a>
                        </span>
                        <a class="navbar-item has-dropdown is-hoverable" id="drop">
                    <a class="navbar-link bold-title">{{ $t('Navbar.language') }}</a>

                    <div class="navbar-dropdown is-boxed" style="top: 11vh">
                            <a class="navbar-item" id="drop-item">
                                <a class="language-icon" @click="changeLanguage('es')">
                                    {{ $t('Navbar.spanish') }}
                                </a>
                            </a>    

                            <a class="navbar-item" id="drop-item">
                                <a class="language-icon" @click="changeLanguage('en')">
                                    {{ $t('Navbar.english') }}
                                </a>
                            </a>
                        </div>
                    </a>
                    </div>
                </div>
                
                <div class="language-container">
                    
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
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        },
    },
}
</script>

<style scoped>

.navbar-end {
    margin-left: inherit;
}

.navbar {
    position: fixed;
    /* top: 52px; */
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
    /* color: rgb(0, 129, 0); ESTE ES EL ORIGINAL */
    /* color: rgb(3, 63, 3); */
    color: #e96711 !important;
}

a,
.button a,
#drop-item-item,
.active a,
.hero.is-success .navbar-item,
.hero.is-success .navbar-link {
    color: #3d3d3d !important;
}

.hero.is-success a.navbar-item:hover,
.hero.is-success a.navbar-item.is-active,
.hero.is-success .navbar-link:hover,
.hero.is-success .navbar-link.is-active {
    background-color: rgba(255, 255, 255, 0.5);
    /* color: rgb(0, 129, 0); ESTE ES EL ORIGINAL*/
    /* color: rgb(3, 63, 3); */
    color: #3d3d3d !important;
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

.navbar-link:not(.is-arrowless)::after {
    border-color: #e96711;
    margin-top: -0.375em;
    right: 1.125em;
}

@media screen and (max-width: 480px) {
    .navbar {
        position: sticky;
    }
    .bold-title{
        font-weight: bold;
    }
}
/* Mobile Horizontal y tablet vertical */
@media screen and (min-width: 481px) and (max-width: 768px) {
    .navbar {
        position: sticky;
    }
    .bold-title{
        font-weight: bold;
    }
}
/* Tablet Horizontal y escritorio normal */
@media screen and (min-width: 769px) and (max-width: 1279px) {
}
</style>
