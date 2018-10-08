import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter)

    import App from './components/App'
    import Welcome from './components/Welcome'
    import Page from './components/Page'
    import NFound from './components/errors/notFound'

    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'welcome',
                component: Welcome,
                props: { title: "Bienvenido a Finanzas" }
            },

            {
                path: '/spa-page',
                name: 'page',
                component: Page,
                props: { title: "Bienvenido a Finanzas" }
                
            },
            
            {
                path: '*',
                name: 'notFound',
                component: NFound
            },
        ],
    })
    const app = new Vue({
        el: '#app',
        components: { App },
        router,
    });