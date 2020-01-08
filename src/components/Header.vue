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
                                        <a
                                            class="dropdown-item language-text"
                                            v-for="language in languages"
                                            :key="language.code"
                                            @click="changeLanguage(language.code)"
                                        >
                                            <div v-if="language.code =='es'">
                                                <div class="flag flag-es"></div>
                                                &nbsp;
                                                {{ language.name }}
                                            </div>
                                            <div v-else>
                                                <div class="flag flag-us"></div>
                                                &nbsp;
                                                {{ language.name }}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="button is-success">
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
    background-color: lightgray;
}
.button a {
    color: white;
}
.language-text {
    color: black !important;
    font-family: 'Roboto', sans-serif;
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
</style>
