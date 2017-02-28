import Vue from 'vue'
import Router from 'vue-router'
import Newsale from '@/components/Newsale'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Newsale',
        component: Newsale
    }]
})