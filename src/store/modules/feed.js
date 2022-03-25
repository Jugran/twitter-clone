// for dummy data
import { fetchFeed } from '@/services/feedService'
import { wait } from '@/helpers/wait'


const getDefaultState = () => {
    return {
        tweets: []
    }
}
// initial state
const state = getDefaultState()

const mutations = {
    setTweets(state, tweets) {
        state.tweets = tweets;
    },
    addTweet(state, tweet) {
        state.tweets.unshift(tweet);
    },
    appendTweets(state, tweets) {
        state.tweets = tweets.concat(state.tweets);
    },
    resetState(state) {
        Object.assign(state, getDefaultState());
    }
}

const actions = {
    async fetchFeed({ commit, state }) {
        try {
            // const response = await this.$axios.get('/tweets');
            if (state.tweets.length === 0) {
                const response = fetchFeed();
                await wait(2000);
                commit('setTweets', response.data);
            }
        }
        catch (error) {
            console.error("can't fetch tweets", error.message);
        }
    },
    async fetchMore({ commit }, { page }) {
        try {
            const response = await this.$axios.get('/tweets?page=' + page);
            await wait(2000);

            commit('appendTweets', response.data);
        }
        catch (error) {
            console.error("can't fetch tweets", error.message);
        }
    },
    async addTweet({ commit, rootGetters }, text) {
        try {
            // const response = await this.$axios.post('/tweets', { text });

            const date = new Date();
            const timestamp = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " " + date.toDateString();
            const { user, id } = rootGetters['profile/getProfile'];

            const tweet = {
                id: null,
                user: {
                    id,
                    ...user
                },
                content: text,
                timestamp: timestamp,
            }
            tweet.id = (Math.random() * 10000).toFixed(0);
            await wait(1000);

            commit('profile/addTweet', tweet, { root: true });
            commit('addTweet', tweet);
        }
        catch (error) {
            console.error("can't add tweet", error.message);
        }
    }

}

const getters = {
    getFeed(state) {
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
