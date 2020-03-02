<template>
    <div class="about">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
            <img alt="Grass" class="hero-background is-transparent" src="@/assets/Home/people.jpg" />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1" id="main-title">{{ $t('AboutUs.title') }}</h1>
                </div>
            </div>
        </section>
        <br />
        <br />
        <section class="main-content">
            <div class="container">
                <h1 class="subtitle is-3">{{ $t('AboutUs.subtitle') }}</h1>
                <br />
                <div class="content">
                    <p>{{ $t('AboutUs.paragraph1') }}</p>
                    <br />
                    <p>{{ $t('AboutUs.paragraph2') }}</p>
                </div>
                <br />
                <div class="columns images is-desktop">
                    <div class="column">
                        <figure class="image is-square">
                            <img src="@/assets/AboutUs/a1.jpg" />
                        </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="@/assets/AboutUs/a2.jpg" />
                        </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="@/assets/AboutUs/a3.jpg" />
                        </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="@/assets/AboutUs/a4.jpg" />
                        </figure>
                    </div>

                    <!--                     <div class="column">
                        <figure class="image is-square">
                            <img src="https://bulma.io/images/placeholders/480x480.png" />
                        </figure>
                    </div>-->
                </div>
            </div>
        </section>
        <br />
        <br />
        <section class="team">
            <div class="container">
                <h1 class="subtitle is-3">{{ $t('AboutUs.team') }}</h1>
                <br />
                <div class="columns map-container">
                    <div class="is-6 agents-list">
                        <div v-for="agent in countriesToShow" :key="agent.name">
                            <div class="columns">
                                <div class="column">
                                    <figure class="image is-128x128">
                                        <img class="is-rounded" :src="agent.img" />
                                    </figure>
                                </div>
                                <div class="column">
                                    <br />
                                    <h1>{{ agent.name }}</h1>
                                    <h1>{{ agent.position }}</h1>
                                    <h1>{{ agent.email }}</h1>
                                    <h1>{{ agent.phone }}</h1>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                    <div class="is-6">
                        <div class="teamSouthAmericanMap"></div>
                    </div>
                </div>
                <br />
            </div>
        </section>
        <br />
        <br />
        <section class="hero is-light is-large has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/AboutUs/Salmon.jpg"
            />
            <div class="hero-head">
                <div class="container">
                    <h1 class="title">{{ $t('AboutUs.history') }}</h1>
                </div>
            </div>
            <div class="hero-body">
                <div id="carousel-demo" class="carousel">
                    <div class="item-1">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img
                                        src="@/assets/AboutUs/1994story.jpg"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    {{ $t('AboutUs.card1-content') }}
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-2">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img
                                        src="@/assets/AboutUs/experiments.jpg"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    {{ $t('AboutUs.card2-content') }}
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-3">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img
                                        src="@/assets/AboutUs/carousel4.png"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    {{ $t('AboutUs.card3-content') }}
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-4">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img
                                        src="@/assets/AboutUs/developments.jpg"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    {{ $t('AboutUs.card4-content') }}
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br />
        <br />
        <ChileanMapModal :modalIsActive="showChileanModal" :closeModal="closeChileanModal" />
    </div>
</template>

<script>
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min'

// Amcharts imports
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'
import am4geodata_worldHigh from '@amcharts/amcharts4-geodata/worldHigh'

// vue-function-api
import { onMounted, value, computed } from 'vue-function-api'

// Agents import
import { regionManagers } from '../constants/agents'

// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import ChileanMapModal from '@/components/ChileanMapModal.vue'

export default {
    name: 'home',
    components: {
        Navbar,
        ChileanMapModal,
    },
    setup() {
        const countryManagers = regionManagers
        // duplicate countries variable to delete countries that had country managers
        const excludedCountries = [
            'AR',
            'BO',
            'BR',
            'CL',
            'CO',
            'EC',
            'PY',
            'PE',
            'UY',
            'VE',
        ]
        countryManagers.forEach(countryManager => {
            const countryIndex = excludedCountries.indexOf(
                countryManager.country
            )
            if (countryIndex !== -1) {
                excludedCountries.splice(countryIndex, 1)
            }
        })
        const hoveredCountry = value('')
        const showChileanModal = value(false)
        const closeChileanModal = () => {
            showChileanModal.value = false
        }
        const createSouthAmericanMap = () => {
            // Create Instance
            const southAmericanMap = am4core.create(
                'teamSouthAmericanMap',
                am4maps.MapChart
            )
            // Charge World Map
            southAmericanMap.geodata = am4geodata_worldHigh
            // Set Projection
            southAmericanMap.projection = new am4maps.projections.Miller()
            // Create Serie
            const worldSeries = southAmericanMap.series.push(
                new am4maps.MapPolygonSeries()
            )
            // Add South American Countries to Map, excluding anyone else
            worldSeries.include = [
                'AR',
                'BO',
                'BR',
                'CL',
                'CO',
                'EC',
                'PY',
                'PE',
                'UY',
                'VE',
            ]
            // Disabling Zoom
            southAmericanMap.chartContainer.wheelable = false
            worldSeries.useGeodata = true
            // Configure series
            const polygonTemplate = worldSeries.mapPolygons.template
            polygonTemplate.tooltipText = '{name}'
            // Create hover state and set orange fill color
            const hover = polygonTemplate.states.create('hover')
            hover.properties.fill = am4core.color('#E7763D')
            // Creating Event Listener for hover action in map
            polygonTemplate.events.on(
                'over',
                ev => {
                    if (
                        !excludedCountries.includes(
                            ev.target.dataItem.dataContext.id
                        )
                    ) {
                        hoveredCountry.value = ev.target.dataItem.dataContext.id
                    } else {
                        ev.target.isHover = false
                    }
                },
                this
            )
            polygonTemplate.events.on(
                'hit',
                ev => {
                    if (ev.target.dataItem.dataContext.id === 'CL') {
                        showChileanModal.value = true
                    }
                },
                this
            )
            worldSeries.mapPolygons.template.events.on(
                'out',
                () => {
                    hoveredCountry.value = ''
                },
                this
            )
        }
        onMounted(() => {
            bulmaCarousel.attach('#carousel-demo', {
                slidesToScroll: 1,
                slidesToShow: 3,
                infinite: true,
                pagination: false,
                initialSlide: 3,
                breakpoints: [
                    {
                        changePoint: 768,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0,
                    },
                    {
                        changePoint: 1025,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0,
                    },
                ],
            })
            createSouthAmericanMap()
        })
        const countriesToShow = computed(() =>
            countryManagers.filter(
                countryManager =>
                    countryManager.country === hoveredCountry.value
            )
        )
        return {
            countriesToShow,
            closeChileanModal,
            showChileanModal,
        }
    },
}
</script>

<style scoped>
.hero-head > .container {
    padding-top: 2%;
}

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

.hero.is-light .title {
    color: white;
}

.card-content {
    min-height: 12rem;
}

.card > .card-content > .media > .media-content > .subtitle {
    color: #585858;
}

.card > .card-content > .subtitle {
    color: #585858;
}

.card > .card-content > .content,
.card > .card-content > .subtitle {
    white-space: normal;
}

.hero.is-large .hero-body {
    padding-bottom: 7rem;
    padding-top: 7rem;
}

.card {
    width: 90%;
    height: auto;
    display: inline-block;
}

.map-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.images img {
    object-fit: cover;
}

.agents-list {
    width: 30vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.teamSouthAmericanMap {
    width: 60vw;
    height: 100vh;
}

@media screen and (max-width: 480px) {
    .images img {
        max-width: 50%;
        max-height: 50%;
    }
}
</style>
