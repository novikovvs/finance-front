export const home = {
    path: '/',
    name: 'Home',
    component: require('../../components/LandingPage.vue').default
}

export const settings = {
    path: '/auth',
    name: 'Settings',
    component: require('../../components/AdminPanel.vue').default
}

export const dashboard = {
    path: '/dashboard',
    name: 'Dashboard',
    component: require('../../components/Dashboard.vue').default
}

export const routes = [
    home,
    dashboard,

    settings
]
