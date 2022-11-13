import axios from 'axios'

axios.defaults.baseURL = process.env.APP_URL
axios.defaults.withCredentials = false

export default class RootApi {
    static login (authData) {
        return axios.get('/sanctum/csrf-cookie').then((r) => {
            axios.post('/api/auth/login', {
                email: authData.email,
                password: authData.password
            }).then()
        })
    }

    static getExpenses (expensesFilters) {
        return axios.get('/api/expenses', { params: expensesFilters })
    }
}
