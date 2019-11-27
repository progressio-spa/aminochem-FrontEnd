<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button">
                            <div class="dropdown is-hoverable is-right">
                                <div class="dropdown-trigger">
                                    <span>Idioma</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                        <a href="#" class="dropdown-item">Español</a>
                                        <a href="#" class="dropdown-item">Inglés</a>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="button is-success">
                            <router-link to="/login">
                                {{ $t('Login.loginNav') }}
                            </router-link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar-menu {
    background-color: lightgray;
}
.button a {
    color: white;
}
</style>
