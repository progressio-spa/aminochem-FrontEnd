<template>
    <div class="modal" :class="{ 'is-active': modalIsActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <div class="white-card">
                <div class="container map-container">
                    <div class="is-6 agents-list">
                        <div v-if="hoveredFLag == false">
                            <div class="columns">
                                <div class="column">
                                    <figure class="image is-128x128">
                                        <img
                                            class="is-rounded"
                                            :src="
                                                require('@/assets/Agents/PabloVergara.jpg')
                                            "
                                        />
                                    </figure>
                                </div>
                                <div class="column">
                                    <br />
                                    <h1>Juan Pablo Vergara</h1>
                                    <h1>{{ $t("AboutUs.cargo4") }}</h1>
                                    <h1>jvergara@aminochem.cl</h1>
                                    <h1>+56 9 68310700</h1>
                                </div>
                            </div>
                            <br />
                        </div>
                        <div v-for="agent in agentsToShow" :key="agent.name">
                            <div class="columns">
                                <div class="column">
                                    <figure class="image is-128x128">
                                        <img
                                            class="is-rounded"
                                            :src="agent.img"
                                        />
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
                        <div class="distributionMap"></div>
                    </div>
                </div>
            </div>
        </div>
        <button
            class="modal-close is-large"
            aria-label="close"
            @click="closeModal"
        ></button>
    </div>
</template>

<script>
import { onMounted, value, computed } from "vue-function-api";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_chileHigh from "@/constants/ChileanMap";

import { chileanManagers, chileanManagersEN } from "../constants/agents";

export default {
    props: {
        modalIsActive: {
            type: Boolean,
            default: false
        },
        closeModal: {
            type: Function,
            default: () => {}
        }
    },
    setup(props, { root }) {
        const hoveredRegion = value("");
        const hoveredFLag = value(false);
        const regionManagers = chileanManagers;
        const regionManagersEN = chileanManagersEN;
        const CreateChileanDistributionMap = () => {
            // Create Instance
            const chileanMap = am4core.create(
                "distributionMap",
                am4maps.MapChart
            );
            // Charge World Map
            chileanMap.geodata = am4geodata_chileHigh;
            // Set Projection
            chileanMap.projection = new am4maps.projections.Miller();
            // Create Serie
            const chileanSeries = chileanMap.series.push(
                new am4maps.MapPolygonSeries()
            );
            // Disabling Zoom
            chileanMap.chartContainer.wheelable = false;
            chileanSeries.useGeodata = true;
            // Configure series
            const polygonTemplate = chileanSeries.mapPolygons.template;
            polygonTemplate.tooltipText = "{name}";
            // Create hover state and set orange fill color
            const hover = polygonTemplate.states.create("hover");
            hover.properties.fill = am4core.color("#E7763D");
            // Creating Event Listener for hover action in map
            chileanSeries.mapPolygons.template.events.on(
                "over",
                ev => {
                    console.log(ev.target.dataItem.dataContext.id);
                    hoveredRegion.value = ev.target.dataItem.dataContext.id;
                    hoveredFLag.value = true;
                },
                this
            );
        };
        const agentsToShow = computed(() => {
            if (root.$i18n.locale === "es") {
                return regionManagers.filter(
                    regionManager =>
                        regionManager.region === hoveredRegion.value
                );
            } else {
                return regionManagersEN.filter(
                    regionManager =>
                        regionManager.region === hoveredRegion.value
                );
            }
        });
        onMounted(() => {
            CreateChileanDistributionMap();
        });
        return {
            agentsToShow,
            hoveredFLag
        };
    }
};
</script>

<style scoped>
.white-card {
    background-color: white;
    width: 80vw;
    height: 90vh;
    margin: 0 auto;
}

.modal-card {
    margin: 0 10vw;
    width: 100vw;
}

.map-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    padding: 0 80px;
}

.agents-list {
    width: 40vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.distributionMap {
    width: 50vw;
    height: 90vh;
    position: relative;
    top: 0;
}
</style>
