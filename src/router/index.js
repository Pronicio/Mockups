import { createRouter, createWebHistory } from 'vue-router'

import HydrologyProcess from '/src/views/Hydrology-Process.vue'
import NFT01 from '/src/views/NFT-01.vue'

const routes = [
    {
        path: '/',
        name: 'HydrologyProcess',
        component: HydrologyProcess,
    },
    {
        path: '/nft-01',
        name: 'NFT-01',
        component: NFT01,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
