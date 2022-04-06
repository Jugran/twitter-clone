
const getDefaultState = () => {
    return {
        id: null,
        user: {
            name: null,
            username: null,
            avatar: null,
            bio: null,
            followers: null,
            following: null,
            joined: null
        },
        DarkMode: false,
        tweets: []
    }
}
// initial state
const state = getDefaultState()

const mutations = {
    setUser(state, user) {
        state.id = user.id;
        state.user = user.profile;
    },
    addTweet(state, tweet) {
        state.tweets.unshift(tweet);
    },
    resetState(state) {
        Object.assign(state, getDefaultState());
    }

}

const actions = {
    getProfile({ state, commit }) {
        const date = new Date()
        const profile = {
            name: state.user.name,
            username: state.user.username,
            avatar: state.user.avatar,
            bio: state.user.bio || 'This is my bio. I am a developer',
            followers: state.user.followers || 0,
            following: state.user.following || 0,
            joined: state.user.joined || date.toDateString()
        }

        commit('setUser', { id: state.id, profile})
    }
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
    },
    getTweets: state => {
        return state.tweets;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
