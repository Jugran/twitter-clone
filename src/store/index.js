import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import profile from './modules/profile'
import feed from './modules/feed'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        auth,
        profile,
        feed
    },
    plugins: [createPersistedState()]
})