<template>
    <div class="technicalSection">
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
        <section class="tabs-container">
            <div class="tabs is-centered is-medium">
                <ul>
                    <li class="tab is-active" @click="openTab(event,'test1')">
                        <a>
                            <span class="icon is-small">
                                <i class="fas fa-microscope" aria-hidden="true"></i>
                            </span>
                            <span>{{ $t('TechnicalSection.tab-1') }}</span>
                        </a>
                    </li>
                    <li class="tab" @click="openTab(event,'test2')">
                        <a>
                            <span class="icon is-small">
                                <i class="far fa-bookmark" aria-hidden="true"></i>
                            </span>
                            <span>{{ $t('TechnicalSection.tab-2') }}</span>
                        </a>
                    </li>
                    <li class="tab" @click="openTab(event,'test3')">
                        <a>
                            <span class="icon is-small">
                                <i class="far fa-calendar" aria-hidden="true"></i>
                            </span>
                            <span>{{ $t('TechnicalSection.tab-3') }}</span>
                        </a>
                    </li>
                    <li class="tab" @click="openTab(event,'test4')">
                        <a>
                            <span class="icon is-small">
                                <i class="far fa-newspaper" aria-hidden="true"></i>
                            </span>
                            <span>{{ $t('TechnicalSection.tab-4') }}</span>
                        </a>
                    </li>
                    <li class="tab" @click="openTab(event,'test5')">
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
        <section class="content-tab hero is-light is-fullheight" id="test1">
            <div class="hero-head">
                <div class="title">{{ $t('TechnicalSection.tab-1') }}</div>
            </div>
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-multiline is-desktop">
                        <div class="column is-one-third" v-for="index in 9" :key="index">
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="content-tab hero is-light is-fullheight" id="test2" style="display:none">
            <div class="hero-head">
                <div class="title">{{ $t('TechnicalSection.tab-2') }}</div>
            </div>
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-multiline is-desktop">
                        <div class="column is-one-third" v-for="index in 5" :key="index">
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="content-tab hero is-light is-fullheight" id="test3" style="display:none">
            <div class="hero-head">
                <div class="title">{{ $t('TechnicalSection.tab-3') }}</div>
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
        <section class="content-tab hero is-light is-fullheight" id="test4" style="display:none">
            <div class="hero-head">
                <div class="title">{{ $t('TechnicalSection.tab-4') }}</div>
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
        <section class="content-tab hero is-light is-fullheight" id="test5" style="display:none">
            <div class="hero-head">
                <div class="title">{{ $t('TechnicalSection.tab-5') }}</div>
            </div>
            <Dashboard />
        </section>
    </div>
</template>

<script>
import { onCreated } from 'vue-function-api'

// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import BlogCard from '@/components/BlogCard.vue'
import Dashboard from '@/components/Dashboard.vue'

export default {
    name: 'home',
    components: {
        Navbar,
        BlogCard,
        Dashboard,
    },
    setup(props, { root }) {
        onCreated(() => {
            // if (root.$store.getters.getAccessToken.length === 0) {
            //   root.$router.push('/login');
            // }
        })
    },
    methods: {
        openTab(evt, tabName) {
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
            document.getElementById(tabName).style.display = 'block'
            evt.currentTarget.className += ' is-active'
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
}
.tabs {
    margin-top: 1vh;
}

.tabs li.is-active a {
    border-bottom-color: #e96711;
    color: #e96711;
}
</style>
