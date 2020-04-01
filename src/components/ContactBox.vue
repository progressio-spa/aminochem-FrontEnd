<template>
    <div class="contact">
        <div class="columns is-desktop" id="main">
            <div class="column is-half">
                <div class="color">
                    <div class="main-info">
                        <div class="title is-4">{{ $t('Contact.contactUs') }}</div>
                        <br />
                        <div class="columns">
                            <div class="column">
                                <span class="icon is-medium has-text-white">
                                    <i class="fas fa-map-marker-alt fa-2x"></i>
                                </span>
                            </div>
                            <div class="column is-10">
                                <p>
                                    Bernardino 1990,
                                    <br />Puerto Montt
                                    <br />
                                </p>
                            </div>
                        </div>

                        <div class="columns">
                            <div class="column">
                                <span class="icon is-medium has-text-white">
                                    <i class="fas fa-map-marker-alt fa-2x"></i>
                                </span>
                            </div>
                            <div class="column is-10">
                                <p>
                                    Av. Blanca 1117,
                                    <br />Maipú, Santiago
                                </p>
                            </div>
                        </div>

                        <div class="columns">
                            <div class="column">
                                <span class="icon is-medium has-text-white">
                                    <i class="fas fa-envelope fa-2x"></i>
                                </span>
                            </div>
                            <div class="column is-10">
                                <p>contacto@aminochem.cl</p>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <span class="icon is-medium has-text-white">
                                    <i class="fas fa-phone fa-2x"></i>
                                </span>
                            </div>
                            <div class="column is-10">
                                <p>+ 56 652267000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-half">
                <div class="main-form">
                    <div class="form-container">
                        <div class="subtitle">{{ $t('Contact.writeUs') }}</div>
                        <div class="field">
                            <div class="control">
                                <input
                                    class="input"
                                    type="text"
                                    :placeholder="$t('Contact.fullname')"
                                    v-model="fullName"
                                />
                            </div>
                        </div>
                        <br />
                        <div class="field">
                            <div class="control">
                                <input
                                    class="input"
                                    type="email"
                                    :placeholder="$t('Contact.typeEmail')"
                                    value
                                    v-model="email"
                                />
                            </div>
                        </div>
                        <br />
                        <div class="field">
                            <div class="control">
                                <input
                                    class="input"
                                    type="phoneNumber"
                                    :placeholder="$t('Contact.matter')"
                                    value
                                    v-model="subject"
                                />
                            </div>
                        </div>
                        <br />
                        <div class="field">
                            <div class="control">
                                <textarea
                                    class="textarea"
                                    :placeholder="$t('Contact.typeMessage')"
                                    v-model="message"
                                ></textarea>
                            </div>
                        </div>
                        <br />
                        <div class="field is-grouped">
                            <div class="control">
                                <button
                                    class="button is-link is-rounded"
                                    :disabled="!allIsOk"
                                    @click="sendContact"
                                >{{ $t('Contact.send') }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { value, computed } from 'vue-function-api'

import contact from '@/api/requests/contact'

export default {
    setup() {
        const fullName = value('')
        const email = value('')
        const subject = value('')
        const message = value('')
        const allIsOk = computed(
            () =>
                fullName.value.length > 0 &&
                email.value.length > 0 &&
                subject.value.length > 0 &&
                message.value.length > 0
        )
        const sendContact = async () => {
            const data = {
                fullName: fullName.value,
                contactEmail: email.value,
                contactNumber: subject.value,
                message: message.value,
            }
            await contact(data)
        }
        return {
            fullName,
            email,
            subject,
            message,
            sendContact,
            allIsOk,
        }
    },
}
</script>

<style scoped>
.contact {
    width: 100%;
    height: 630px;
}
#main {
    width: 100%;
    height: 600px;
}

.color {
    position: absolute;
    width: 30%;
    height: 50%;
    margin-top: 3%;
    background: rgb(252, 74, 26);
    background: linear-gradient(
        45deg,
        rgba(252, 74, 26, 1) 0%,
        rgba(247, 183, 51, 1) 100%
    );
    left: 15%;
    z-index: 2;
    -webkit-box-shadow: 0px 0px 18px 1px rgba(46, 74, 117, 0.24);
    -moz-box-shadow: 0px 0px 18px 1px rgba(46, 74, 117, 0.24);
    box-shadow: 0px 0px 18px 1px rgba(46, 74, 117, 0.24);
}

.main-form {
    position: absolute;
    width: 50%;
    height: 60%;
    right: 16%;
    background-color: rgb(247, 247, 247);
    z-index: 1;
    -webkit-box-shadow: 0px 0px 18px 1px rgba(46, 74, 117, 0.24);
    -moz-box-shadow: 0px 0px 18px 1px rgba(46, 74, 117, 0.24);
    box-shadow: 0px 0px 18px 1px rgba(46, 74, 117, 0.24);
}

.form-container {
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    padding-top: 6vh;
    padding-left: 16vw;
}

.form-container > .subtitle {
    display: flex;
    justify-items: flex-start;
}

.field > .control > .button {
    background: rgb(252, 74, 26);
    background: linear-gradient(
        45deg,
        rgba(252, 74, 26, 1) 0%,
        rgba(247, 183, 51, 1) 100%
    );
}

.main-info {
    display: flex;
    margin: 4rem;
    height: 70%;
    flex-direction: column;
    align-items: baseline;
}

.title {
    color: white;
}

.main-info > .columns > .column {
    color: white;
    display: flex;
    text-align: start;
}
@media (max-width: 767px) {
    .contact {
        width: 100%;
        height: 100%;
    }
    #main {
        width: 100%;
        height: 100%;
        margin: 0;
    }
    .color {
        position: initial;
        width: 100%;
    }
    .main-info {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    .main-form {
        padding-top: 2rem;
        padding-bottom: 2rem;
        position: initial;
        width: 100%;
        height: 100%;
    }
    .form-container {
        padding-top: 1vh;
        padding-left: 9vw;
    }
}
@media (max-width: 1020px) {
    .contact {
        width: 100%;
        height: 100%;
    }
    #main {
        width: 100%;
        height: 100%;
        margin: 0;
    }
    .color {
        position: initial;
        width: 100%;
    }
    .main-info {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    .main-form {
        padding-top: 2rem;
        padding-bottom: 2rem;
        position: initial;
        width: 100%;
        height: 100%;
    }
    .form-container {
        padding-top: 1vh;
        padding-left: 9vw;
    }
}

@media (max-height: 850px) and (min-width: 767px) {
    .main-form {
        width: 50%;
        height: 75%;
    }
    .color {
        width: 30%;
        height: 60%;
    }
}
</style>
