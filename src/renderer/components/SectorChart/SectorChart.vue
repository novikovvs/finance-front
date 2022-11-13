<template>
  <pie
      v-if="chartData"
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
  />
</template>

<script>
  import { Pie } from 'vue-chartjs/legacy'
  import ChartData from '../../utils/types/chart-data'

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale
  } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

  export default {
    name: 'SectorChart',
    components: {
      Pie
    },
    props: {
      chartData: {
        type: ChartData,
        default: null
      },
      chartId: {
        type: String,
        default: 'doughnut-chart'
      },
      datasetIdKey: {
        type: String,
        default: 'label'
      },
      width: {
        type: Number,
        default: 400
      },
      height: {
        type: Number,
        default: 400
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {
        }
      },
      plugins: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          parsing: false,
          normalized: true,
          plugins: {
            legend: {
              display: true
            },
            decimation: {
              enabled: true
            }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
