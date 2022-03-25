// vue auth store
import { wait } from '@/helpers/wait'
import router from '@/router';

const state = () => {
    return {
        user: null,
        token: null,
        isAuthenticated: false,
    }
}

const mutations = {
    setUser(state, user) {
        state.user = user.id;
        state.token = user.token;
        state.isAuthenticated = true;
    },
    clearUser(state) {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
    }
}

const actions = {
    async login({ commit }, { username, password }) {
        try {
            console.log("🚀 login", username, password);
            // const response = await this.$axios.post('/auth/login', {
            //     username,
            //     password,
            // });
            await wait(1000);


            // commit('setUser', response.data);
            commit('setUser', { user: username, token: password });
            commit('profile/setUser', {
                id: 1,
                profile: {
                    name: 'Peter Parker',
                    username: '@' + username,
                    avatar: 'panda',
                },
            }, { root: true });
            // return response.data;
        }
        catch (error) {
            console.error("can't login", error.message);
        }
    },
    async register(context, { username, password }) {
        try {
            console.log("🚀 login", username, password);
            await wait(1000);

            // const response = await this.$axios.post('/auth/register', {
            //     username,
            //     password,
            // });
            // return response.data;
        }
        catch (error) {
            console.error("can't register", error.message);
        }
    },
    logout({ commit }) {
        console.log('Logout');
        commit('clearUser');
        router.push('/');
    },
}

const getters = {
    isAuthenticated(state) {
        return state.isAuthenticated;
    },
    user(state) {
        return state.user;
    },
    token(state) {
        return state.token;
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
