<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="newsImage" />
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <div class="title is-5">
                        <router-link
                            :to="{
                            name: 'technicalSection-show',
                            params: { name: title, title:title,newsImage:newsImage,subtitle:subtitle},
                            }"
                        >{{title}}</router-link>
                    </div>
                </div>
            </div>

            <div class="content">
                {{subtitle}}
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
    </div>
</template>

<script>
import BlogCardView from '@/components/BlogCardView.vue'
export default {
    data() {
        return {}
    },
    props: ['title', 'newsImage', 'subtitle'],
}
</script>

<style scoped>
.media-content > .title {
    text-align: center;
}
.card {
    min-height: 100%;
}
</style>