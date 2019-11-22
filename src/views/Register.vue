<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-desktop is-vcentered">
                    <div class="column">
                        <div class="logo">
                            <img src="@/assets/logo-aminochem.png" alt="Aminochem" />
                        </div>
                    </div>
                    <div class="column" id="right">
                        <div class="card">
                            <div class="card-content">
                                <div class="title is-4">
                                    {{ $t('Register.register') }}
                                </div>
                                <div class="subtitle is-6">
                                    {{ $t('Register.info') }}
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Nombre" />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Apellido" />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input
                                            class="input"
                                            type="text"
                                            placeholder="Nombre de usuario"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input
                                            class="input"
                                            type="email"
                                            placeholder="Contraseña"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input
                                            class="input"
                                            type="email"
                                            placeholder="Confirmar contraseña"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <label class="checkbox">
                                            <input type="checkbox" />
                                            {{ $t('Register.terms') }}
                                        </label>
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <p class="control">
                                        <a class="button is-primary is-fullwidth">
                                            {{ $t('Register.button') }}
                                        </a>
                                    </p>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <div class="links">
                                            {{ $t('Register.accountReady') }}
                                            <p>&nbsp;</p>
                                            <router-link to="/login">
                                                {{ $t('Login.loginNav') }}
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    background: url('../assets/loginDemo.svg') center/ cover;
}

.card {
    position: relative;
    left: 30%;
    padding: 4%;
    width: 70%;
}
.links {
    display: flex;
    justify-content: center;
}
.field > .control > .button {
    background: linear-gradient(45deg, rgba(252, 74, 26, 1) 0%, rgba(247, 183, 51, 1) 100%);
}

@media (max-width: 767px) {
    .card {
        left: 0;
        width: 100%;
    }
}

@media (max-width: 1024px) {
    .card {
        left: 0;
        width: 100%;
    }
}
</style>
