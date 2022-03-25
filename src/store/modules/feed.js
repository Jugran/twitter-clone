// for dummy data
import { fetchFeed } from '@/services/feedService'
import { wait } from '@/helpers/wait'



const state = () => {
    return {
        tweets: []
    }
}

const mutations = {
    setTweets(state, tweets) {
        state.tweets = tweets;
    },
    addTweet(state, tweet) {
        state.tweets.unshift(tweet);
    },
    appendTweets(state, tweets) {
        state.tweets = tweets.concat(state.tweets);
    }
}

const actions = {
    async fetchFeed({ commit }) {
        try {
            // const response = await this.$axios.get('/tweets');
            const response = fetchFeed();
            await wait(2000);

            commit('setTweets', response.data);
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
            const timestamp = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + date.toDateString();
            const { user, id } = rootGetters['profile/getProfile'];
            console.log("🚀 ~ addTweet ~ profile",  { user, id })

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
