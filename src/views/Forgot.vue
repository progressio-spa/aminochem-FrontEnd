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
                                        class="input"
                                        type="text"
                                        placeholder="Ingresa tu email"
                                    />
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <button class="button is-danger">
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
