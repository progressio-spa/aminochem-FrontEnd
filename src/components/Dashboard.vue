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
                <div class="modal-background" @click="closeModal"></div>
                <div class="modal-content">
                    <div class="box">
                        <div class="form">
                            <div class="field">
                                <label class="label">{{ $t('TechnicalSection.modal-title') }}</label>
                                <div class="control">
                                    <input v-model="newPost.title" class="input" type="text" placeholder="Title" />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">{{ $t('TechnicalSection.modal-content') }}</label>
                                <div class="control">
                                    <textarea v-model="newPost.content" class="textarea" placeholder="Content"></textarea>
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
                            <div class="field" v-if="modalPurpose !== 'update'">
                                <label class="label">{{ $t('TechnicalSection.modal-image') }}</label>
                                <div class="control">
                                    <div>
                                      <label for="image" class="modal-file-btn">
                                        {{ !selectedImageName ?
                                            $t('TechnicalSection.modal-image-label') : selectedImageName }}
                                      </label>
                                      <input
                                        @change="fileSelected('image')"
                                        type="file"
                                        id="image"
                                        accept=".jpg, .jpeg"
                                        data-max-size="1024"
                                        style="visibility:hidden;">
                                    </div>
                                </div>
                            </div>
                            <div class="field" v-if="modalPurpose !== 'update'">
                                <label class="label">{{ $t('TechnicalSection.modal-pdf') }}</label>
                                <div class="control">
                                    <div>
                                      <label for="pdf" class="modal-file-btn">
                                        {{ !selectedPDFName ?
                                            $t('TechnicalSection.modal-image-label') : selectedPDFName }}
                                      </label>
                                      <input
                                        @change="fileSelected('pdf')"
                                        type="file"
                                        id="pdf"
                                        accept=".pdf"
                                        data-max-size="1024"
                                        style="visibility:hidden;">
                                    </div>
                                </div>
                            </div>
                            <div class="field is-grouped">
                                <div class="control">
                                    <button
                                        @click="sendRequest"
                                        :disabled="!isSendButtonEnable"
                                        class="button is-success"
                                    >{{ $t('TechnicalSection.button-send') }}</button>
                                </div>
                                <div class="control">
                                    <button
                                        @click="closeModal"
                                        class="button is-light"
                                    >{{ $t('TechnicalSection.button-cancel') }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="modal-close is-large"
                    @click="closeModal"
                    aria-label="close"/>
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
    computed: {
        titleSetted() {
            return this.newPost.title.length > 0;
        },
        categorySetted() {
            return this.newPost.category.length > 0;
        },
        isSendButtonEnable() {
            if (this.modalPurpose === 'create') {
                return this.titleSetted &&
                    this.selectedImageName && this.categorySetted;
            }
            return this.titleSetted && this.categorySetted;
        },
    },
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
            selectedImageName: undefined,
            selectedPDFName: undefined
        };
    },
    async created() {
        const categoriesRequest = await getCategories();
        this.categories = categoriesRequest.data;
        if (this.token.length > 0) {
            this.posts = await this.getPosts(); 
        } 
    },
    methods: {
        fileSelected(fileType) {  
          const fileInput = document.getElementById(fileType);
          if (!fileInput.files) {
            return;
          }
          if (fileInput.files[0].size > 10 * 1024 * 1024) {
            alert('File limit exceed');
            fileInput.files = [];
          } else {
            if (fileInput.accept.includes('.pdf')) {
                this.selectedPDFName = fileInput.value.replace(/^.*[\\\/]/, '');
            } else {
                this.selectedImageName = fileInput.value.replace(/^.*[\\\/]/, '');
            }
          }
        },
        openModal(purpose) {
            this.modalPurpose = purpose;
            this.isModalShow = true;
        },
        closeModal() {
            this.isModalShow = false;
        },
        async getPosts() {
            try {
                const bodyFormData = new FormData();
                bodyFormData.set('token', this.token);
                const postsRequest = await getPosts(bodyFormData);
                return postsRequest.data;
            } catch (e) {
                console.log(e);
            }
        },
        async sendRequest() {
            const data = {};
            this.$store.dispatch('changeLoadingState', 'set');
            this.closeModal();
            if (this.modalPurpose === 'create') {
                let bodyFormData = new FormData();
                bodyFormData.append('title', this.newPost.title);
                bodyFormData.append('body', this.newPost.content);
                bodyFormData.append('isPrivate', 0);
                bodyFormData.append('category', this.categories
                    .find(category => category.name === this.newPost.category).id);
                bodyFormData.append('token', this.token);
                const imageInput = document.getElementById('image');
                const pdfInput = document.getElementById('pdf');
                bodyFormData.append('image', imageInput.files[0]);
                if (pdfInput.files.length) {
                    bodyFormData.append('document', pdfInput.files[0]);
                }
                await post(bodyFormData);
                this.posts = await this.getPosts();
                this.$emit('updatePosts');
                this.newPost = {
                    title: '',
                    content: '',
                    category: '',
                };
            } else {
                data.title = this.newPost.title;
                data.body = this.newPost.content;
                data.isPrivate = this.newPost.isPrivate;
                data.id = this.newPost.id;  
                data.token = this.token;
                data.category = this.categories
                    .find(category => category.name === this.newPost.category).id;
                await updatePost(data);
                this.posts = await this.getPosts();
                this.$emit('updatePosts');
                this.newPost = {
                    title: '',
                    content: '',
                    category: '',
                };
            }
            this.$store.dispatch('changeLoadingState', 'unset');
        },
        async sendDeletePost(id) {
            try {
                this.$store.dispatch('changeLoadingState', 'set');
                const data = {
                    id,
                    token: this.token,
                };
                await deletePost(data);
                this.posts = await this.getPosts();
                this.$emit('updatePosts');
                this.$store.dispatch('changeLoadingState', 'unset');
            } catch (e) {
                console.log('ERROR => ', e);
            }
        },
        async modifyPost(post) {
            this.newPost = {
                id: post.id,
                title: post.title,
                content: post.body,
                isPrivate: post.isPrivate,
                category: post.category.name,
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

.modal-file-btn {
  background-color: #20bc56;
  width: 27.5%;
  height: 6vh;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10pt;
  font-weight: 900;
  color: white;
  padding: 2px 3px;
  font-family: 'Roboto' sans-serif;
}

@media(max-width: 425px) {
  .modal-file-btn {
    width: 47.5%;
  }
}

</style>
