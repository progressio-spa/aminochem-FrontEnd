<template>
    <div class="hero-head">
        <header class="navbar is-transparent ">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <router-link to="/">
                            <img src="@/assets/logo-aminochem.png" alt="Aminochem" />
                        </router-link>
                    </a>
                    <span class="navbar-burger burger" data-target="navbarMenuHeroC">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroC" class="navbar-menu">
                    <div class="navbar-end">
                        <a
                            :class="[
                                currentPage.localeCompare('/') == 0 ? activeClass : '',
                                'navbar-item',
                            ]"
                        >
                            <router-link to="/">
                                {{ $t('Navbar.home') }}
                            </router-link>
                        </a>
                        <a
                            :class="[
                                currentPage.localeCompare('/') == 0 ? activeClass : '',
                                'navbar-item',
                            ]"
                        >
                            <router-link to="/about">
                                {{ $t('Navbar.aboutUs') }}
                            </router-link>
                        </a>
                        <a class="navbar-item has-dropdown is-hoverable" id="drop">
                            <a class="navbar-link is-arrowless">
                                {{ $t('Navbar.products') }}
                            </a>

                            <div class="navbar-dropdown is-boxed">
                                <a class="navbar-item" id="drop-item">
                                    {{ $t('Navbar.dropdown1') }}
                                </a>
                                <a class="navbar-item" id="drop-item">
                                    {{ $t('Navbar.dropdown2') }}
                                </a>
                            </div>
                        </a>
                        <a
                            :class="[
                                currentPage.localeCompare('/') == 0 ? activeClass : '',
                                'navbar-item',
                            ]"
                        >
                            <router-link to="/distributionNetwork">
                                {{ $t('Navbar.network') }}
                            </router-link>
                        </a>
                        <a
                            :class="[
                                currentPage.localeCompare('/') == 0 ? activeClass : '',
                                'navbar-item',
                            ]"
                        >
                            <router-link to="/technicalSection">
                                {{ $t('Navbar.technical') }}
                            </router-link>
                        </a>
                        <span class="navbar-item">
                            <a class="button is-success is-inverted">
                                <router-link to="/contact">
                                    {{ $t('Navbar.contact') }}
                                </router-link>
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
    };
  },
  computed: {
    currentPage() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.navbar-item img {
    max-height: 7rem;
}

a,
.button a,
#drop #drop-item {
    color: #585858;
}
a:hover {
    color: #e96711;
}

.active a {
    color: white;
}

.active a:hover {
    color: rgb(0, 129, 0);
}

.hero.is-success .navbar-item,
.hero.is-success .navbar-link {
    color: rgba(255, 255, 255, 1);
}
</style>
