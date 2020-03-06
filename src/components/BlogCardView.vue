<template>
    <div class="BlogCardView">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/AboutUs/cerezas.jpg"
            />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1" id="main-title">{{ $t('TechnicalSection.title') }}</h1>
                </div>
            </div>
        </section>
        <section class="hero is-white is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="title is-3">{{title}}</div>

                    <div class="image">
                        <img :src="newsImage" />
                    </div>
                    <br />
                    <div class="subtitle is-3">{{subtitle}}</div>
                    <div class="content">
                        <div v-if="pdfName==='demo1'">
                            <!-- <object
                                :data="demo1"
                                type="application/pdf"
                                width="100%"
                                height="500px"
                            >
                                alt :
                                <a :href="demo1">title</a>
                            </object>-->
                            <div>
                                <iframe
                                    :src="demo1"
                                    style="width:100%;height:100vh;"
                                    scrolling="auto"
                                ></iframe>
                            </div>
                        </div>
                        <div v-else-if="pdfName==='demo2'">
                            <div>
                                <iframe
                                    :src="demo2"
                                    style="width:100%;height:100vh;"
                                    scrolling="auto"
                                ></iframe>
                            </div>
                        </div>
                        <div v-else>
                            <div>
                                <iframe
                                    :src="demo3"
                                    style="width:100%;height:100vh;"
                                    scrolling="auto"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    components: {
        Navbar,
    },
    setup(props, { root }) {
        const demo1 = require(`../assets/Temporal/iplusd/demo1.pdf`)
        const demo2 = require(`../assets/Temporal/iplusd/demo2.pdf`)
        const demo3 = require(`../assets/Temporal/iplusd/demo3.pdf`)
        return {
            demo1,
            demo2,
            demo3,
        }
    },
    props: ['title', 'newsImage', 'subtitle', 'pdfName'],
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
    font-size: 3rem;
}

.hero.is-white .title,
.subtitle {
    color: #3d3d3d;
}
p {
    text-align: left;
    color: #585858;
}
</style>