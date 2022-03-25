
const state = () => {
    return {
        id: null,
        user: {
            name:  null,
            username: null,
            avatar: null
        },
    }
}

const mutations = {
    setUser(state, user) {
        state.id = user.id;
        state.user = user.profile;
    }

}

const actions = {
}

const getters = {
    getName: state => {
        return state.user.name;
    },
    getUsername: state => {
        return state.user.username;
    },
    getAvatar: state => {
        return state.user.avatar;
    },
    getProfile: state => {
        return state;
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
