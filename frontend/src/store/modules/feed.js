import Api from '@/Api'
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
    async fetchFeed({ commit, rootState }) {
        try {
            const { data } = await Api(rootState.auth.token).get(`tweets/feed`);

            if (data.tweets.length === 0) {
                const response = fetchFeed();
                await wait(1000);
                commit('setTweets', response.data);
            }
            else {
                commit('setTweets', data.tweets);
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
    async addTweet({ commit, rootGetters, rootState }, text) {
        try {

            const date = new Date();
            const timestamp = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " " + date.toDateString();
            const { user, id } = rootGetters['profile/getProfile'];

            const { data } = await Api(rootState.auth.token).post("tweets/new", { text });

            if (data.success) {

                const tweet = {
                    id: data.tweet_id,
                    user: {
                        id,
                        ...user
                    },
                    text,
                    createdAt: timestamp,
                }

                commit('addTweet', tweet);

                return true
            }

            return false;
        }
        catch (error) {
            console.error("can't add tweet", error.message);
            return false;
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
