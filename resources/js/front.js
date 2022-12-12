import router from './router';
import Vue from 'vue'
import App from './views/App'

 require('./bootstrap');

 window.Vue = require('vue');

 window.axios = require('axios'); //per usare axios
 window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


 Vue.component('HeaderComponent', require('./components/HeaderComponent.vue').default);




  const app = new Vue({
      el: '#root',
      render: h=>h(App),
      router,
  });
