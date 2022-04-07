// vue auth store
import router from '@/router';
import Api from '@/Api'


const getDefaultState = () => {
    return {
        user: null,
        token: null,
        isAuthenticated: false,
    }
}
// initial state
const state = getDefaultState()

const mutations = {
    setUser(state, user) {
        state.user = user.id;
        state.token = user.token;
        state.isAuthenticated = true;
    },
    resetState(state) {
        Object.assign(state, getDefaultState());
    }
}

const actions = {
    async login({ commit, dispatch }, { username, password }) {
        try {
            console.log("🚀 login", username, password);
            const { data } = await Api().post('auth/login', { username, password });

            commit('setUser', data);
            dispatch('profile/getProfile', data.id, { root: true });
            return true;
        }
        catch (error) {
            console.error("can't login", error.message);
            return false;
        }
    },
    async register(context, { username, password }) {
        try {
            console.log("🚀 signup", username, password);

            const { data } = await Api().post('auth/signup', { username, password });
            
            return data;
            
        }
        catch (error) {
            console.error("can't register", error.message);
            return error.response.data;
        }
    },
    logout({ commit }) {
        if (window.confirm("Are you sure you want to logout?")) {
            console.log('Logout');
            commit('resetState');
            commit('profile/resetState', null, { root: true });
            commit('feed/resetState', null, { root: true });
            router.push('/');
        }
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
