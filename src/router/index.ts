import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import BusLines from "@/views/BusLines/BusLines.vue";
import BusStops from "@/views/BusStops.vue";
import AboutMe from "@/views/AboutMe.vue";


const routes: Array<RouteRecordRaw> = [
    {path: '/', component: BusLines},
    {path: '/stops', component: BusStops},
    {path: '/about', component: AboutMe},
    {path: '/:pathMatch(.*)*', redirect: '/'}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active'
})

export default router

