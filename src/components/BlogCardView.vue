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
                    <h1 class="title is-1" id="main-title">
                        {{ $t("TechnicalSection.title") }}
                    </h1>
                </div>
            </div>
        </section>
        <section class="hero is-white">
            <div class="hero-body">
                <div class="container">
                    <div class="title is-3">{{ title }}</div>
                    <div class="image">
                        <img :src="newsImage" />
                    </div>
                    <br />
                    <div class="subtitle is-3" v-html="body"></div>
                    <div v-if="pdfSrc === 'demo1'">
                        <div>
                            <iframe
                                :src="demo1"
                                style="width:100%;height:100vh;"
                                scrolling="auto"
                            ></iframe>
                        </div>
                    </div>
                    <div v-else-if="pdfSrc === 'demo2'">
                        <div>
                            <iframe
                                :src="demo2"
                                style="width:100%;height:100vh;"
                                scrolling="auto"
                            ></iframe>
                        </div>
                    </div>
                    <div v-else-if="pdfSrc === 'demo3'">
                        <div>
                            <iframe
                                :src="demo3"
                                style="width:100%;height:100vh;"
                                scrolling="auto"
                            ></iframe>
                        </div>
                    </div>
                    <div v-else-if="pdfSrc === 'demo4'">
                        <div>
                            <iframe
                                :src="demo4"
                                style="width:100%;height:100vh;"
                                scrolling="auto"
                            ></iframe>
                        </div>
                    </div>
                    <div v-else>
                        <object
                            :data="pdfSource"
                            style="width:100%;height:100vh;"
                            scrolling="auto"
                            type="application/pdf"
                        ></object>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import { value } from 'vue-function-api';

import { getDocument } from "@/api/requests/posts";

import Navbar from "@/components/Navbar.vue";

export default {
    components: {
        Navbar
    },
    setup(props, { root }) {
        const demo1 = require(`../assets/Temporal/iplusd/demo1.pdf`);
        const demo2 = require(`../assets/Temporal/iplusd/demo2.pdf`);
        const demo3 = require(`../assets/Temporal/iplusd/demo3.pdf`);
        const demo4 = require(`../assets/Temporal/iplusd/demo4.pdf`);
        const pdfSource = value(props.pdfSrc);
        const getPdfSource = async () => {
            try {
                if (!props.pdfSrc) {
                    return;
                }
                root.$store.dispatch('changeLoadingState', 'set');
                const { pdfSrc } = props;
                const pdfResponse = await getDocument(pdfSrc);
                const hexDocData = window.atob(pdfResponse.data);
                const docBytes = new Uint8Array(hexDocData.length);
                for (let i = 0; i < hexDocData.length; i++) {
                    docBytes[i] = hexDocData.charCodeAt(i);
                }
                const docBlob = new Blob([docBytes], { type: 'application/pdf' });
                pdfSource.value = window.URL.createObjectURL(docBlob);
                root.$store.dispatch('changeLoadingState', 'unset');
            } catch (e) {
                console.log(e);
            }
        }
        getPdfSource();
        return {
            demo1,
            demo2,
            demo3,
            demo4,
            pdfSource
        };
    },
    props: ["title", "body", "newsImage", "subtitle", "pdfSrc"]
};
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

.subtitle {
    font-size: 14pt !important;
    text-align: left;
}

p {
    text-align: left;
    color: #585858;
}

@media screen and (max-width: 480px) {
    #main-title {
        font-size: 2rem;
    }
}
</style>