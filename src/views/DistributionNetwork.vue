<template>
    <div class="distributionNetwork">
        <Navbar></Navbar>
        <section class="hero is-medium has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/Network/network.jpg"
            />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1" id="main-title">{{ $t('Network.title') }}</h1>
                </div>
            </div>
        </section>
        <section class="main-content">
            <div class="container">
                <div class="columns is-mobile">
                    <div class="column">
                        <h1
                            class="subtitle active is-4"
                            id="tab1"
                            @click="zoneClicked('CL'),openTab('tab1')"
                        >
                            <span class="icon is-small">
                                <i class="fas fa-map-pin" aria-hidden="true"></i>
                            </span>
                            &nbsp;
                            {{ $t('Network.option1') }}
                        </h1>
                    </div>
                    <div class="column">
                        <h1
                            class="subtitle is-4"
                            id="tab2"
                            @click="zoneClicked('WR'),openTab('tab2')"
                        >
                            <span class="icon is-small">
                                <i class="fas fa-globe-americas" aria-hidden="true"></i>
                            </span>
                            &nbsp;
                            {{ $t('Network.option2') }}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero is-light is-fullheight">
            <div class="hero-body">
                <div class="container map-container">
                    <div class="is-6 agents-list" v-if="selectedNetwork === 'CL'">
                        <div v-for="agent in agentsToShow" :key="agent.name">
                            <h1>{{ agent.name }}</h1>
                            <h1 class="link" @click="openUrl(agent.position)">{{ agent.email }}</h1>
                            <h1>{{ agent.phone }}</h1>
                            <br />
                        </div>
                    </div>
                    <div class="is-6 agents-list" v-else>
                        <div v-for="agent in globalAgentsToShow" :key="agent.name">
                            <div v-if="agent.country === 'AR'">
                                <p>{{ agent.name }}</p>
                                <h3>{{ agent.position }}</h3>
                                <p>{{ agent.email }}</p>
                                <h3>{{ agent.phone }}</h3>
                            </div>
                            <div v-else>
                                <h1>{{ agent.name }}</h1>
                                <h1>{{ agent.position }}</h1>
                                <h1>{{ agent.email }}</h1>
                                <h1>{{ agent.phone }}</h1>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div class="is-6">
                        <div class="distributionMap"></div>
                    </div>
                </div>
            </div>
        </section>
        <br />
        <br />
    </div>
</template>

<script>
// Amcharts imports
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'
import am4geodata_chileHigh from '@/constants/ChileanMap'
import am4geodata_worldHigh from '@amcharts/amcharts4-geodata/worldHigh'

// vue-function-api imports
import { onMounted, value, computed } from 'vue-function-api'

// Import RegionAgents
import { regionAgentsList, agentsList } from '../constants/agents'

// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'home',
    components: {
        Navbar,
    },
    setup() {
        const selectedNetwork = value('CL')
        const regionManagers = regionAgentsList
        const globalManagers = agentsList
        const hoveredRegion = value('')
        const hoveredCountry = value('')
        // Chilean Map Method
        const CreateChileanDistributionMap = () => {
            // Create Instance
            const chileanMap = am4core.create(
                'distributionMap',
                am4maps.MapChart
            )
            // Charge World Map
            chileanMap.geodata = am4geodata_chileHigh
            // Set Projection
            chileanMap.projection = new am4maps.projections.Miller()
            // Create Serie
            const chileanSeries = chileanMap.series.push(
                new am4maps.MapPolygonSeries()
            )
            // Disabling Zoom
            chileanMap.chartContainer.wheelable = false
            chileanSeries.useGeodata = true
            // Configure series
            const polygonTemplate = chileanSeries.mapPolygons.template
            polygonTemplate.tooltipText = '{name}'
            // Create hover state and set orange fill color
            const hover = polygonTemplate.states.create('hover')
            hover.properties.fill = am4core.color('#E7763D')
            // Creating Event Listener for hover action in map
            chileanSeries.mapPolygons.template.events.on(
                'over',
                ev => {
                    hoveredRegion.value = ev.target.dataItem.dataContext.id
                },
                this
            )
        }
        // SouthAmerican Map Method
        const createSouthAmericanDistributionMap = () => {
            // Create Instance
            const southAmericanMap = am4core.create(
                'distributionMap',
                am4maps.MapChart
            )
            // Charge World Map
            southAmericanMap.geodata = am4geodata_worldHigh
            // Set Projection
            southAmericanMap.projection = new am4maps.projections.NaturalEarth1()
            southAmericanMap.panBehavior = 'rotateLongLat'
            southAmericanMap.deltaLongitude = 50
            southAmericanMap.deltaLatitude = 15
            southAmericanMap.padding(20, 20, 20, 20)
            southAmericanMap.fill = am4core.color('#000000')
            southAmericanMap.mouseWheelBehavior = 'none'
            southAmericanMap.homeZoomLevel = 2.5
            // Create Serie
            const worldSeries = southAmericanMap.series.push(
                new am4maps.MapPolygonSeries()
            )
            worldSeries.useGeodata = true
            worldSeries.mapPolygons.template.adapter.add('fill', () => {
                return am4core.color('#D3D3D3')
            })
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
        }
        // Zone Clicked Method
        const zoneClicked = zone => {
            selectedNetwork.value = zone
            if (zone === 'CL') {
                CreateChileanDistributionMap()
            } else {
                createSouthAmericanDistributionMap()
            }
        }
        const openUrl = url => {
            window.open(url, '_blank')
        }
        const agentsToShow = computed(() =>
            regionManagers.filter(
                regionManager => regionManager.region === hoveredRegion.value
            )
        )
        const globalAgentsToShow = computed(() =>
            globalManagers.filter(
                globalManager => globalManager.country === hoveredCountry.value
            )
        )
        onMounted(() => {
            CreateChileanDistributionMap()
        })
        return {
            agentsToShow,
            zoneClicked,
            selectedNetwork,
            globalAgentsToShow,
            openUrl,
        }
    },
    methods: {
        openTab(tabName) {
            var i, tablinks
            tablinks = document.getElementsByClassName('subtitle')
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(
                    'active',
                    ''
                )
            }
            var mainTab = document.getElementById(tabName)
            mainTab.classList.add('active')
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
.subtitle {
    cursor: pointer;
}

.main-content {
    background-color: lightgray;
    height: 5rem;
    display: flex;
}

.main-content > .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#main-title {
    display: flex;
    color: white;
}
.map-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.agents-list {
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.distributionMap {
    width: 60vw;
    height: 100vh;
}

.link:hover {
    color: orange;
    cursor: pointer;
}

.active,
.subtitle:hover {
    color: #e96711 !important;
}

@media screen and (max-width: 480px) {
    #main-title {
        font-size: 2rem;
    }
}
</style>
