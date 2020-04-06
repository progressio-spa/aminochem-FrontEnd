<template>
    <div class="Dashboard">
        <div class="container">
            <div class="button-container">
                <button
                    class="button is-success modal-button"
                    data-target="#myModal"
                    aria-haspopup="true"
                >{{ $t('TechnicalSection.new-entry') }}</button>
            </div>
            <div class="card">
                <div class="card-content">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>
                                    <abbr title="id">{{ $t('TechnicalSection.table-id') }}</abbr>
                                </th>
                                <th>
                                    <abbr title="title">{{ $t('TechnicalSection.table-title') }}</abbr>
                                </th>
                                <th>
                                    <abbr title="author">{{ $t('TechnicalSection.table-author') }}</abbr>
                                </th>
                                <th>
                                    <abbr title="Date">{{ $t('TechnicalSection.table-date') }}</abbr>
                                </th>
                                <th></th>

                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Prueba 1</td>
                                <td>Gabriel Gaete</td>
                                <td>13/02/2020</td>
                                <td>
                                    <div class="buttons">
                                        <button
                                            class="button is-info"
                                        >{{ $t('TechnicalSection.button-modified') }}</button>
                                        <button
                                            class="button is-danger"
                                        >{{ $t('TechnicalSection.button-deleted') }}</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Prueba 2</td>
                                <td>Gabriel Gaete</td>
                                <td>12/02/2020</td>
                                <td>
                                    <div class="buttons">
                                        <button
                                            class="button is-info"
                                        >{{ $t('TechnicalSection.button-modified') }}</button>
                                        <button
                                            class="button is-danger"
                                        >{{ $t('TechnicalSection.button-deleted') }}</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Prueba 3</td>
                                <td>Gabriel Gaete</td>
                                <td>10/02/2020</td>
                                <td>
                                    <div class="buttons">
                                        <button
                                            class="button is-info"
                                        >{{ $t('TechnicalSection.button-modified') }}</button>
                                        <button
                                            class="button is-danger"
                                        >{{ $t('TechnicalSection.button-deleted') }}</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Prueba 3</td>
                                <td>Gabriel Gaete</td>
                                <td>09/02/2020</td>
                                <td>
                                    <div class="buttons">
                                        <button
                                            class="button is-info"
                                        >{{ $t('TechnicalSection.button-modified') }}</button>
                                        <button
                                            class="button is-danger"
                                        >{{ $t('TechnicalSection.button-deleted') }}</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="modal" id="myModal">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="box">
                        <div class="form">
                            <div class="field">
                                <label class="label">{{ $t('TechnicalSection.modal-title') }}</label>
                                <div class="control">
                                    <input v-model="newPost.title" class="input" type="text" placeholder="Text input" />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">{{ $t('TechnicalSection.modal-content') }}</label>
                                <div class="control">
                                    <textarea v-model="newPost.content" class="textarea" placeholder="Textarea"></textarea>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">{{ $t('TechnicalSection.modal-category') }}</label>
                                <div class="control">
                                    <div class="select is-success">
                                        <select v-model="newPost.category">
                                            <option v-for="category in categories" :key="category.id">{{ category.name }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-grouped">
                                <div class="control">
                                    <button
                                        @click="sendPost"
                                        class="button is-success"
                                    >{{ $t('TechnicalSection.button-send') }}</button>
                                </div>
                                <div class="control">
                                    <button
                                        class="button is-light"
                                    >{{ $t('TechnicalSection.button-cancel') }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    </div>
</template>

<script>

import {
    post,
    getCategories,
    getPosts
} from '@/api/requests/posts';

export default {
    name: 'home',
    data(){
        return {
            newPost: {
                title: '',
                content: '',
                category: '',
            },
            categories: [],
            token: this.$store.getters.getAccessToken,
        };
    },
    async created() {
        const categoriesRequest = await getCategories();
        const bodyFormData = new FormData();
        bodyFormData.set('token', this.token);
        const postsRequest = await getPosts(bodyFormData);
        this.categories = categoriesRequest.data;
    },
    mounted() {
        document.querySelectorAll('.modal-button').forEach(function(el) {
            el.addEventListener('click', function() {
                var target = document.querySelector(
                    el.getAttribute('data-target')
                )

                target.classList.add('is-active')

                target
                    .querySelector('.modal-close')
                    .addEventListener('click', function() {
                        target.classList.remove('is-active')
                    })
            })
        })
    },
    methods: {
        async sendPost() {
            const data = {};
            data.title = this.newPost.title;
            data.body = this.newPost.content;
            data.isPrivate = 0;
            data.category = this.categories
                .find(category => category.name = this.newPost.category).id;
            data.token = this.token;
            await post(data);
        }
    },
}
</script>

<style scoped>
.hero.has-background {
    position: relative;
    overflow: hidden;
}
.hero-background {
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
}

#main-title {
    display: flex;
}

.button-container {
    margin: 2% 0;
    display: flex;
    justify-content: initial;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.table {
    width: 100%;
}
.buttons {
    display: flex;
    justify-content: space-evenly;
}

label {
    display: flex;
    justify-content: flex-start;
}

.field {
    margin-bottom: 2vh;
}
</style>
