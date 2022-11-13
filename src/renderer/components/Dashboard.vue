<template>
  <v-container tag="div" fluid>
    <v-row justify="center" dense>
      <v-col>
        <sector-chart :chart-data="expensesChartData"/>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row align="center">
      <v-col>
        <v-switch
            v-model="switchState"
            label="Detailed"
            color="green"
            inset
        ></v-switch>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import SectorChart from './SectorChart/SectorChart'
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'Dashboard',
    components: {
      SectorChart
    },
    mounted () {
      this.loadExpenses()
    },
    data () {
      return {
        switchState: false
      }
    },
    computed: mapState(['expensesChartData']),
    methods: {
      ...mapActions(['getExpenses']),
      loadExpenses () {
        this.getExpenses({ detail: Number(this.switchState) })
      }
    },
    watch: {
      switchState: function () {
        this.loadExpenses()
      }
    }
  }
</script>

<style scoped>

</style>
