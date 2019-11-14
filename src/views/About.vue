<template>
    <div class="about">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
            <img alt="Grass" class="hero-background is-transparent" src="@/assets/Home/Home.png" />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1" id="main-title">
                        {{ $t('AboutUs.title') }}
                    </h1>
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
                <div class="columns">
                    <div class="column">
                        <figure class="image is-square">
                            <img src="https://bulma.io/images/placeholders/480x480.png" />
                        </figure>
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="https://bulma.io/images/placeholders/480x480.png" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <br /><br />
        <section class="team">
            <div class="container">
                <h1 class="subtitle is-3">{{ $t('AboutUs.team') }}</h1>
                <br />
                <div class="columns map-container">
                    <div class="is-6 agents-list">
                        <div v-for="agent in countriesToShow" :key="agent.phone">
                            <h1>{{ agent.name }}</h1>
                            <h1>{{ agent.position }}</h1>
                            <h1>{{ agent.email }}</h1>
                            <h1>{{ agent.phone }}</h1>
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
        <br /><br />
        <section class="hero is-info is-large has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/AboutUs/Salmon.jpg"
            />
            <div class="hero-head">
                <div class="container">
                    <h1 class="title">
                        {{ $t('AboutUs.history') }}
                    </h1>
                </div>
            </div>
            <div class="hero-body">
                <div class="scrolling-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img
                                    src="https://bulma.io/images/placeholders/1280x960.png"
                                    alt="Placeholder image"
                                />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="subtitle is-4">
                                {{ $t('AboutUs.card1-title') }}
                            </div>
                            <div class="content">
                                {{ $t('AboutUs.card2-content') }}
                                <br />
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img
                                    src="https://bulma.io/images/placeholders/1280x960.png"
                                    alt="Placeholder image"
                                />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="subtitle is-4">
                                {{ $t('AboutUs.card2-title') }}
                            </div>
                            <div class="content">
                                {{ $t('AboutUs.card2-content') }}
                                <br />
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img
                                    src="https://bulma.io/images/placeholders/1280x960.png"
                                    alt="Placeholder image"
                                />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="subtitle is-4">
                                {{ $t('AboutUs.card3-title') }}
                            </div>
                            <div class="content">
                                {{ $t('AboutUs.card3-content') }}
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br /><br />
    </div>
</template>

<script>
// Amcharts imports
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'
import am4geodata_worldHigh from '@amcharts/amcharts4-geodata/worldHigh'

// vue-function-api
import { onMounted, value, computed } from 'vue-function-api'

// Agents import
import { agentsList } from '../constants/agents'

// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'home',
    components: {
        Navbar,
    },
    setup() {
        const countryManagers = agentsList
        const hoveredCountry = value('')
        const createSouthAmericanMap = () => {
            // Create Instance
            const southAmericanMap = am4core.create('teamSouthAmericanMap', am4maps.MapChart)
            // Charge World Map
            southAmericanMap.geodata = am4geodata_worldHigh
            // Set Projection
            southAmericanMap.projection = new am4maps.projections.Miller()
            // Create Serie
            const worldSeries = southAmericanMap.series.push(new am4maps.MapPolygonSeries())
            // Add South American Countries to Map, excluding anyone else
            worldSeries.include = ['AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'PY', 'PE', 'UY', 'VE']
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
            worldSeries.mapPolygons.template.events.on(
                'over',
                ev => {
                    hoveredCountry.value = ev.target.dataItem.dataContext.id
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
            createSouthAmericanMap()
        })
        const countriesToShow = computed(() =>
            countryManagers.filter(
                countryManager => countryManager.country === hoveredCountry.value
            )
        )
        return {
            countriesToShow,
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

.scrolling-wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}
.scrolling-wrapper::-webkit-scrollbar {
    display: none;
}

.scrolling-wrapper > .card {
    display: inline-block;
    margin: 0px 2%;
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
    width: 40%;
    height: auto;
}
.map-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.agents-list {
    width: 30vw;
}

.teamSouthAmericanMap {
    width: 60vw;
    height: 100vh;
}
</style>
