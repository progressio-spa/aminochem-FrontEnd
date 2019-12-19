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
                                    {{ $t('Login.login') }}
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input
                                            v-model="email"
                                            class="input"
                                            type="text"
                                            placeholder="Correo Electronico"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input
                                            v-model="pass"
                                            class="input"
                                            type="password"
                                            placeholder="Contraseña"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div class="field" v-if="showErrorMessage">
                                    <div class="control" style="text-align: center;">
                                        <h4 class="negativeMessage">
                                            Usuario y/o password incorrectos :(
                                        </h4>
                                    </div>
                                </div>
                                <br v-if="showErrorMessage"/>
                                <div class="field">
                                    <p class="control">
                                        <a class="button is-primary is-fullwidth" @click="doLogin">
                                            {{ $t('Login.button') }}
                                        </a>
                                    </p>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <div class="links">
                                            {{ $t('Login.notAccount') }}
                                            <p>&nbsp;</p>
                                            <router-link to="/register">
                                                {{ $t('Login.register') }}
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <div class="links">
                                            <router-link to="/forgot">
                                                {{ $t('Login.forgotPass') }}
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

<script>

import { value, watch } from 'vue-function-api';

export default {
  setup(props, { root }) {
    const email = value('');
    const pass = value('');
    const showErrorMessage = value('');
    const doLogin = () => {
      root.$Progress.start();
      const data = {
        email: email.value,
        password: pass.value,
      };
      root.$Progress.increase(20);
      root.$store.dispatch('authentication', data)
        .then((response) => {
          if (response) {
            root.$Progress.finish();
            root.$router.push('/');
          }
        })
        .catch(() => {
          root.$Progress.fail();
          showErrorMessage.value = true;
        });
    };
    watch(
      () => email.value || pass.value,
      () => {
        showErrorMessage.value = false;
      },
    );
    return {
      email,
      pass,
      doLogin,
      showErrorMessage,
    };
  },
};

</script>

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

.negativeMessage {
    color: red;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
}
</style>
