<template>
    <div class="hero-head">
        <header class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <img src="@/assets/logo-aminochem.png" alt="Aminochem" />
                    </a>
                    <span class="navbar-burger burger" data-target="navbarMenuHeroC">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroC" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item">
                            <router-link to="/">
                                {{ $t('Navbar.home') }}
                            </router-link>
                        </a>
                        <a class="navbar-item">
                            <router-link to="/about">
                                {{ $t('Navbar.aboutUs') }}
                            </router-link>
                        </a>
                        <a class="navbar-item">
                            <router-link to="/products">
                                {{ $t('Navbar.products') }}
                            </router-link>
                        </a>
                        <a class="navbar-item">
                            <router-link to="/distributionNetwork">
                                {{ $t('Navbar.network') }}
                            </router-link>
                        </a>
                        <a class="navbar-item">
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

<style scoped>
.navbar-item img {
    max-height: 7rem;
}

a {
    color: #585858;
}
a:hover {
    color: #fff;
}

.button a {
    color: #585858;
}
</style>
