<template>
    <div class="Dashboard">
        <div class="container">
            <div class="button-container">
                <button
                    class="button is-success modal-button"
                    @click="openModal('create')"
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
                            <tr v-for="post in posts" :key="post.id">
                                <th>{{ post.id }}</th>
                                <td>{{ post.title }}</td>
                                <td>{{ `${post.creator.name} ${post.creator.lastname}` }}</td>
                                <td>{{ post.dateCreated.split('T')[0] }}</td>
                                <td>
                                    <div class="buttons">
                                        <button
                                            class="button is-info"
                                            @click="modifyPost(post)"
                                        >{{ $t('TechnicalSection.button-modified') }}</button>
                                        <button
                                            class="button is-danger"
                                            @click="sendDeletePost(post.id)"
                                        >{{ $t('TechnicalSection.button-deleted') }}</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div :class="{'modal': true, 'is-active': isModalShow }">
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
                                        @click="sendRequest"
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
                <button class="modal-close is-large" @click="closeModal" aria-label="close"></button>
            </div>
        </div>
    </div>
</template>

<script>

import {
    post,
    getCategories,
    getPosts,
    deletePost,
    updatePost
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
            posts: [],
            token: this.$store.getters.getAccessToken,
            isModalShow: false,
            modalPurpose: 'create',
        };
    },
    async created() {
        const categoriesRequest = await getCategories();
        const bodyFormData = new FormData();
        bodyFormData.set('token', this.token);
        const postsRequest = await getPosts(bodyFormData);
        this.categories = categoriesRequest.data;
        this.posts = postsRequest.data;
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
        openModal(purpose) {
            this.modalPurpose = purpose;
            this.isModalShow = true;
        },
        closeModal() {
            this.isModalShow = false;
        },
        async sendRequest() {
            const data = {};
            if (this.modalPurpose === 'create') {
                data.title = this.newPost.title;
                data.body = this.newPost.content;
                data.isPrivate = 0;
                data.category = this.categories
                    .find(category => category.name = this.newPost.category).id;
                data.token = this.token;
                await post(data);
            } else {
                data.title = this.newPost.title;
                data.body = this.newPost.content;
                data.isPrivate = this.newPost.isPrivate;
                data.id = this.newPost.id;
                data.token = this.token;
                await updatePost(data);
            }
        },
        async sendDeletePost(id) {
            try {
                const data = {
                    id,
                    token: this.token,
                };
                await deletePost(data);
                const bodyFormData = new FormData();
                bodyFormData.set('token', this.token);
                const postsRequest = await getPosts(bodyFormData);
                this.posts = postsRequest.data;   
            } catch (e) {
                console.log('ERROR => ', e);
            }
        },
        async modifyPost(post) {
            this.newPost = {
                id: post.id,
                title: post.title,
                content: post.body,
                isPrivate: post.isPrivate
            };
            this.openModal('update');
        },
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
