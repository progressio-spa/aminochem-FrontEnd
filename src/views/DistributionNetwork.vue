<template>
    <div class="distributionNetwork">
        <Navbar></Navbar>
        <section class="hero is-primary is-medium has-background">
            <img
                alt="Grass"
                class="hero-background is-transparent"
                src="@/assets/Network/Chile.jpg"
            />
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1" id="main-title">
                        {{ $t('Network.title') }}
                    </h1>
                </div>
            </div>
        </section>
        <section class="main-content">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h1 class="subtitle is-4 has-text-grey-darker" @click="zoneClicked('CL')">
                            {{ $t('Network.option1') }}
                        </h1>
                    </div>
                    <div class="column">
                        <h1 class="subtitle is-4 has-text-grey-darker" @click="zoneClicked('WR')">
                            {{ $t('Network.option2') }}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero is-light is-fullheight">
            <div class="hero-body">
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
        </section>
        <br /><br />
    </div>
</template>

<script>
// Amcharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_chileHigh from '@/constants/ChileanMap';
import am4geodata_worldHigh from '@amcharts/amcharts4-geodata/worldHigh';

// vue-function-api imports
import { onMounted, value, computed } from 'vue-function-api';

// Import RegionAgents
import { regionAgentsList, agentsList } from '../constants/agents';

// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'home',
  components: {
    Navbar,
  },
  setup() {
    const regionManagers = regionAgentsList;
    const hoveredRegion = value('');
    const hoveredCountry = value('');
    // Chilean Map Method
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
        console.log(ev.target.dataItem.dataContext.id);
        hoveredRegion.value = ev.target.dataItem.dataContext.id;
      }, this);
      chileanSeries.mapPolygons.template.events.on('out', () => {
        hoveredRegion.value = '';
      }, this);
    };
    // SouthAmerican Map Method
    const createSouthAmericanDistributionMap = () => {
      // Create Instance
      const southAmericanMap = am4core.create('distributionMap', am4maps.MapChart);
      // Charge World Map
      southAmericanMap.geodata = am4geodata_worldHigh;
      // Set Projection
      southAmericanMap.projection = new am4maps.projections.Miller();
      // Create Serie
      const worldSeries = southAmericanMap.series.push(new am4maps.MapPolygonSeries());
      // Add South American Countries to Map, excluding anyone else
      worldSeries.include = [
        'AR', 'BO', 'BR', 'CL',
        'CO', 'EC', 'PY', 'PE',
        'UY', 'VE', 'BS', 'BZ',
        'CR', 'CU', 'DO', 'GT',
        'HN', 'HT', 'JM', 'MX',
        'NI', 'PA', 'PR', 'SV',
      ];
      // Disabling Zoom
      southAmericanMap.chartContainer.wheelable = false;
      worldSeries.useGeodata = true;
      // Configure series
      const polygonTemplate = worldSeries.mapPolygons.template;
      polygonTemplate.tooltipText = '{name}';
      // Create hover state and set orange fill color
      const hover = polygonTemplate.states.create('hover');
      hover.properties.fill = am4core.color('#E7763D');
      // Creating Event Listener for hover action in map
      worldSeries.mapPolygons.template.events.on(
        'over',
        (ev) => {
          hoveredCountry.value = ev.target.dataItem.dataContext.id;
        }, this,
      );
      worldSeries.mapPolygons.template.events.on(
        'out',
        () => {
          hoveredCountry.value = '';
        }, this,
      );
    };
    // Zone Clicked Method
    const zoneClicked = (zone) => {
      if (zone === 'CL') {
        CreateChileanDistributionMap();
      } else {
        createSouthAmericanDistributionMap();
      }
    };
    const agentsToShow = computed(() => (
      regionManagers.filter(regionManager => regionManager.region === hoveredRegion.value)
    ));
    onMounted(() => {
      CreateChileanDistributionMap();
    });
    return {
      agentsToShow,
      zoneClicked,
    };
  },
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
.subtitle {
  text-decoration: underline;
  text-decoration-color: orange;
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
}
.map-container{
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
</style>
