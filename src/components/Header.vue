<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="language-icon" @click="changeLanguage(es)">
                            <div class="flag flag-es"></div>
                        </a>
                        <a class="language-icon" @click="changeLanguage(en)">
                            <div class="flag flag-us"></div>
                        </a>
                        <a class="button is-success is-outlined">
                            <router-link to="/login">{{ $t('Login.loginNav') }}</router-link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    setup(props, { root }) {
        const languages = [
            {
                code: 'es',
                name: 'Español',
            },
            {
                code: 'en',
                name: 'Inglés',
            },
        ]
        const changeLanguage = language => {
            root.$i18n.locale = language
        }
        return {
            languages,
            changeLanguage,
        }
    },
}
</script>

<style scoped>
.navbar-menu {
    background-color: white;
}
.button a {
    color: green;
}
.language-icon {
    margin-right: 1vw;
    margin-bottom: 5px;
}
/*!
 * Generated with CSS Flag Sprite generator (https://www.flag-sprites.com/) -
 */
.flag {
    display: inline-block;
    position: relative;
    width: 16px;
    height: 11px;
    background: url('https://flag-sprites.com/img/flags.png') no-repeat;
}

.flag.flag-es {
    background-position: -224px -33px;
}

.flag.flag-us {
    background-position: 0 -154px;
}

@media screen and (max-width: 480px) {
    .navbar {
        display: none;
    }
}
</style>
