import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        auth: {
            token: null,
        },
        user: {
            id: null,
            name: null,
            username: null,
            avatar: null,
        }
    },
    getters: {},
    mutations: {},
    actions: {}
})