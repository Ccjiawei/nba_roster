import First from "@/components/views/FirstApp.vue";

Vue.use(Router)

export default new Router({
    routers: [
        {
            path: '/',
            name: 'HelloWord',
            component: HelloWord
        },{
            path: '/first',
            name: 'FirstApp',
            component: FirstApp
        }
    ]
})