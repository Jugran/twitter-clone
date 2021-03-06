import Api from '@/Api'

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
        tweets: [],
        suggestedUsers: []
    }
}
// initial state
const state = getDefaultState()

const mutations = {
    setUser(state, user) {
        state.id = user.id;
        state.user = user.profile;
    },
    setTweets(state, tweets) {
        state.tweets = tweets;
    },
    addTweet(state, tweet) {
        state.tweets.unshift(tweet);
    },
    resetState(state) {
        Object.assign(state, getDefaultState());
    },
    setSuggestedUsers(state, users) {
        state.suggestedUsers = users;
    }

}

const actions = {
    async getProfile({ commit, rootState }, id) {
        id = id ?? rootState.auth.user;

        try {
            const date = new Date();

            if (!id) return;

            const { data } = await Api(rootState.auth.token).get(`profile/${id}`);

            const profile = {
                name: data.user.name || data.user.username,
                username: data.user.username,
                avatar: data.user.avatar,
                bio: data.user.bio || 'This is my bio. I am a developer',
                followers: data.user.followers || 0,
                following: data.user.following || 0,
                joined: data.user.joined || date.toDateString()
            }

            commit('setUser', { id, profile });
        }
        catch (error) {
            console.error("can't get profile", error.message);
        }
    },
    async fetchTweets({ commit, rootState }, id) {
        id = id ?? rootState.auth.user;

        try {

            if (!id) return;

            const { data } = await Api(rootState.auth.token).get(`tweets/user/${id}`);

            if (data.tweets.length > 0) {
                commit('setTweets', data.tweets);
            }
        }
        catch (error) {
            console.error("can't fetch tweets", error.message);
        }
    },
    async fetchSuggestions({ commit, rootState }) {

        try {
            const { data } = await Api(rootState.auth.token).get(`profile/suggestions`);

            if (data.suggestions.length > 0) {
                commit('setSuggestedUsers', data.suggestions);
            }
        }
        catch (error) {
            console.error("can't fetch suggestions", error.message);
        }
    },
    async followUser({ commit, rootState, state, dispatch }, id) {
        try {
            const { data } = await Api(rootState.auth.token)
                .post(`profile/follow`, {
                    "followingID": id,
                    "unfollow": false
                });

            if (data.success) {
                const suggestions = state.suggestedUsers.filter(u => u.id !== id);
                commit('setSuggestedUsers', suggestions);
                // fetch feed
                dispatch('feed/fetchFeed', null, { root: true });
            }
        }
        catch (error) {
            console.error("can't follow user", error.message);
        }
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
