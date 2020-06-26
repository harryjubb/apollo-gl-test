import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vgl from 'vue-golden-layout/src'
import 'golden-layout/src/css/goldenlayout-light-theme.css'

import VueApollo from 'vue-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'

// Apollo setup
const httpLink = createHttpLink({
  uri: 'https://graphql.org/swapi-graphql/'
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

Vue.use(vgl)
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
