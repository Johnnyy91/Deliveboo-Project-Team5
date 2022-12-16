import Vue from "vue";

import VueRouter from "vue-router";
import MainComponent from "./components/MainComponent"
import MenuComponent from "./components/MenuComponent"
Vue.use(VueRouter);


const router = new VueRouter({
    mode:'history',
    routes: [
        { path: '/', name: 'restaurant',alias:'/restaurant', component: MainComponent },
        { path: '/:id', name: 'dettaglio', component: ()=>import('./components/RestaurantDetails') },
        { path: '/:slug', name: 'menu', component: MenuComponent }

    ]
});

export default router;
