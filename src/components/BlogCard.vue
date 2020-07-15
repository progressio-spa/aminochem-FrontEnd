<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="imageSource"/>
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <div class="title is-5">
                        <router-link
                            :to="{
                                name: 'technicalSection-show',
                                params: {
                                    name: title,
                                    title: title,
                                    body: body,
                                    newsImage: imageSource,
                                    subtitle: subtitle,
                                    pdfSrc: pdfSource
                                }
                            }"
                            style="color: rgb(233, 103, 17);"
                        >
                            {{ title }}
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- <div class="content">
                {{subtitle}}
                <br />
                <time datetime="2016-1-1"></time>
            </div>-->
        </div>
    </div>
</template>

<script>
import { onCreated, value, watch } from 'vue-function-api';

import { getPostsByCategory } from "@/api/requests/posts";

import BlogCardView from "@/components/BlogCardView.vue";
export default {
    props: ["title", "body", "newsImage", "subtitle", "pdfSrc"],
    setup(props, context) {
        const { root } = context;
        const pdfSource = value(props.pdfSrc);
        const imageSource = value('');
        watch(
            () => props.pdfSrc,
            newVal => {
                if (typeof newVal === 'number') {
                    pdfSource.value = `https://aminochem-backend.herokuapp.com/downloadDocument/${newVal}`;
                } else if (typeof newVal === 'string') {
                    pdfSource.value = newVal;
                }
            },
            { deep: true }
        );
        watch(
            () => props.newsImage,
            newVal => {
                if (typeof newVal === 'string') {
                    imageSource.value = newVal;
                } else {
                    imageSource.value = `https://aminochem-backend.herokuapp.com/downloadImage/${newVal}`;
                }
            },
            { deep: true }
        );
        root.$store.dispatch('changeLoadingState', 'unset');
        return {
            pdfSource,
            imageSource
        };
    },
};
</script>

<style scoped>
.media-content > .title {
    text-align: center;
}
.card {
    min-height: 100%;
}

.hero-body {
    width: 100%;
}
</style>