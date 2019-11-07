<template>
    <div class="contactBox">
        <div class="container">
            <div class="columns">
                <div class="column is-half">
                    <div class="info-container"></div>
                </div>
                <div class="column is-half" id="right">
                    <div class="form-container">
                        <div class="field">
                            <label class="label title-color">{{ $t('Contact.name') }}</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="text"
                                    :placeholder="$t('Contact.fullname')"
                                />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label title-color">Email</label>
                            <div class="control has-icons-left has-icons-right">
                                <input
                                    class="input"
                                    type="email"
                                    :placeholder="$t('Contact.typeEmail')"
                                    value
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label title-color">{{ $t('Contact.phone') }}</label>
                            <div class="control has-icons-left has-icons-right">
                                <input
                                    class="input"
                                    type="phoneNumber"
                                    placeholder="Phone Number"
                                    value="+56 9 "
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-phone"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label title-color">{{ $t('Contact.matter') }}</label>
                            <div class="control has-icons-left has-icons-right">
                                <input
                                    class="input"
                                    type="phoneNumber"
                                    :placeholder="$t('Contact.matter')"
                                    value
                                />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label title-color">{{ $t('Contact.message') }}</label>
                            <div class="control">
                                <textarea
                                    class="textarea"
                                    :placeholder="$t('Contact.typeMessage')"
                                ></textarea>
                            </div>
                        </div>

                        <div class="field is-grouped">
                            <div class="control">
                                <button
                                    class="button is-link title-color"
                                    style="background-color: #12C2F2;"
                                >
                                    {{ $t('Contact.send') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: solid green;
}

.info-container {
    position: absolute;
    width: 40%;
    height: 90%;
    left: 5%;
    top: 5%;
    border: solid red;
}

#right {
    position: absolute;
    width: 75%;
    height: 100%;
    right: 0%;
    border: solid blue;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.form-container {
    border: solid yellow;
    width: 50%;
}
</style>
