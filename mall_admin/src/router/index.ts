import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import Home from '../views/Home/index.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
    },
    {
      path: '/recomment',
      name: '精选推荐',
      component: () => import(/* webpackChunkName: "about" */ '../views/Recommend/index.vue'),
    },
    {
      path: '/category',
      name: '分类',
      component: () => import(/* webpackChunkName: "about" */ '../views/Category/index.vue'),
    },
    {
      path: '/food',
      name: '美食',
      component: () => import(/* webpackChunkName: "about" */ '../views/Food/index.vue'),
    },
    {
      path: '/catemenu',
      name: '菜单',
      component: () => import(/* webpackChunkName: "about" */ '../views/Catemenu/index.vue'),
    },
    {
      path: '/user',
      name: '用户',
      component: () => import(/* webpackChunkName: "about" */ '../views/User/index.vue'),
    },
    {
      path: '/comment',
      name: '评论',
      component: () => import(/* webpackChunkName: "about" */ '../views/Comment/index.vue'),
    },
    {
      path: '/favorite',
      name: '收藏',
      component: () => import(/* webpackChunkName: "about" */ '../views/Favorite/index.vue'),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  store.commit('setCurrentMenuitem', to.name);
  await next();
});

export default router;
