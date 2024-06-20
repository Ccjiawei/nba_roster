import { createRouter, createWebHistory } from 'vue-router';

//注意 可能分模块打包 路由不要分层，全部是一级
const routes = [
  {
    path: '/',
    name: 'addNbaTeam',
    component: () => import('../views/addNbaTeam.vue'),
    meta: {
      title: 'NBA'
    }
  }
 
];


export default createRouter({
  history: createWebHistory(),
  routes
})