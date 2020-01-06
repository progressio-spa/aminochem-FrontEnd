<template>
  <div
    class="modal"
    :class="{ 'is-active': modalIsActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <div class="white-card">
        <div class="container map-container">
          <div class="is-6 agents-list">
            <div
              v-for="agent in agentsToShow"
              :key="agent.name">
              <h1>{{ agent.name }}</h1>
              <h1>{{ agent.position }}</h1>
              <h1>{{ agent.email }}</h1>
              <h1>{{ agent.phone }}</h1>
              <br>
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
      @click="closeModal"></button>
  </div>
</template>

<script>

import { onMounted, value, computed } from 'vue-function-api';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_chileHigh from '@/constants/ChileanMap';

import { regionAgentsList } from '../constants/agents';

export default {
  props: {
    modalIsActive: {
      type: Boolean,
      default: false,
    },
    closeModal: {
      type: Function,
      default: () => {},
    },
  },
  setup() {
    const hoveredRegion = value('');
    const regionManagers = regionAgentsList;
    const CreateChileanDistributionMap = () => {
      // Create Instance
      const chileanMap = am4core.create('distributionMap', am4maps.MapChart);
      // Charge World Map
      chileanMap.geodata = am4geodata_chileHigh;
      // Set Projection
      chileanMap.projection = new am4maps.projections.Miller();
      // Create Serie
      const chileanSeries = chileanMap.series.push(new am4maps.MapPolygonSeries());
      // Disabling Zoom
      chileanMap.chartContainer.wheelable = false;
      chileanSeries.useGeodata = true;
      // Configure series
      const polygonTemplate = chileanSeries.mapPolygons.template;
      polygonTemplate.tooltipText = '{name}';
      // Create hover state and set orange fill color
      const hover = polygonTemplate.states.create('hover');
      hover.properties.fill = am4core.color('#E7763D');
      // Creating Event Listener for hover action in map
      chileanSeries.mapPolygons.template.events.on('over', (ev) => {
        hoveredRegion.value = ev.target.dataItem.dataContext.id;
      }, this);
      chileanSeries.mapPolygons.template.events.on('out', () => {
        hoveredRegion.value = '';
      }, this);
    };
    const agentsToShow = computed(() => (
      regionManagers.filter(regionManager => regionManager.region === hoveredRegion.value)
    ));
    onMounted(() => {
      CreateChileanDistributionMap();
    });
    return {
      agentsToShow,
    };
  },
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

.map-container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
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
