import Vue from "vue";

import VueRouter from "vue-router";
import MainComponent from "./components/MainComponent"
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', name: 'home', component: MainComponent },  // dichiaro le mie rotte -> dando un path(url) , un nome , e il componente che vogliamo visualizzare

    ]
});

export default router;
