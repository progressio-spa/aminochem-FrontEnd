<template>
    <div class="technicalSection">
        <Navbar></Navbar>
        <section class="hero is-medium has-background">
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
        <section class="tabs-container">
            <div class="tabs is-centered is-medium">
                <ul>
                    <li class="tab is-active" id="tab1" @click="openTab('tab1','contentTab1')">
                        <a>
                            <span class="icon is-small">
                                <i class="fas fa-microscope" aria-hidden="true"></i>
                            </span>
                            <span>{{ $t('TechnicalSection.tab-1') }}</span>
                        </a>
                    </li>
                    <li class="tab" id="tab2" @click="openTab('tab2','contentTab2')">
                        <a>
                            <span class="icon is-small">
                                <i class="far fa-bookmark" aria-hidden="true"></i>
                            </span>
                            <span>{{ $t('TechnicalSection.tab-2') }}</span>
                        </a>
                    </li>
                    <li class="tab" id="tab3" @click="openTab('tab3','contentTab3')">
                        <a>
                            <span class="icon is-small">
                                <i class="far fa-calendar" aria-hidden="true"></i>
                            </span>
                            <span>{{ $t('TechnicalSection.tab-3') }}</span>
                        </a>
                    </li>
                    <li class="tab" id="tab4" @click="openTab('tab4','contentTab4')">
                        <a>
                            <span class="icon is-small">
                                <i class="far fa-newspaper" aria-hidden="true"></i>
                            </span>
                            <span>{{ $t('TechnicalSection.tab-4') }}</span>
                        </a>
                    </li>
                    <li
                        v-if="userIsAdmin"
                        class="tab"
                        id="tab5"
                        @click="openTab('tab5','contentTab5')">
                        <a>
                            <span class="icon is-small">
                                <i class="fas fa-pen" aria-hidden="true"></i>
                            </span>
                            <span>{{ $t('TechnicalSection.tab-5') }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="content-tab hero is-light is-fullheight" id="contentTab1">
            <div class="hero-head">
                <div class="title">
                    <span class="icon is-small">
                        <i class="fas fa-microscope" aria-hidden="true"></i>
                    </span>
                    &nbsp;
                    {{ $t('TechnicalSection.tab-1') }}
                </div>
            </div>
            <div class="hero-body" style="display: inline-block;">
                <div class="container">
                    <div class="columns is-multiline is-desktop">
                        <div
                            class="column is-one-third"
                            v-for="(news,index) in tempIplusD"
                            :key="index"
                        >
                            <BlogCard
                                :title="news.title"
                                :newsImage="news.imgURL"
                                :subtitle="news.subtitle"
                                :pdfName="news.pdfName"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            class="content-tab hero is-light is-fullheight"
            id="contentTab2"
            style="display:none"
        >
            <div class="hero-head">
                <div class="title">
                    <span class="icon is-small">
                        <i class="far fa-bookmark" aria-hidden="true"></i>
                    </span>
                    &nbsp;
                    {{ $t('TechnicalSection.tab-2') }}
                </div>
            </div>
            <div class="hero-body" style="display: inline-block;">
                <div class="container">
                    <div class="columns is-multiline is-desktop">
                        <div
                            class="column is-one-third"
                            v-for="(news,index) in Publication"
                            :key="index"
                        >
                            <BlogCard
                                :title="news.title"
                                :newsImage="news.imgURL"
                                :subtitle="news.subtitle"
                                :pdfName="news.pdfName"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            class="content-tab hero is-light is-fullheight"
            id="contentTab3"
            style="display:none"
        >
            <div class="hero-head">
                <div class="title">
                    <span class="icon is-small">
                        <i class="far fa-calendar" aria-hidden="true"></i>
                    </span>
                    &nbsp;
                    {{ $t('TechnicalSection.tab-3') }}
                </div>
            </div>
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-multiline is-desktop">
                        <div class="column is-one-third" v-for="index in 3" :key="index">
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            class="content-tab hero is-light is-fullheight"
            id="contentTab4"
            style="display:none"
        >
            <div class="hero-head">
                <div class="title">
                    <span class="icon is-small">
                        <i class="far fa-newspaper" aria-hidden="true"></i>
                    </span>
                    &nbsp;
                    {{ $t('TechnicalSection.tab-4') }}
                </div>
            </div>
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-multiline is-desktop">
                        <div class="column is-one-third" v-for="index in 2" :key="index">
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            class="content-tab hero is-light is-fullheight"
            id="contentTab5"
            style="display:none"
        >
            <div class="hero-head">
                <div class="title">{{ $t('TechnicalSection.tab-5') }}</div>
            </div>
            <Dashboard />
        </section>
    </div>
</template>

<script>
import { onCreated, value } from 'vue-function-api'

import { isAdmin } from '@/api/requests/authorization';

// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import BlogCard from '@/components/BlogCard.vue'
import Dashboard from '@/components/Dashboard.vue'

import { iplusd } from '@/constants/TemporalTechnical'
import { publication } from '@/constants/publications'

export default {
    name: 'home',
    components: {
        Navbar,
        BlogCard,
        Dashboard,
    },
    setup(props, { root }) {
        const userIsAdmin = value(false);
        onCreated(async () => {
            try {
                const data = {
                    token: root.$store.getters.getAccessToken,
                };
                const isAdminRequest = await isAdmin(data);
                userIsAdmin.value = isAdminRequest.data === 1;
            } catch(e) {
                console.log(e);
            }
        })
        return {
            tempIplusD: iplusd,
            Publication: publication,
            userIsAdmin,
        };
    },
    methods: {
        openTab(tabName, contantTabName) {
            var i, x, tablinks
            x = document.getElementsByClassName('content-tab')

            for (i = 0; i < x.length; i++) {
                x[i].style.display = 'none'
            }

            tablinks = document.getElementsByClassName('tab')
            for (i = 0; i < x.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(
                    ' is-active',
                    ''
                )
            }
            var mainContent = document.getElementById(contantTabName)
            mainContent.style.display = 'block'

            var mainTab = document.getElementById(tabName)
            mainTab.classList.add('is-active')
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
.content-tab > .hero-head {
    padding-top: 3vh;
}

#main-title {
    display: flex;
    color: white;
}
.tabs {
    margin-top: 1vh;
}

.tabs li.is-active a {
    border-bottom-color: #e96711;
    color: #e96711;
}

@media screen and (max-width: 480px) {
    #main-title {
        font-size: 2rem;
    }
    .title {
        font-size: 1.5rem;
    }
    .tabs-container {
        display: flex;
        flex-direction: column;
    }
}
/* Mobile Horizontal y tablet vertical */
@media screen and (min-width: 481px) and (max-width: 768px) {
}
/* Tablet Horizontal y escritorio normal */
@media screen and (min-width: 769px) and (max-width: 1279px) {
}
</style>
