import { createRouter, createWebHistory } from 'vue-router'

import HydrologyProcess from '/src/views/Hydrology-Process.vue'

const routes = [
    {
        path: '/',
        name: 'HydrologyProcess',
        component: HydrologyProcess,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
