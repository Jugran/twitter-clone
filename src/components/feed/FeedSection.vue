<template>
  <div class="w-full sm:w-600 h-screen">
    <!-- Header -->
    <div
      class="
        flex
        justify-between
        items-center
        border-b
        px-4
        py-3
        sticky
        top-0
        bg-white
        dark:bg-dim-900
        border-l border-r border-gray-200
        dark:border-gray-700
      "
    >
      <!-- Title -->
      <h2 class="dark:text-gray-100 font-bold font-sm">Home</h2>
      <!-- /Title -->
    </div>

    <!-- Post Tweet -->
    <new-post userProfile="zebra" />

    <div v-for="tweet in tweets" :key="tweet.id">
      <tweet-card :tweet="tweet" />
    </div>

    <!-- Spinner -->
    <div
      v-show="loading"
      class="
        flex
        items-center
        justify-center
        p-1
        border-b border-l border-r border-gray-200
        dark:border-gray-700
      "
    >
      <load-spinner v-show="loading" size="8" />
    </div>
  </div>
</template>

<script>
import NewPost from "../tweet/NewPost.vue";
import TweetCard from "../tweet/TweetCard.vue";

import { fetchFeed } from "../../services/feedService";
import { wait } from "../../helpers/wait";
import LoadSpinner from "../elements/LoadSpinner.vue";

export default {
  name: "FeedSection",
  components: {
    NewPost,
    TweetCard,
    LoadSpinner,
  },
  data() {
    return {
      tweets: [],
      loading: true,
      userProfile: "",
    };
  },
  methods: {
    async fetchTweets() {
      await wait(2000);
      this.loading = true;
      this.tweets = fetchFeed().data;
      console.log("🚀 ~ tweets", this.tweets);
      this.loading = false;
      // this.$http.get('/api/tweets').then(response => {
      //     this.tweets = response.data;
      //     this.loading = false;
      // });
    },
  },
  created() {
    this.fetchTweets();
  },
};
</script>
