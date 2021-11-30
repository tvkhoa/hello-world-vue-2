import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './global.css'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Buefy)

const renderVue = (entry) =>
  new Vue({
    render: h => h(App),
  }).$mount(entry)

renderVue('#app')

export { renderVue };
