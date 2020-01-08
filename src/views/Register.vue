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
                                <div class="title is-4">{{ $t('Register.register') }}</div>
                                <div class="subtitle is-6">{{ $t('Register.info') }}</div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input
                                            v-model="firstName"
                                            class="input"
                                            type="text"
                                            placeholder="Nombre"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input
                                            v-model="lastName"
                                            class="input"
                                            type="text"
                                            placeholder="Apellido"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input
                                            v-model="email"
                                            class="input"
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input
                                            v-model="password"
                                            class="input"
                                            type="password"
                                            placeholder="Contraseña"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input
                                            v-model="passwordRepetead"
                                            class="input"
                                            type="password"
                                            placeholder="Confirmar contraseña"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <label class="checkbox">
                                            <input v-model="termsAcceptance" type="checkbox" />
                                            {{ $t('Register.terms') }}
                                        </label>
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <p class="control">
                                        <a
                                            class="button is-primary is-fullwidth"
                                            @click="doRegister"
                                        >{{ $t('Register.button') }}</a>
                                    </p>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <div class="links">
                                            {{ $t('Register.accountReady') }}
                                            <p>&nbsp;</p>
                                            <router-link to="/login">{{ $t('Login.loginNav') }}</router-link>
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

<script>
import { value, computed } from 'vue-function-api'

export default {
    setup(props, { root }) {
        const firstName = value('')
        const lastName = value('')
        const email = value('')
        const password = value('')
        const passwordRepetead = value('')
        const termsAcceptance = value(false)
        const computeds = {
            firstNameOk: computed(() => firstName.value.length > 0),
            lastNameOk: computed(() => lastName.value.length > 0),
            emailOk: computed(() => {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return (
                    re.test(String(email.value).toLowerCase()) &&
                    email.value !== ''
                )
            }),
            passwordOk: computed(() => password.value.length >= 6),
            passwordRepeteadOk: computed(
                () => passwordRepetead.value === password.value
            ),
            allIsOk: computed(
                () =>
                    computeds.firstNameOk.value &&
                    computeds.lastNameOk.value &&
                    computeds.emailOk.value &&
                    computeds.passwordOk.value &&
                    computeds.passwordRepeteadOk.value &&
                    termsAcceptance.value
            ),
        }
        const doRegister = () => {
            if (computeds.allIsOk.value) {
                const token = root.$store.getters.getAccessToken
                const data = {
                    name: firstName.value,
                    lastname: lastName.value,
                    token,
                    username: email.value,
                    usernameConfirmation: email.value,
                    password: password.value,
                    passwordConfirmation: passwordRepetead.value,
                }
                root.$store
                    .dispatch('createUser', data)
                    .then(() => {
                        root.$router.push('/login')
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        }
        return {
            firstName,
            lastName,
            email,
            password,
            passwordRepetead,
            termsAcceptance,
            doRegister,
        }
    },
}
</script>

<style scoped>
.hero {
    background: url('../assets/loginDemo.png') center/ cover;
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
    background: rgba(252, 74, 26, 1);
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
