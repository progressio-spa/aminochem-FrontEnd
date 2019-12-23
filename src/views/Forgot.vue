<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="card">
                    <div class="card-content">
                        <h1 class="title">
                            {{ $t('Forgot.title') }}
                        </h1>
                        <h2 class="subtitle">
                            {{ $t('Forgot.subtitle') }}
                        </h2>
                        <div class="form">
                            <div class="field">
                                <div class="control">
                                    <input
                                        v-model="email"
                                        class="input"
                                        type="text"
                                        placeholder="Ingresa tu email"
                                    />
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <button class="button is-danger" @click="sendForgot">
                                        {{ $t('Forgot.button') }}
                                    </button>
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

import { value } from 'vue-function-api';

export default {
    setup(props, { root }) {
        const email = value('');
        const sendForgot = () => {
            root.$store.dispatch('sendForgotPassword', {
                username: email.value,
            });
        }
        return {
            email,
            sendForgot
        };
    },
};

</script>

<style scoped>
.hero {
    background: linear-gradient(45deg, rgba(252, 74, 26, 1) 0%, rgba(247, 183, 51, 1) 100%);
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card {
    padding: 4%;
}

.field > .control > .button {
    background: linear-gradient(45deg, rgba(252, 74, 26, 1) 0%, rgba(247, 183, 51, 1) 100%);
}
</style>
