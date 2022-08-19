const routes = [
    {
        path: "/",
        alias: ['/HydrologyProcess'],
        component: () => import('../pages/HydrologyProcess.vue')
    },
    {
        path: "/NFT-01",
        component: () => import('../pages/NFT-01.vue')
    },
    {
        path: "/Portfolio-01",
        component: () => import('../pages/Portfolio-01.vue')
    }
]

export default routes
