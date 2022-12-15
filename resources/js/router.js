import Vue from "vue";

import VueRouter from "vue-router";
import MainComponent from "./components/MainComponent"
Vue.use(VueRouter);


const router = new VueRouter({
    mode:'history',
    routes: [
        { path: '/', name: 'restaurant',alias:'/restaurant', component: MainComponent },  // dichiaro le mie rotte -> dando un path(url) , un nome , e il componente che vogliamo visualizzare
        { path: '/:id', name: 'dettaglio', component: ()=>import('./components/RestaurantDetails') }
    ]
});

export default router;
