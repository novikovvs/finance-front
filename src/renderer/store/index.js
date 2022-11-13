import Vuex from 'vuex'
import Vue from 'vue'
import RootApi from '../root/root-api'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        isAuth: localStorage.getItem('authToken') ?? false,
        expensesChartData: null
    },
    mutations: {
        login () {
            this.isAuth = true
        },
        logout () {
            this.isAuth = false
        },
        setExpensesChartData (state, expensesData) {
            state.expensesChartData = expensesData
        }
    },
    actions: {
        loginApi ({ commit }, authData) {
            RootApi.login(authData).then((r) => Vue.$cookie.get('XSRF-TOKEN'))
        },
        getExpenses ({ commit }, expensesFilter) {
            return RootApi.getExpenses(expensesFilter).then((r) => {
                const data = r.data.result
                const datasetColor = []
                const datasetData = []
                let labels = []
                const detailed = []

                if (expensesFilter.detail === 0) {
                    labels = data.map((item) => {
                        datasetColor.push(('#' + Math.floor(Math.random() * 16777215).toString(16)).toUpperCase())
                        datasetData.push(item.amount)

                        return item.category
                    })
                }

                this.commit('setExpensesChartData', {
                    labels: labels,
                    datasets: [{
                        backgroundColor: datasetColor,
                        data: datasetData ?? detailed

                    }]
                })
            })
        }
    }
// strict: process.env.NODE_ENV !== 'production'
})
