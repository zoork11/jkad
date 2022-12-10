import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import WhoAmI from './components/WhoAmI';
import FunBlog from './components/FunBlog';
import ContactForm from './components/ContactForm';
import ViewPost from './components/ViewPost';

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: FunBlog },
  { path: '/whoami', component: WhoAmI },
  { path: '/contact', component: ContactForm },
  { path: '/post/:id', component: ViewPost }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
