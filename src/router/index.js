import First from "@/components/views/First.vue";

Vue.use(Router)

export default new Router({
    routers: [
        {
            path: '/',
            name: 'HelloWord',
            component: HelloWord
        },{
            path: '/first',
            name: 'First',
            component: First
        },
    ]
})