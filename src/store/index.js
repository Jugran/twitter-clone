import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import profile from './modules/profile'
import feed from './modules/feed'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        auth,
        profile,
        feed
    }
})